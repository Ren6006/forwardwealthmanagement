import { siteContent } from "../../content/site.ts";
import SectionHeading from "./SectionHeading";
import useScrollReveal from "./useScrollReveal";

export default function RetirementRisks() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-24 bg-brandLight/20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={siteContent.risks.heading} />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.risks.cards.map((card) => (
            <article key={card.title} className="bg-white border border-brandDark/10 overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl text-brandDark">{card.title}</h3>
                <p className="mt-3 text-brandDark/80">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
