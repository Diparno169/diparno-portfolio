"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navItems, services } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 pt-12 md:px-10">
      <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
        <motion.h2
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="group relative inline-block overflow-hidden font-mono text-lg font-bold tracking-widest select-none"
>
  <span className="text-[#4285F4]">D</span>
  <span className="text-[#EA4335]">I</span>
  <span className="text-[#FBBC05]">P</span>
  <span className="text-[#4285F4]">A</span>
  <span className="text-[#34A853]">R</span>
  <span className="text-[#EA4335]">N</span>
  <span className="text-[#FBBC05]">O</span>

  <span className="mx-2" />

  <span className="text-[#4285F4]">C</span>
  <span className="text-[#EA4335]">H</span>
  <span className="text-[#FBBC05]">A</span>
  <span className="text-[#34A853]">T</span>
  <span className="text-[#4285F4]">T</span>
  <span className="text-[#EA4335]">E</span>
  <span className="text-[#FBBC05]">R</span>
  <span className="text-[#34A853]">J</span>
  <span className="text-[#4285F4]">E</span>
  <span className="text-[#EA4335]">E</span>

  {/* Shine Effect */}
  <span
    className="
      pointer-events-none
      absolute
      top-0
      -left-24
      h-full
      w-12
      rotate-12
      bg-gradient-to-r
      from-transparent
      via-white/70
      to-transparent
      blur-[1px]
      animate-[shine_3.5s_linear_infinite]
    "
  />
</motion.h2>
          <p className="mt-3 max-w-[220px] text-sm leading-6 text-gray">
            Building digital experiences with passion and precision. Code.
            Create. Inspire.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-xs font-bold tracking-widest text-green">
            QUICK LINKS
          </h4>
          <ul className="space-y-2.5 text-sm text-gray">
            {navItems.map((item) => (
              <li key={item.label} className="transition hover:text-blue">
                <Link href={item.href}>
  {item.label}
</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-xs font-bold tracking-widest text-green">
            SERVICES
          </h4>
          <ul className="space-y-2.5 text-sm text-gray">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2 transition hover:text-blue">
                <span className="h-1 w-1 rounded-full bg-blue" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-xs font-bold tracking-widest text-green">
            GET IN TOUCH
          </h4>
          <ul className="space-y-3 text-sm text-gray">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-blue" /> diparnochatterjee0@.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-blue" /> +91 9832930356
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-blue" /> India
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/share/14nTQa7KhmH/"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-blue transition hover:shadow-glow-blue"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://wa.me/919832930356"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-green transition hover:shadow-glow-green"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="https://www.instagram.com/chatterjeediparno?igsh=ZjY0cTB2bDk1aTRj"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-red transition hover:shadow-glow-red"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center font-mono text-xs text-gray">
        © Made With By Diparno(JD)
      </div>
    </footer>
  );
}
