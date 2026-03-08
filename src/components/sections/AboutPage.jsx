import { siteContent } from "../../content/site.ts";
import useScrollReveal from "./useScrollReveal";

export default function AboutPage() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="reveal py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-brandDark text-center">{siteContent.about.heading}</h1>
        <div className="mt-4 h-[2px] w-20 mx-auto bg-brandAccent" />

        <div className="mt-12 space-y-14">
          {siteContent.about.bios.map((bio) => (
            <article key={bio.name} className="grid lg:grid-cols-[320px_1fr] gap-8 md:gap-10 items-start">
              <img
                src={bio.image}
                alt={bio.name}
                className="w-full max-w-[320px] aspect-[4/5] object-cover mx-auto lg:mx-0"
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
