"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

function NavLink({ href, label, icon: Icon, isActive, variant, onNavigate }: Props) {
  if (variant === "mobile") {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all ${
          isActive
            ? "bg-red/10 text-red shadow-glow-red"
            : "text-gray hover:bg-white/5 hover:text-white"
        }`}
      >
        <Icon size={18} className={isActive ? "text-red" : undefined} />
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-red/10 text-white shadow-glow-red"
          : "text-gray hover:bg-white/5 hover:text-white"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="active-pill"
          className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-red shadow-glow-red"
        />
      )}
      <Icon
        size={18}
        className={isActive ? "text-red" : "text-gray group-hover:text-blue"}
      />
      <span>{label}</span>
    </Link>
  );
}

export default memo(NavLink);
