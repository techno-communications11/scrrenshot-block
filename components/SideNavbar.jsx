"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Activity,
  Sparkles,
  ClipboardCheck,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const navItems = [
  { name: "Wall Of Frame", href: "/", icon: Home },
  { name: "Ranker", href: "/ranker", icon: Activity },
  { name: "Happening", href: "/HappeningSection", icon: Sparkles },
  { name: "Criteria", href: "/criteria", icon: ClipboardCheck },
];

export default function Sidebar({ isOpen = true, onToggle }) {
  const pathname = usePathname();

  return (
    <>
      {/* Toggle Button - Always Visible, Fixed Position */}
      <button
        onClick={() => onToggle?.()}
        className={`
          fixed top-4 z-50 p-2.5 rounded-xl bg-white border border-slate-200 shadow-md 
          hover:bg-slate-50 active:scale-95 transition-all duration-200
          ${isOpen ? "left-64" : "left-20"}
        `}
        title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-white border-r border-slate-200 shadow-lg z-40
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "w-64" : "w-20"}
        `}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          {isOpen && (
            <h1 className="text-lg font-bold text-indigo-600 truncate">
              Admin Panel
            </h1>
          )}
          <button
            aria-label="Toggle sidebar"
            className="text-slate-500 hover:text-slate-900"
            onClick={() => onToggle?.()}
          >
            {isOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${active
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:bg-slate-100"
                  }
                  ${!isOpen ? "justify-center" : ""}
                `}
                title={!isOpen ? item.name : undefined}
              >
                <Icon size={18} className="flex-shrink-0" />
                {isOpen && <span className="truncate">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-4 w-full px-3">
          {isOpen ? (
            <div className="bg-indigo-50 rounded-xl p-3 text-xs text-indigo-700">
              <p className="font-semibold">Upgrade Plan</p>
              <p>Unlock full analytics features</p>
            </div>
          ) : (
            <button 
              className="w-full bg-indigo-50 rounded-xl p-2.5 text-indigo-700 hover:bg-indigo-100 transition-colors"
              title="Upgrade Plan"
            >
              <Sparkles size={18} className="mx-auto" />
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
