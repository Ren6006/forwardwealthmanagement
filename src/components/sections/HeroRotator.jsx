import { NavLink } from "react-router-dom";
import { siteContent } from "../../content/site.ts";
import useScrollReveal from "./useScrollReveal";

export default function HeroRotator() {
  const { heroRotator } = siteContent;
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="reveal relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url('${heroRotator.image}')` }}
    >
      <div className="relative z-10 min-h-screen w-full px-4 md:px-8 lg:px-10 flex items-center justify-center md:justify-start">
        <div className="max-w-2xl text-black text-center md:text-left md:ml-14 lg:ml-20 md:-mt-24">
          <h1 className="text-4xl md:text-6xl leading-tight font-semibold">
            <span className="block whitespace-nowrap">{heroRotator.headingLine1}</span>
            <span className="block whitespace-nowrap">{heroRotator.headingLine2}</span>
          </h1>

          <p className="mt-6 italic font-serif text-xl text-black/90 font-semibold">
            {heroRotator.subheading}
          </p>

          <p className="mt-5 text-base md:text-lg text-black/85 font-medium">{heroRotator.paragraph}</p>

          <NavLink
            to={heroRotator.ctaTo}
            className="inline-flex mt-8 border border-brandAccent bg-brandAccent px-7 py-3 uppercase tracking-wide text-sm text-brandDark transition-colors hover:bg-transparent hover:text-brandAccent"
          >
            {heroRotator.ctaLabel}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
