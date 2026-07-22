"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExperienceQuoteBanner() {
  return (
    <section className="px-4 py-6 md:px-10 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-red/30
          bg-[#090b13]
          h-[120px]
          sm:h-[160px]
          md:h-[190px]
          lg:h-[220px]
        "
      >
        <Image
          src="/images/experience-banner.png"
          alt="Experience Banner"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[72%_center]
            sm:object-[70%_center]
            md:object-center
            lg:object-center
          "
        />

        <div className="absolute inset-0 bg-black/25" />
      </motion.div>
    </section>
  );
}