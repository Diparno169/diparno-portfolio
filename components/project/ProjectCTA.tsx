import AboutCTA from "@/components/about/AboutCTA";

// The reference design's bottom "GET IN TOUCH" banner is visually identical
// to the one already used on the About/Skill pages, so we reuse the
// existing component instead of duplicating markup and styles.
export default function ProjectCTA() {
  return <AboutCTA />;
}
