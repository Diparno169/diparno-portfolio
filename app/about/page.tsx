import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StatsSection from "@/components/about/StatsSection";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import TechStackSection from "@/components/about/TechStackSection";
import DrivenSection from "@/components/about/DrivenSection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About | Diparno Chatterjee",
  description:
    "Code is my passion, football is my life. Learn more about Diparno Chatterjee - Full Stack Developer.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsSection />
      <JourneyTimeline />
      <TechStackSection />
      <DrivenSection />
      <AboutCTA />
    </>
  );
}
