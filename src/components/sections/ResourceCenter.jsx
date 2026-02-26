import { siteContent } from "../../content/site.ts";
import SectionHeading from "./SectionHeading";
import useScrollReveal from "./useScrollReveal";

export default function ResourceCenter() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={siteContent.resources.heading} />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.resources.cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden border border-brandDark/10"
            >
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-5 bg-white">
                <h3 className="text-2xl text-brandDark">{card.title}</h3>
                <p className="mt-2 text-brandDark/80">{card.blurb}</p>
              </div>
              <div className="absolute inset-0 bg-brandDark/0 transition-colors group-hover:bg-brandDark/15" />
              <span className="absolute right-4 bottom-4 text-white text-2xl opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
