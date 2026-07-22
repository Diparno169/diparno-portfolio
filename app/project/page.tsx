import type { Metadata } from "next";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectsGrid from "@/components/project/ProjectsGrid";
import ProjectBanner from "@/components/project/ProjectBanner";
import ProjectCTA from "@/components/project/ProjectCTA";

export const metadata: Metadata = {
  title: "Projects | Diparno Chatterjee",
  description:
    "Ideas. Code. Impact. Selected projects by Diparno Chatterjee — Full Stack Developer.",
};

export default function ProjectPage() {
  return (
    <>
      <ProjectHero />

      <section className="border-b border-border px-6 py-12 md:px-10">
        <ProjectsGrid />
      </section>

      <section className="px-6 py-10 md:px-10">
        <ProjectBanner />
      </section>

      <ProjectCTA />
    </>
  );
}
