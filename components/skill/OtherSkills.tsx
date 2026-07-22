import { Target, ChevronRight } from "lucide-react";

const otherSkills = [
  { name: "Data Structures & Algorithms", level: 5 },
  { name: "Problem Solving", level: 5 },
  { name: "Object Oriented Programming", level: 5 },
  { name: "Linux / Command Line", level: 4 },
  { name: "Figma (UI/UX Design)", level: 4 },
  { name: "Postman", level: 4 },
];

const DOTS = 6;

export default function OtherSkills() {
  return (
    <div className="rounded-2xl border border-red/30 bg-card/20 p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <Target size={16} className="text-red" />
        <h3 className="text-sm font-bold tracking-widest text-white">OTHER SKILLS</h3>
      </div>

      <ul className="flex flex-col gap-3">
        {otherSkills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5 text-sm text-gray">
              <ChevronRight size={14} className="text-red/70" />
              {skill.name}
            </span>
            <span className="flex shrink-0 gap-1.5">
              {Array.from({ length: DOTS }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i < skill.level ? "bg-red shadow-glow-red" : "bg-white/10"
                  }`}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
