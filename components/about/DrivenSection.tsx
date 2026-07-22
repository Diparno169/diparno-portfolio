import WhatDrivesMe from "./WhatDrivesMe";
import BeyondTheCode from "./BeyondTheCode";

export default function DrivenSection() {
  return (
    <section className="grid grid-cols-1 gap-8 border-b border-border px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-10">
      <WhatDrivesMe />
      <BeyondTheCode />
    </section>
  );
}
