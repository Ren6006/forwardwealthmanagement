import { siteContent } from "../../content/site.ts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AboutPage() {
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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-brandDark text-center">{siteContent.about.heading}</h1>
        <div className="mt-4 h-[2px] w-20 mx-auto bg-[#A9C0C8]" />

        <div className="mt-12 space-y-14">
          {siteContent.about.bios.map((bio) => (
            <article
              id={bio.id}
              key={bio.name}
              className="grid lg:grid-cols-[320px_1fr] gap-8 md:gap-10 items-start scroll-mt-44 bg-[#F9F9F9] p-6 md:p-8"
            >
              <img
                src={bio.image}
                alt={bio.name}
                className={`w-full max-w-[320px] aspect-[4/5] mx-auto lg:mx-0 ${
                  bio.id === "katerina" ? "object-contain" : "object-cover"
                }`}
              />

              <div>
                <h2 className="text-3xl text-brandDark">{bio.name}</h2>
                <div className="mt-5 space-y-4 text-brandDark/90 leading-relaxed">
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
