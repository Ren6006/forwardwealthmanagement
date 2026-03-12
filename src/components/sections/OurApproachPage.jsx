import { Link } from "react-router-dom";

export default function OurApproachPage() {
  return (
    <section className="our-approach-page bg-white">
      <style>{`
        .our-approach-page {
          --blue: #A9C0C8;
          --blue-mid: #A9C0C8;
          --blue-light: #A9C0C8;
          --blue-faint: #A9C0C8;
          --cream: #F9F9F9;
          --text: #3A3530;
          --text-mid: #5C5750;
          --text-light: #8A8580;
          --rule: #E0DDD8;
        }
        .our-approach-page .content-box {
          background: var(--cream);
          max-width: 860px;
          margin: 0 auto;
          padding: 72px 80px;
          position: relative;
        }
        .our-approach-page .content-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--blue) 0%, var(--blue-light) 50%, var(--blue) 100%);
        }
        .our-approach-page .content-box p {
          font-size: 15.5px;
          line-height: 1.9;
          color: var(--text-mid);
          margin-bottom: 18px;
        }
        .our-approach-page .content-box p:last-child { margin-bottom: 0; }
        .our-approach-page .content-box h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--text);
          margin-top: 52px;
          margin-bottom: 6px;
          padding-top: 52px;
          border-top: 1px solid var(--rule);
        }
        .our-approach-page .content-box h2:first-of-type {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }
        .our-approach-page .content-box h3 {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue-mid);
          margin-top: 36px;
          margin-bottom: 10px;
        }
        .our-approach-page .intro-text {
          padding-bottom: 48px;
          border-bottom: 1px solid var(--rule);
        }
        .our-approach-page .closing {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid var(--rule);
          font-family: 'Cormorant Garamond', serif;
          font-size: 19px;
          font-weight: 300;
          font-style: italic;
          color: var(--text);
        }
        @media (max-width: 800px) {
          .our-approach-page .content-box { padding: 44px 32px; }
        }
      `}</style>

      {/* Title */}
      <div className="text-center pt-12 md:pt-16 pb-10 md:pb-12 px-6 md:px-20">
        <h1 className="font-heading text-3xl md:text-[50px] font-light text-[#3A3530] leading-tight mb-5">
          What it Means to Work with a<br />Comprehensive Wealth Manager
        </h1>
        <div className="w-12 h-0.5 bg-[#8FA8B2] mx-auto" />
      </div>

      {/* Blue stats band */}
      <div className="bg-[#A9C0C8] py-9 px-6 md:px-20 flex flex-wrap items-center justify-center gap-8 md:gap-14">
        <div className="text-center text-white">
          <div className="text-[10px] font-medium tracking-[0.22em] uppercase opacity-75 mb-1.5">Approach</div>
          <div className="font-heading text-xl font-light">Coordinated Strategy</div>
        </div>
        <div className="hidden md:block w-px h-9 bg-white/25" />
        <div className="text-center text-white">
          <div className="text-[10px] font-medium tracking-[0.22em] uppercase opacity-75 mb-1.5">Relationship</div>
          <div className="font-heading text-xl font-light">Boutique & Engaged</div>
        </div>
        <div className="hidden md:block w-px h-9 bg-white/25" />
        <div className="text-center text-white">
          <div className="text-[10px] font-medium tracking-[0.22em] uppercase opacity-75 mb-1.5">Planning</div>
          <div className="font-heading text-xl font-light">Multi-Generational</div>
        </div>
        <div className="hidden md:block w-px h-9 bg-white/25" />
        <div className="text-center text-white">
          <div className="text-[10px] font-medium tracking-[0.22em] uppercase opacity-75 mb-1.5">Focus</div>
          <div className="font-heading text-xl font-light">Proactive Guidance</div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-14 md:py-16 px-6 md:px-20">
        <div className="content-box">
          <p className="intro-text text-base leading-[1.9] text-[#5C5750]">
            Comprehensive wealth management goes beyond managing an investment portfolio. It means organizing the financial decisions in your life into a coordinated strategy so that investments, taxes, career decisions, and long-term goals work together. Our role is to help clients move from a collection of accounts and isolated financial decisions to a structured financial life where each decision supports the others.
          </p>

          <h2>How Comprehensive Wealth Management Creates Value</h2>

          <h3>Turning Financial Intentions into Action</h3>
          <p>Many important financial tasks remain unfinished for years. Estate plans remain unsigned, retirement accounts stay scattered across former employers, and tax opportunities are missed.</p>
          <p>A comprehensive wealth manager helps bring structure and accountability to these decisions. We organize the work that needs to be done and guide clients through completing it thoughtfully and efficiently.</p>
          <p>Often the greatest value comes simply from helping clients move from intention to execution.</p>

          <h3>Making the Right Decisions at the Right Time</h3>
          <p>The timing of financial decisions can have a meaningful impact on long-term wealth.</p>
          <p>Events such as selling a business, converting assets to a Roth IRA, exercising stock options, or executing a 1031 exchange rarely exist in isolation. They interact with your tax bracket, investment portfolio, income, and family priorities.</p>
          <p>We use analytical scenario modeling to evaluate different paths and help design a financial decision map where these events are coordinated. Planning ahead allows clients to take advantage of favorable windows such as lower tax years or periods of income transition.</p>

          <h3>A System Approach to Wealth</h3>
          <p>When financial decisions are coordinated across investments, taxes, and long-term goals, they can create significantly better outcomes over time.</p>
          <p>Your investment portfolio, real estate decisions, career trajectory, tax exposure, and family goals all influence one another. When these elements are considered together, opportunities for efficiency and risk management emerge.</p>
          <p>Our investment philosophy emphasizes tax-efficient portfolio construction and life-span portfolio design so that investment decisions align with your broader financial life.</p>

          <h2>The Forward Wealth Management Difference</h2>

          <h3>Proactive Guidance</h3>
          <p>We believe thoughtful advice should arrive before a question becomes urgent. Rather than waiting for clients to bring issues to us, we help identify upcoming financial decisions and plan for them early.</p>

          <h3>Analytical Decision-Making</h3>
          <p>Complex financial choices benefit from structured analysis. We use scenario modeling to help clients understand how different decisions may affect taxes, portfolio growth, liquidity, and long-term goals.</p>

          <h3>A Boutique, Highly Engaged Relationship</h3>
          <p>We intentionally work with a limited number of households so we can remain closely involved in each relationship. Our clients tend to be thoughtful and engaged, asking difficult questions and exploring strategies that go beyond a standard model portfolio approach.</p>

          <h3>Preparing the Next Generation</h3>
          <p>Whenever possible, we involve the next generation in financial education and portfolio discussions. Learning through experience early in life helps build confidence and judgment long before significant wealth is transferred.</p>
        </div>
      </div>

      {/* Bottom CTA band */}
      <div className="bg-[#EBF1F4] border-t-4 border-[#8FA8B2] py-12 px-6 md:px-20 text-center">
        <div className="font-heading text-2xl font-light text-[#3A3530] mb-2.5">
          Ready to build a structured financial life?
        </div>
        <div className="text-sm font-light tracking-wide text-[#8A8580] mb-7">
          We work with a select number of households. Let&apos;s explore if we&apos;re the right fit.
        </div>
        <Link
          to="/contact"
          className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-white bg-[#8FA8B2] py-3 px-9 no-underline transition-colors hover:bg-[#7A97A3]"
        >
          Schedule a Conversation
        </Link>
      </div>
    </section>
  );
}
