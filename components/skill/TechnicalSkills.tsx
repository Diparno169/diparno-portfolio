import SkillCard, { type SkillIconName } from "./SkillCard";

type SkillData = {
  icon: SkillIconName;
  name: string;
  percent: number;
  iconColor: string;
  iconBg: string;
  barColor: string;
};

const skills: SkillData[] = [
  { icon: "html5", name: "HTML5", percent: 95, iconColor: "#E34F26", iconBg: "#2a1208", barColor: "#FF5A36" },
  { icon: "css3", name: "CSS", percent: 90, iconColor: "#1572B6", iconBg: "#0b1a26", barColor: "#00A8FF" },
  { icon: "javascript", name: "JavaScript", percent: 90, iconColor: "#111111", iconBg: "#F7DF1E", barColor: "#F7DF1E" },
  { icon: "typescript", name: "TypeScript", percent: 80, iconColor: "#FFFFFF", iconBg: "#3178C6", barColor: "#3178C6" },
  { icon: "react", name: "React", percent: 90, iconColor: "#61DAFB", iconBg: "#0b1720", barColor: "#61DAFB" },
  { icon: "nextjs", name: "Next.js", percent: 85, iconColor: "#FFFFFF", iconBg: "#0b0b0b", barColor: "#94A3B8" },
  { icon: "nodejs", name: "Node.js", percent: 88, iconColor: "#83CD29", iconBg: "#0d1a0b", barColor: "#83CD29" },
  { icon: "express", name: "Express.js", percent: 85, iconColor: "#FFFFFF", iconBg: "#0b0b0b", barColor: "#94A3B8" },
  { icon: "python", name: "Python", percent: 85, iconColor: "#FFD43B", iconBg: "#0b1526", barColor: "#FFD43B" },
  { icon: "php", name: "PHP", percent: 80, iconColor: "#777BB4", iconBg: "#140b26", barColor: "#8B5CF6" },
  { icon: "mysql", name: "MySQL", percent: 85, iconColor: "#4479A1", iconBg: "#0a1a26", barColor: "#00A8FF" },
  { icon: "mongodb", name: "MongoDB", percent: 80, iconColor: "#47A248", iconBg: "#08190f", barColor: "#47A248" },
  { icon: "git", name: "Git & GitHub", percent: 90, iconColor: "#F05032", iconBg: "#210b08", barColor: "#FF003C" },
  { icon: "tailwind", name: "Tailwind CSS", percent: 85, iconColor: "#38BDF8", iconBg: "#0a1620", barColor: "#38BDF8" },
  { icon: "firebase", name: "Firebase", percent: 75, iconColor: "#FFCA28", iconBg: "#201a08", barColor: "#FFCA28" },
  { icon: "restapi", name: "REST API", percent: 85, iconColor: "#00A8FF", iconBg: "#0a1620", barColor: "#00A8FF" },
];

export default function TechnicalSkills() {
  return (
    <div className="relative rounded-2xl border border-red/30 bg-card/20 p-5 sm:p-7">
      {/* corner decorations */}
      <span className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-red/60" />
      <span className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-red/60" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-red/60" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-red/60" />

      <div className="mb-6 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-red/40 sm:w-20" />
        <h2 className="text-center text-lg font-extrabold tracking-widest text-white sm:text-xl">
          TECHNICAL SKILLS
        </h2>
        <span className="h-px w-10 bg-red/40 sm:w-20" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
