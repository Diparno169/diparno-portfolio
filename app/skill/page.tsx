import type { Metadata } from "next";
import AboutCTA from "@/components/about/AboutCTA";
import SkillHero from "@/components/skill/SkillHero";
import TechnicalSkills from "@/components/skill/TechnicalSkills";
import OtherSkills from "@/components/skill/OtherSkills";
import ToolsPlatforms from "@/components/skill/ToolsPlatforms";
import SkillCTA from "@/components/skill/SkillCTA";

export const metadata: Metadata = {
  title: "Skills | Diparno Chatterjee",
  description:
    "Built with code, driven by passion — technical skills, tools, and platforms used by Diparno Chatterjee, Full Stack Developer.",
};

export default function SkillPage() {
  return (
    <>
      <SkillHero />

      <section className="border-b border-border px-6 py-10 md:px-10">
        <TechnicalSkills />
      </section>

      <section className="grid grid-cols-1 gap-5 border-b border-border px-6 pb-16 md:px-10 lg:grid-cols-2">
        <OtherSkills />
        <ToolsPlatforms />
      </section>

      <section className="border-b border-border px-6 pb-10 md:px-10">
        <SkillCTA />
      </section>

      <AboutCTA />
    </>
  );
}
