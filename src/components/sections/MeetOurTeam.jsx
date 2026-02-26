import { siteContent } from "../../content/site.ts";
import SectionHeading from "./SectionHeading";
import useScrollReveal from "./useScrollReveal";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.06c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.04V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3V21h-4V9Z" />
    </svg>
  );
}

export default function MeetOurTeam() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={siteContent.team.heading} />

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {siteContent.team.members.map((member) => (
            <article
              key={member.email}
              className="group border border-brandDark/10 p-6 transition-colors hover:bg-brandAccent"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover"
              />
              <h3 className="mt-5 text-2xl text-brandDark transition-colors group-hover:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-brandDark/70 transition-colors group-hover:text-white/95">
                {member.role}
              </p>
              <p className="mt-4 text-sm text-brandDark/80 transition-colors group-hover:text-white/95">
                {member.phone}
              </p>
              <a
                href={`mailto:${member.email}`}
                className="mt-2 block text-sm text-brandDark/80 transition-colors group-hover:text-white/95"
              >
                {member.email}
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="inline-flex mt-4 text-brandDark transition-colors group-hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
