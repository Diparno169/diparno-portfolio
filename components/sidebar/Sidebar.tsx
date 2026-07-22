"use client";

import { usePathname } from "next/navigation";
import { Power } from "lucide-react";
import { navItems } from "@/lib/data";
import NavLink from "./NavLink";
import { useShutdown } from "@/context/ShutdownContext";


export default function Sidebar() {
  const pathname = usePathname();
  const { startShutdown } = useShutdown();
  

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[220px] flex-col justify-between border-r border-border bg-card/60 px-5 py-8 backdrop-blur-md lg:flex">
      <div>

        {/* Nav items */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
              variant="desktop"
            />
          ))}
        </nav>
      </div>

      {/* Shutdown */}
      <button
  onClick={startShutdown}
  className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red/80 transition-all hover:bg-red/10 hover:text-red hover:shadow-glow-red"
>
        <Power size={18} />
        <span>Shutdown</span>
      </button>
    </aside>
  );
}
