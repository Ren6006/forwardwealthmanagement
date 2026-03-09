import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { siteContent } from "../../content/site.ts";

export default function ServicesPage() {
  const pageRef = useRef(null);
  const { services } = siteContent;

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const items = root.querySelectorAll("[data-service-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={pageRef} className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl text-brandDark">{services.heading}</h1>
          <div className="mt-4 h-[2px] w-20 mx-auto bg-[#A9C0C8]" />
        </div>

        <div className="mt-12 space-y-10">
          {services.sections.map((item, index) => {
            const isImageRight = index % 2 === 0;
            return (
              <article
                key={item.title}
                data-service-reveal
                className={`grid md:grid-cols-2 gap-8 md:gap-10 items-center bg-brandLight/70 p-6 md:p-8 ${
                  index % 2 === 0 ? "reveal-right" : "reveal-left"
                }`}
              >
                <div className={isImageRight ? "order-2 md:order-1" : "order-2"}>
                  <h2 className="text-3xl md:text-4xl text-brandDark">{item.title}</h2>
                  <p className="mt-4 font-semibold text-brandDark">
                    {item.lead}
                  </p>
                  <p className="mt-3 text-brandDark/80 leading-relaxed">{item.body}</p>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className={isImageRight ? "order-1 md:order-2 w-full h-64 md:h-80 object-cover" : "w-full h-64 md:h-80 object-cover"}
                />
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center bg-brandLight/30 py-12 px-6">
          <h3 className="text-3xl md:text-4xl text-brandDark">{services.closingTitle}</h3>
          <NavLink
            to={services.closingCtaTo}
            className="inline-flex mt-7 border border-brandAccent bg-brandAccent px-7 py-3 uppercase tracking-wide text-sm text-brandDark transition-colors hover:bg-transparent hover:text-brandAccent"
          >
            {services.closingCtaLabel}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
