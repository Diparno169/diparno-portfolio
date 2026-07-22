import StatCard from "./StatCard";

export default function StatsSection() {
  return (
    <section className="border-b border-border px-6 py-8 md:px-10">
      <div className="flex flex-col gap-4 rounded-2xl border border-blue/20 bg-card/20 p-4 sm:flex-row">
        <StatCard icon="target" target={2} suffix="+" label="YEARS EXPERIENCE" color="#00A8FF" />
        <StatCard icon="code" target={10} suffix="+" label="PROJECTS COMPLETED" color="#FF003C" />
        <StatCard icon="coffee" target={1000} suffix="+" label="HOURS CODING" color="#00A8FF" />
        <StatCard
          icon="trophy"
          target={0}
          suffix=""
          label="FOOTBALL LOVER"
          color="#FF003C"
          labelIsValue
          valueText="LIFELONG"
        />
      </div>
    </section>
  );
}
