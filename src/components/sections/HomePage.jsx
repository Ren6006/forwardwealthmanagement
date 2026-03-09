import HeroRotator from "./HeroRotator";
import ThreePillars from "./ThreePillars";
import MeetOurTeam from "./MeetOurTeam";
import ProfessionalAffiliations from "./ProfessionalAffiliations";

export default function HomePage() {
  return (
    <>
      <HeroRotator />
      <ThreePillars />
      <MeetOurTeam />
      <section className="w-full pt-6 md:pt-8 pb-16 md:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-brandDark font-heading text-xl md:text-[2rem] leading-relaxed text-center">
            Forward Wealth Management is a high-touch wealth management firm for individuals and
            families who value thoughtful financial decision-making. We intentionally work with a limited
            number of clients so we can provide the attention and quality service each relationship
            deserves.
          </p>
        </div>
      </section>
      <ProfessionalAffiliations />
    </>
  );
}
