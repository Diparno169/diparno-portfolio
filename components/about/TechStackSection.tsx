import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiRedux,
} from "react-icons/si";

const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB", bg: "#0b1720" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", bg: "#0b0b0b" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", bg: "#0b1526" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", bg: "#1c1a0b" },
  { name: "Node.js", icon: SiNodedotjs, color: "#83CD29", bg: "#0d1a0b" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF", bg: "#0b0b0b" },
  { name: "MongoDB", icon: SiMongodb, color: "#00ED64", bg: "#08190f" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", bg: "#0a1620" },
  { name: "Git", icon: SiGit, color: "#F05032", bg: "#210b08" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", bg: "#150c22" },
];

export default function TechStackSection() {
  return (
    <section className="border-b border-border px-6 py-10 md:px-10">
      <div className="rounded-2xl border border-blue/30 bg-card/30 p-6">
        <span className="mb-6 block text-xs font-semibold tracking-widest text-blue">
          TECH I WORK WITH 
        </span>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-5 lg:grid-cols-10">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 rounded-xl px-2 py-2 transition-all duration-300 hover:-translate-y-1"
            >
              <div
  className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl transition-all duration-300 group-hover:shadow-glow-blue"
  style={{ backgroundColor: tech.bg, color: tech.color }}
>
  <tech.icon />
</div>
              <span className="text-center text-[11px] font-medium text-gray">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
