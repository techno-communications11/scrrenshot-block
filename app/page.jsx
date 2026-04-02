"use client";
import { useContentProtection } from "@/hooks/useContentProtection";

const protections = [
  { icon: "🖨️", label: "Print blocked", desc: "Ctrl+P and window.print() are intercepted. Before-print hook cancels the event." },
  { icon: "💾", label: "Save blocked", desc: "Ctrl+S and Ctrl+Shift+S are captured and suppressed at keydown." },
  { icon: "📷", label: "Screenshot blur", desc: "PrtScr triggers an instant full-card blur overlay for 1.8 seconds." },
  { icon: "🖱️", label: "Context disabled", desc: "Right-click and text selection are blocked. Copy/cut events are cancelled." },
  { icon: "🔧", label: "DevTools blocked", desc: "Ctrl+Shift+I, Ctrl+Shift+J, F12 and Ctrl+U are all suppressed." },
  { icon: "🙈", label: "Print CSS hidden", desc: "@media print hides everything. Even if dialog opens, nothing prints." },
];

export default function Home() {
  const { blurActive, blockCount, logs } = useContentProtection();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-6 py-16 font-mono">
      <main className="relative w-full max-w-4xl rounded-2xl border border-[#1e1e1e] bg-[#0f0f0f] p-10 shadow-2xl">

        {/* Screenshot blur overlay */}
        {blurActive && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-3 rounded-2xl bg-black/90 backdrop-blur-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-500 text-2xl">
              ⛔
            </div>
            <p className="text-xs uppercase tracking-widest text-red-400">
              Screenshot blocked — content hidden
            </p>
          </div>
        )}

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-[#222] px-2.5 py-1 text-[11px] uppercase tracking-widest text-[#555]">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]" />
          Protection active
        </div>

        {/* Heading */}
        <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-[#f0f0f0] sm:text-5xl">
          Content is{" "}
          <span className="text-red-500">locked</span>{" "}
          from capture &amp; export
        </h1>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-[#555]">
          PrintScreen, Ctrl+P, Ctrl+S, right-click, text selection, copy, and
          devtools shortcuts are all intercepted. Print events are suppressed
          before the browser dialog appears.
        </p>

        {/* Feature grid */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {protections.map(({ icon, label, desc }) => (
            <article
              key={label}
              className="rounded-xl border border-[#1a1a1a] bg-[#111] p-4 transition-colors hover:border-[#2a2a2a]"
            >
              <div className="mb-2 text-lg">{icon}</div>
              <h2 className="mb-1 text-[11px] font-medium uppercase tracking-widest text-[#888]">
                {label}
              </h2>
              <p className="text-xs leading-relaxed text-[#444]">{desc}</p>
            </article>
          ))}
        </div>

        {/* Block count */}
        <div className="mb-3 flex items-center rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-3 text-xs text-[#444]">
          <span>Blocked attempts</span>
          <span className="ml-auto font-medium text-red-500">{blockCount}</span>
        </div>

        {/* Live log */}
        <div className="h-24 overflow-y-auto rounded-lg border border-[#1a1a1a] bg-[#080808] px-4 py-3 text-[11px] leading-loose text-[#3a3a3a]">
          {logs.length === 0 ? (
            <span>— waiting for blocked actions —</span>
          ) : (
            logs.map((l, i) => (
              <div key={i} className={i === 0 ? "text-red-500" : "text-[#3a3a3a]"}>
                [{l.time}] {l.msg}
              </div>
            ))
          )}
        </div>

        {/* Note */}
        <p className="mt-6 border-l-2 border-[#1e1e1e] pl-4 text-[11px] leading-relaxed text-[#383838]">
          Note: OS-level PrintScreen and phone cameras cannot be blocked by any
          browser code. For maximum security, combine this with server-side DRM.
        </p>
      </main>
    </div>
  );
}