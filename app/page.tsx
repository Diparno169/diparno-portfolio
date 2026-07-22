import Hero from "@/components/hero/Hero";
import StatusBar from "@/components/hero/StatusBar";
import SkillsSlider from "@/components/skills/SkillsSlider";
import About from "@/components/about/About";
import YoutubeSection from "@/components/youtube/YoutubeSection";
import Terminal from "@/components/terminal/Terminal";



export default function Home() {
  return (
    <>
     
      <StatusBar />
      <Hero />
      <SkillsSlider />
      <About />

      <YoutubeSection />
      <Terminal />
    </>
  );
}
