import { NavLink } from "react-router-dom";
import { siteContent } from "../../content/site.ts";
import useScrollReveal from "./useScrollReveal";

export default function EmpoweringFuture() {
  const sectionRef = useScrollReveal();
  const { empoweringFuture } = siteContent;

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-24 bg-brandLight/35">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={empoweringFuture.image}
          alt={empoweringFuture.heading}
          className="w-full h-[340px] md:h-[420px] object-cover"
        />

        <div>
          <h2 className="text-4xl md:text-5xl text-brandDark">{empoweringFuture.heading}</h2>
          <p className="mt-6 text-brandDark/80 leading-relaxed">{empoweringFuture.body}</p>
          <NavLink
            to={empoweringFuture.buttonTo}
            className="inline-flex mt-8 border border-brandAccent px-6 py-3 uppercase tracking-wide text-sm text-brandDark transition-colors hover:bg-brandAccent hover:text-brandDark"
          >
            {empoweringFuture.buttonLabel}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
