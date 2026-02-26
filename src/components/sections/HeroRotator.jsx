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
      <div className="absolute inset-0 md:bg-gradient-to-r md:from-black/75 md:via-black/45 md:to-transparent bg-black/65" />

      <div className="relative z-10 min-h-screen max-w-6xl mx-auto px-6 flex items-center justify-center md:justify-start">
        <div className="max-w-2xl text-white text-center md:text-left">
          <h1 className="text-5xl md:text-7xl leading-tight">
            {heroRotator.headingLine1}
            <br />
            {heroRotator.headingLine2}
          </h1>

          <p className="mt-6 italic font-serif text-xl text-brandLight">
            {heroRotator.subheading}
          </p>

          <p className="mt-5 text-base md:text-lg text-white/90">{heroRotator.paragraph}</p>

          <NavLink
            to={heroRotator.ctaTo}
            className="inline-flex mt-8 border border-brandAccent px-7 py-3 uppercase tracking-wide text-sm text-brandAccent transition-colors hover:bg-brandAccent hover:text-brandDark"
          >
            {heroRotator.ctaLabel}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
