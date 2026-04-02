"use client";

import { useState } from "react";
import Sidebar from "./SideNavbar";

export default function ClientShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-slate-100">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <main
        className={`flex-1 min-h-screen transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        } overflow-y-auto`}
      >
        {children}
      </main>
    </div>
  );
}
