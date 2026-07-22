"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Power } from "lucide-react";
import { navItems } from "@/lib/data";
import NavLink from "./NavLink";
import { useShutdown } from "@/context/ShutdownContext";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { startShutdown } = useShutdown();

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-1 text-2xl font-black">
      </div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        className="rounded-lg border border-border p-2 text-white"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-1 border-b border-border bg-card px-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
              variant="mobile"
              onNavigate={closeMenu}
            />
          ))}
          <button
  onClick={() => {
    closeMenu();
    startShutdown();
  }}
  className="mt-1 flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-red/80 transition hover:bg-red/10"
>
            <Power size={18} />
            Shutdown
          </button>
        </div>
      )}
    </div>
  );
}
