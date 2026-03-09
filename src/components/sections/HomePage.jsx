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
      <section className="w-full pt-2 md:pt-4 pb-16 md:pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-brandDark font-heading text-[2rem] md:text-[2rem] leading-relaxed max-w-none text-center">
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
