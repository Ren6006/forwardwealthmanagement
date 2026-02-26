import { useState } from "react";
import { siteContent } from "../../content/site.ts";
import SectionHeading from "./SectionHeading";
import useScrollReveal from "./useScrollReveal";

export default function ThreePillars() {
  const [active, setActive] = useState(siteContent.threePillars.pillars[0].id);
  const sectionRef = useScrollReveal();
  const activePillar =
    siteContent.threePillars.pillars.find((pillar) => pillar.id === active) ??
    siteContent.threePillars.pillars[0];

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={siteContent.threePillars.heading} />

        <div className="hidden md:flex justify-center gap-4 mt-10">
          {siteContent.threePillars.pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActive(pillar.id)}
              className={`px-5 py-2 uppercase tracking-wide text-sm border transition-colors ${
                active === pillar.id
                  ? "bg-brandAccent text-brandDark border-brandAccent"
                  : "bg-transparent text-brandDark border-brandDark/20 hover:border-brandAccent"
              }`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        <div className="hidden md:grid mt-10">
          <article className="grid grid-cols-2 gap-8 items-center bg-brandLight/35 p-6 md:p-8">
            <img
              src={activePillar.image}
              alt={activePillar.title}
              className="w-full h-[300px] object-cover"
            />
            <div>
              <h3 className="text-3xl text-brandDark">{activePillar.title}</h3>
              <p className="mt-3 italic font-bold font-serif text-lg text-brandDark/80">
                {activePillar.subtitle}
              </p>
              <p className="mt-4 text-brandDark/80 leading-relaxed">{activePillar.description}</p>
            </div>
          </article>
        </div>

        <div className="md:hidden mt-10 space-y-5">
          {siteContent.threePillars.pillars.map((pillar) => (
            <article key={pillar.id} className="bg-brandLight/30 p-5 reveal is-visible">
              <img src={pillar.image} alt={pillar.title} className="w-full h-56 object-cover" />
              <h3 className="mt-4 text-2xl text-brandDark">{pillar.title}</h3>
              <p className="mt-2 italic font-bold font-serif text-brandDark/80">{pillar.subtitle}</p>
              <p className="mt-3 text-brandDark/80">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
