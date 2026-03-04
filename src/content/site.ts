export const siteContent = {
  heroRotator: {
    image: "/src/assets/herorotatorimage.png",
    headingLine1: "Experience the Difference of",
    headingLine2: "Proactive Wealth Management",
    subheading: "Tax-Efficient. Integrated. Built for the Long Term.",
    paragraph:
      "We design sophisticated, tax-aware strategies that integrate your investments, real estate decisions, career income, and generational planning into one coordinated system. Rather than managing accounts in isolation, we align every financial decision to improve efficiency, reduce fragmentation, and support your long-term objectives.",
    ctaLabel: "Let's Get Started",
    ctaTo: "/contact",
  },
  threePillars: {
    heading: "Our Three Pillars",
    pillars: [
      {
        id: "tax-efficient-wealth-management",
        title: "Tax-Efficient Wealth Management",
        subtitle: "Designing Wealth as a Coordinated System",
        description:
          `We manage wealth as an integrated life-span strategy, not a collection of accounts. Investment portfolios, real estate decisions, career income, tax exposure, and long-term family goals are evaluated together to improve alignment and reduce inefficiency.

Our focus is tax-efficient portfolio construction implemented within the context of your broader financial life. We coordinate closely with your CPA and estate attorney so that investment decisions reinforce tax strategy, liquidity planning, and long-term wealth transfer objectives.

As your circumstances evolve, we adapt. Career changes, business growth, major purchases, and shifting family priorities are incorporated into portfolio design and capital allocation decisions. The objective is structured, coordinated decision-making across your entire financial life.`,
        image: "/src/assets/1stpillar.jpg",
      },
      {
        id: "investment",
        title: "Life Transitions",
        subtitle: "Navigating Change with Structure and Discipline",
        description:
          `Major life events create both risk and opportunity. Retirement, divorce, business sales, relocation, and sending children to college require deliberate financial recalibration.
        
During transitions, we focus on maintaining portfolio discipline while adjusting for new cash flow realities, tax implications, and long-term sustainability. We model scenarios, evaluate trade-offs, and structure decisions so that short-term changes do not undermine long-term strategy.

Our role is to provide continuity and oversight when complexity increases, ensuring that capital remains aligned with your evolving goals.
.`,
        image: "/src/assets/2ndpillar.jpg",
      },
      {
        id: "relationship",
        title: "Build It Forward",
        subtitle: "Preparing the Next Generation for Stewardship",
        description:
          `Preserving wealth requires more than estate documents. It requires prepared heirs.

We actively involve the next generation early through structured financial education, age-appropriate investment responsibility, and ongoing dialogue about capital stewardship. Children are not passive future beneficiaries; they are developing financial decision-makers.

By building financial capability alongside financial capital, families strengthen continuity across generations. The objective is not only to transfer assets efficiently, but to transfer judgment, discipline, and confidence as well.
`,
        image: "/src/assets/3rdpillar.jpg",
      },
    ],
  },
  empoweringFuture: {
    heading: "Empowering You for a Secure Financial Future",
    body:
      "Whether you are planning for retirement, navigating market uncertainty, or preparing a legacy for your family, our team helps you move forward with confidence and purpose.",
    buttonLabel: "Learn more",
    buttonTo: "/about",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  team: {
    heading: "Meet Our Team",
    members: [
      {
        name: "Hilal Yilmaz",
        role: "Senior Wealth Advisor",
        phone: "(555) 201-9401",
        email: "morgan@forwardwealth.com",
        linkedin: "https://www.linkedin.com/",
        image: "/src/assets/hilal_profile.jpg",
      },
      {
        name: "Katerina Minevichk",
        role: "Retirement Planning Specialist",
        phone: "(555) 201-9402",
        email: "daniel@forwardwealth.com",
        linkedin: "https://www.linkedin.com/",
        image: "/src/assets/katerina_profile.jpg",
      },
    ],
  },
  risks: {
    heading: "Addressing the 4 Main Risks To Your Retirement",
    cards: [
      {
        title: "Longevity Risk",
        description: "Plan for a retirement that may last decades beyond expectations.",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Market Risk",
        description: "Build resilient strategies to weather volatility and uncertainty.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Inflation Risk",
        description: "Protect purchasing power with growth-minded, adaptive planning.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Healthcare Risk",
        description: "Prepare for evolving medical costs and long-term care expenses.",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  resources: {
    heading: "Resource Center",
    cards: [
      {
        title: "Retirement Guide",
        blurb: "A practical framework for retirement income and spending confidence.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        href: "https://www.investor.gov/introduction-investing",
      },
      {
        title: "Market Insights",
        blurb: "Commentary on current market conditions and long-term perspective.",
        image:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
        href: "https://www.federalreserve.gov/",
      },
      {
        title: "Tax Planning Basics",
        blurb: "Key tax considerations that support efficient wealth strategies.",
        image:
          "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80",
        href: "https://www.irs.gov/",
      },
      {
        title: "Legacy Planning",
        blurb: "Foundational ideas for preserving wealth across generations.",
        image:
          "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=900&q=80",
        href: "https://www.consumerfinance.gov/",
      },
    ],
  },
} as const;
