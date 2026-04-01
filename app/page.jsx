"use client";
import { useContentProtection } from "@/hooks/useContentProtection";

const protections = [
  {
    icon: "🛡️",
    label: "Print blocked",
    desc: "Ctrl+P and window.print() calls are intercepted; beforeprint cancels the dialog.",
  },
  {
    icon: "💾",
    label: "Save blocked",
    desc: "Ctrl+S, Ctrl+Shift+S, and the browser save menu are captured at keydown.",
  },
  {
    icon: "📷",
    label: "Screenshot blur",
    desc: "PrintScreen triggers a full-card blur for 1.8 seconds, hiding the content.",
  },
  {
    icon: "⚙️",
    label: "Context disabled",
    desc: "Right-click, selection, copy, and cut events are all prevented.",
  },
  {
    icon: "🧠",
    label: "DevTools guarded",
    desc: "Ctrl+Shift+I/J, F12, and Ctrl+U log an alert before the console opens.",
  },
  {
    icon: "🕸️",
    label: "Print CSS hidden",
    desc: "Print stylesheets hide every element so nothing renders even if a dialog appears.",
  },
];

export default function Home() {
  const { blurActive, blockCount, logs, attempts, sessionId } = useContentProtection();
  const sessionTag = sessionId.slice(0, 8).toUpperCase();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-6 py-16">
      <main className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#171717] bg-[#0c0c0c] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.75)]">

        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 -rotate-6 whitespace-nowrap text-[110px] font-semibold uppercase tracking-[0.6em] text-white/5">
            <span className="block leading-[0.8]">CONFIDENTIAL</span>
            <span className="block text-[60px] tracking-[0.5em]">SESSION {sessionTag}</span>
          </div>
        </div>

        {blurActive && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center rounded-3xl bg-black/90 text-center text-white">
            <div className="mb-3 h-12 w-12 rounded-full border border-red-500 text-2xl leading-[2.75rem] text-red-500">
              ⛔
            </div>
            <p className="text-xs uppercase tracking-widest text-red-400">
              Screenshot detected — content blurred
            </p>
          </div>
        )}

        <div className="relative z-10 space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#222] px-3 py-1 text-[11px] uppercase tracking-[0.6em] text-[#8a8a8a]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
              Protection active
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Content is <span className="text-red-500">locked</span> from capture
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[#bdbdbd]">
              PrintScreen, Ctrl+P, Ctrl+S, devtools shortcuts, and context menu actions are intercepted.
              When PrintScreen fires, we blur the card, log the attempt, and send an audit entry to
              {` `}
              <span className="font-semibold text-white">/api/monitor</span>.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {protections.map(({ icon, label, desc }) => (
              <article
                key={label}
                className="rounded-2xl border border-[#1c1c1c] bg-[#111] p-4 text-[11px] leading-relaxed text-[#999]"
              >
                <div className="mb-2 text-2xl">{icon}</div>
                <h2 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.5em] text-[#757575]">
                  {label}
                </h2>
                <p>{desc}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-[#1c1c1c] bg-[#080808] p-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#888]">Blocked attempts</p>
              <p className="text-[10px] text-[#5c5c5c]">Total blocked actions: {blockCount}</p>
              <div className="mt-3 h-28 overflow-y-auto text-[11px] leading-tight text-[#4b4b4b]">
                {logs.length === 0 ? (
                  <span className="text-[#2f2f2f]">— waiting for blocked actions —</span>
                ) : (
                  logs.map((log, index) => (
                    <div
                      key={`${log.time}-${index}`}
                      className={index === 0 ? "text-red-500" : "text-[#4b4b4b]"}
                    >
                      [{log.time}] {log.msg}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-[#1c1c1c] bg-[#080808] p-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#888]">Session tag</p>
              <p className="mt-1 text-sm font-mono text-white">{sessionTag}</p>
              <ul className="mt-4 space-y-1 text-[11px] text-[#4b4b4b]">
                {attempts.length === 0 ? (
                  <li>— no screenshot attempts yet —</li>
                ) : (
                  attempts.map((attempt) => (
                    <li key={attempt.iso}>
                      {attempt.time} · {attempt.method}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          <p className="border-l-2 border-[#1e1e1e] pl-4 text-[11px] leading-relaxed text-[#555]">
            Note: Browsers can only deter captures; OS-level tools (PrintScreen key, share APIs, phone camera) are still outside our control.
            Pair this experience with a kiosk/managed runtime if you need guaranteed prevention.
          </p>
        </div>
      </main>
    </div>
  );
}
