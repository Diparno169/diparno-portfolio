"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";

// Icon lookup lives here, inside the Client Component, so this stays a
// plain data table. Same guaranteed-safe fallback pattern used elsewhere in
// the project (see SkillCard / ToolsPlatforms): if a react-icons export
// ever fails to resolve, fall back to the matching Lucide icon instead of
// crashing the page.
type SocialLink = {
  label: string;
  href: string;
  Icon: IconType | undefined;
  Fallback: LucideIcon;
  color: string;
};

const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    Icon: FaGithub,
    Fallback: Github,
    color: "#F8FAFC",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diparno-chatterjee-4550b72b9?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    Icon: FaLinkedin,
    Fallback: Linkedin,
    color: "#00A8FF",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+919832930356",
    Icon: FaWhatsapp,
    Fallback: MessageCircle,
    color: "#00FF66",
  },
];

export default function SocialCards() {
  return (
    <div>
      <span className="text-xs font-semibold tracking-widest text-red">
         CONNECT_PROTOCOLS
      </span>

      <div className="mt-4 flex flex-col gap-3">
        {socials.map(({ label,  href, Icon, Fallback, color }) => {
          const Resolved = typeof Icon === "function" ? Icon : Fallback;
          if (process.env.NODE_ENV === "development" && typeof Icon !== "function") {
            // eslint-disable-next-line no-console
            console.warn(
              `[SocialCards] Icon for "${label}" did not resolve from react-icons — using Lucide fallback.`
            );
          }

          return (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="group flex items-center justify-between rounded-xl border border-border bg-card/30 px-5 py-4 transition-all duration-300 hover:border-red/50 hover:shadow-glow-red"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-bg/60 text-lg"
                  style={{ color }}
                >
                  <Resolved />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {label}
                  </span>
                  <span className="block text-xs text-gray"></span>
                </span>
              </div>
              <ArrowRight
                size={16}
                className="text-gray transition-all duration-300 group-hover:translate-x-1 group-hover:text-red"
              />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
