import { siteContent } from "../../content/site.ts";
import useScrollReveal from "./useScrollReveal";

export default function ProfessionalAffiliations() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="reveal py-16 md:py-20 bg-white border-t border-b border-brandDark/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center uppercase tracking-[0.3em] text-brandDark text-sm md:text-base">
          {siteContent.professionalAffiliations.heading}
        </h2>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {siteContent.professionalAffiliations.logos.map((logo) => (
            <div
              key={logo.name}
              className="min-h-20 px-4 py-4 border border-brandDark/15 bg-white text-center flex items-center justify-center overflow-hidden"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className={`w-auto object-contain ${
                  logo.name === "IDFA"
                    ? "max-h-14 scale-[1.55]"
                    : logo.name === "CFA Institute"
                      ? "max-h-12 scale-[3.2]"
                      : "max-h-11"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
