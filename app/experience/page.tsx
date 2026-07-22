import type { Metadata } from "next";
import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import EducationCertifications from "@/components/experience/EducationCertifications";
import AchievementsHighlights from "@/components/experience/AchievementsHighlights";
import ExperienceQuoteBanner from "@/components/experience/ExperienceQuoteBanner";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export const metadata: Metadata = {
  title: "Experience | Diparno Chatterjee",
  description:
    "Every step, every lesson - the education, training and hands-on experience that shaped Diparno Chatterjee as a Full Stack Developer.",
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <ExperienceTimeline />
      <EducationCertifications />
      <AchievementsHighlights />
      <ExperienceQuoteBanner />
      <ExperienceCTA />
    </>
  );
}
