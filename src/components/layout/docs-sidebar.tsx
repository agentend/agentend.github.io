"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookOpen, X } from "lucide-react";
import { docsNav } from "@/lib/docs-nav";

export default function DocsSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <>
      {docsNav.map((section) => (
        <div key={section.title} className="mb-8">
          <h4 className="text-text-muted text-xs font-mono uppercase tracking-wider mb-3">
            {section.title}
          </h4>
          <div className="flex flex-col">
            {section.items.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-1.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-accent border-l-2 border-accent pl-3"
                      : "text-text-secondary hover:text-text-primary pl-3"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 pr-8 shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile floating button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 right-6 md:hidden bg-gradient-brand text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-50 hover:opacity-90 transition-opacity duration-200"
        aria-label="Open docs navigation"
      >
        <BookOpen className="w-5 h-5" />
      </button>

      {/* Mobile overlay + sidebar */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="fixed top-0 left-0 bottom-0 w-72 bg-bg border-r border-border z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display italic text-lg text-text-primary">Docs</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}
