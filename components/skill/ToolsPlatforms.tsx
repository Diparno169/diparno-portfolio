import { Wrench, Box } from "lucide-react";
import {
  SiWebstorm,
  SiPostman,
  SiMongodb,
  SiFigma,
  SiNetlify,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";



const tools: { name: string; Icon: IconType | undefined; color: string }[] = [
  //{ name: "VS Code", Icon: Code2, color: "#007ACC" },
  { name: "WebStorm", Icon: SiWebstorm, color: "#FF318C" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "MongoDB Atlas", Icon: SiMongodb, color: "#47A248" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
];

export default function ToolsPlatforms() {
  return (
    <div className="rounded-2xl border border-red/30 bg-card/20 p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <Wrench size={16} className="text-red" />
        <h3 className="text-sm font-bold tracking-widest text-white">TOOLS &amp; PLATFORMS</h3>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {tools.map(({ name, Icon, color }) => {
          // Same guaranteed-safe fallback as SkillCard: never render an
          // undefined component reference.
          const Resolved = typeof Icon === "function" ? Icon : Box;
          if (process.env.NODE_ENV === "development" && typeof Icon !== "function") {
            // eslint-disable-next-line no-console
            console.warn(
              `[ToolsPlatforms] Icon for "${name}" did not resolve from react-icons — using fallback icon.`
            );
          }
          return (
            <div
              key={name}
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-bg/40 px-2 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-red/50 hover:shadow-glow-red"
            >
              <Resolved size={22} style={{ color }} />
              <span className="text-center text-[10px] font-medium leading-3 text-gray">
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
