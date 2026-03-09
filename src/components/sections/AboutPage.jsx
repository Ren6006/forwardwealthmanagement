import { siteContent } from "../../content/site.ts";
import useScrollReveal from "./useScrollReveal";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AboutPage() {
  const sectionRef = useScrollReveal();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 170;
    window.scrollTo({ top, behavior: "smooth" });
  }, [hash]);

  return (
    <section ref={sectionRef} className="reveal py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-brandDark text-center">{siteContent.about.heading}</h1>
        <div className="mt-4 h-[2px] w-20 mx-auto bg-[#A9C0C8]" />
        <p className="mt-4 text-center text-brandDark font-serif italic font-semibold text-xl md:text-2xl">Two Disciplines. One Coordinated Strategy.</p>
        <p className="mt-5 text-center text-brandDark/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          At Forward Wealth Management, investment strategy and financial planning are designed together. Our partnership combines deep expertise in portfolio architecture and financial decision strategy so clients can navigate complexity with clarity.
        </p>

        <div className="mt-12 space-y-8">
          {siteContent.about.bios.map((bio) => (
            <article
              id={bio.id}
              key={bio.name}
              className="bg-[#F9F9F9] rounded-lg p-8 md:p-10 grid lg:grid-cols-[320px_1fr] gap-8 md:gap-10 items-start scroll-mt-44"
            >
              <img
                src={bio.image}
                alt={bio.name}
                className="w-full max-w-[320px] object-contain mx-auto lg:mx-0"
              />

              <div>
                <h2 className="text-3xl text-brandDark">{bio.name}</h2>
                <div className="mt-5 space-y-4 text-brandDark/85 leading-relaxed">
                  {bio.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
