import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      <div className="relative z-10 min-h-screen max-w-6xl mx-auto px-6 flex items-center justify-center md:justify-start">
        <div className="text-center md:text-left max-w-2xl text-white">
          <h1 className="font-heading text-5xl md:text-7xl leading-tight">
            Forward Thinking.
            <br />
            Lasting Wealth.
          </h1>

          <p className="mt-6 italic font-serif text-xl text-brandLight">
            Guidance rooted in trust. Strategies built for generations.
          </p>

          <p className="mt-5 text-base md:text-lg text-white/90">
            We help families and business owners make confident financial decisions with a long-term perspective.
          </p>

          <NavLink
            to="/contact"
            className="inline-flex mt-8 border border-brandAccent px-7 py-3 uppercase tracking-wide text-sm text-brandAccent transition-colors hover:bg-brandAccent hover:text-brandDark"
          >
            Schedule a Consultation
          </NavLink>
        </div>
      </div>
    </section>
  );
}
