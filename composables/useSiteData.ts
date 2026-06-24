// Shared content types — import these in components for prop typing.
export interface HeroContent {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface IntroContent {
  title: string;
  highlight: string;
  text: string;
}

export interface StatItem {
  value: number | string;
  label: string;
  suffix?: string;
}

export interface StatsContent {
  title: string;
  subtitle: string;
  items: StatItem[];
}

export interface SolutionItem {
  number: string;
  title: string;
  description: string;
}

export interface SolutionsContent {
  title: string;
  description: string;
  buttonText: string;
  items: SolutionItem[];
}

export interface Slide {
  label: string;
  title: string;
  desc: string;
  img: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  offer: string;
  nutshell: string[];
}

// Per-page content is keyed by page so a reusable component receives its slice
// via a `content` prop (e.g. <LandingHero :content="hero.index" />).
const hero = {
  index: {
    title: "Strategy. Business. Technology.",
    subtitle: "One solution that turns digital complexity into growth",
    buttonText: "Let's Talk",
    buttonLink: "/contact",
  },
} satisfies Record<string, HeroContent>;

const intro = {
  index: {
    title: "The Elevation Marketing Edge",
    highlight: "Integrated by design",
    text: "Elevation Marketing is your all-in-one partner for digital growth: bringing software, strategy, and customer operations together to deliver faster results with fewer moving parts.",
  },
} satisfies Record<string, IntroContent>;

const stats = {
  index: {
    title: "What We've Built So Far",
    subtitle: "The Elevation Marketing Momentum in numbers",
    items: [
      { value: 547, label: "Projects Delivered" },
      { value: 219, label: "Active Partnerships" },
      { value: 8, label: "Years of Experience" },
      { value: 170, suffix: "+", label: "Team Members" },
    ],
  },
} satisfies Record<string, StatsContent>;

const solutions = {
  index: {
    title: "Solutions",
    description:
      "Discover the comprehensive approach behind faster launches, improved performance, and lasting impact.",
    buttonText: "Get in touch",
    items: [
      {
        number: "01",
        title: "From Fragmentation to Fluid Execution",
        description:
          "In the early stages of growth, it’s common for digital businesses to pull together a network of agencies, freelancers, and internal specialists to manage marketing, software, CRM, and operations. What starts as flexible support eventually turns into an operational maze. As teams grow and goals evolve, the lack of coordination between siloed providers causes delays, duplicated work, and strategic disconnects. This fragmentation not only slows execution but also burdens internal teams with managing relationships that were never designed to scale together.",
      },
      {
        number: "02",
        title: "From Legacy Systems to Agile Infrastructure",
        description: `What once worked to get your business off the ground can become the very thing holding it back. Many teams operate on outdated tech stacks, disconnected tools, or rushed software builds that were never meant to scale. As your customer base and operational needs grow, those legacy systems generate technical debt, data silos, and increasing maintenance costs. Teams spend more time patching workarounds than progressing strategically.
          
        Elevation Marketing helps businesses move beyond short-term fixes by modernizing their technology stack with secure, scalable platforms built for performance. Whether it’s a full system rebuild or targeted backend overhaul, we align technology with your business goals, so your systems support growth instead of slowing it down.`,
      },
      {
        number: "03",
        title: "From Isolated Journeys to Lasting Engagement",
        description: `Attracting new users is only part of the equation. Without a strong retention strategy, many digital businesses see engaged users drop off after the first few interactions. Disconnected systems, fragmented messaging, and manual workflows create gaps in the customer journey that drive churn and erode long-term value. The cost of acquiring users rises, but the return doesn’t follow.
          
        Elevation Marketing connects every part of your customer engagement - UX, CRM, lifecycle campaigns, and data - into a seamless, personalized experience. We help brands strengthen loyalty through behavior-driven journeys that turn one-time users into long-term relationships. With Elevation Marketing, retention becomes a growth driver, not an afterthought.`,
      },
    ],
  },
  // TODO: replace placeholder copy below with the Services-page content.
  services: {
    title: "",
    description: "",
    buttonText: "Get in touch",
    items: [
      {
        number: "01",
        title: "",
        description: "",
      },
      {
        number: "02",
        title: "",
        description: "",
      },
      {
        number: "03",
        title: "",
        description: "",
      },
    ],
  },
} satisfies Record<string, SolutionsContent>;

const carousel: Slide[] = [
  {
    label: "Growth Partner",
    title: "Full-Service Growth Partner for Online Businesses",
    desc: "Elevation Marketing delivers an integrated suite of services including digital marketing, CRM, software development, customer operations, and compliance. Clients gain the ability to grow efficiently with one trusted partner.",
    img: "/carousel/growth-partner.webp",
  },
  {
    label: "Software Development",
    title: "High-Tech, Scalable Software Development",
    desc: "From custom platforms to complex integrations, we build secure, future-ready software using modern architecture and agile delivery for fast and reliable results.",
    img: "/carousel/software-development.webp",
  },
  {
    label: "Digital Marketing",
    title: "Performance-Driven Digital Marketing Expertise",
    desc: "We combine SEO, paid media, retargeting, and creative automation into unified campaigns that drive traffic, improve conversion rates, and maximize ROI.",
    img: "/carousel/digital-marketing.webp",
  },
  {
    label: "Design & Retention",
    title: "Customer-Centric Experience and Retention Strategy",
    desc: "Through in-house UX/UI, behavioral segmentation, and lifecycle marketing, we create seamless, data-informed journeys that deepen engagement and increase customer lifetime value.",
    img: "/carousel/cr-and-retention.webp",
  },
  {
    label: "Creative Teams",
    title: "Creative, Marketing, and Dev Teams Under One Roof",
    desc: "Our integrated team brings together strategy, design, content, and code. This eliminates silos and enables faster, smarter execution across every digital channel.",
    img: "/carousel/full-service.webp",
  },
];

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Digital Marketing",
    offer:
      "Campaign building and management using SEO, paid media, retargeting, and testing to position brands strategically with real-time optimization.",
    nutshell: [
      "Multi-channel campaign management",
      "SEO and paid media expertise",
      "Retargeting and conversion funnel optimization",
    ],
  },
  {
    number: "02",
    title: "Customer Acquisition",
    offer:
      "Customized acquisition strategies generating traffic and conversions through behavior-tested, regionally localized funnels.",
    nutshell: [
      "Conversion funnel design",
      "Multi-channel acquisition strategy",
      "Localized campaigns for global growth",
    ],
  },
  {
    number: "03",
    title: "Creative & Content Services",
    offer:
      "Strategy-informed creative execution delivering cohesive, brand-aligned, results-driven content across banners, landing pages, UI kits, and campaigns.",
    nutshell: [
      "UX/UI design and branding assets",
      "Promotional visuals and campaigns",
      "SEO and conversion-driven copywriting",
    ],
  },
];

const testimonials = [
  {
    quote:
      "We moved from four separate vendors to just one team with Elevation Marketing - and within weeks, execution got faster and visibility improved across the board.",
    role: "Head of Marketing",
    company: "Fintech Platform",
  },
  {
    quote:
      "Elevation Marketing rebuilt our backend without disrupting day-to-day ops. What we got was not just cleaner tech, but smoother collaboration across product, marketing, and support.",
    role: "Chief Operations Officer",
    company: "SaaS Company",
  },
  {
    quote:
      "Working with Elevation Marketing simplified things across the board. Having one team handle software, marketing, and operations saved us time and reduced back-and-forth.",
    role: "Business Owner",
    company: "Digital Services Company",
  },
  {
    quote:
      "We saw real improvements in speed and coordination once everything was managed through Elevation Marketing. It felt less fragmented from day one.",
    role: "Operations Lead",
    company: "Gaming Company",
  },
];

const team = [
  {
    name: "Svetlin Georgiev",
    role: "CEO",
    img: "/images/Svetlin-Georgiev.png",
  },
  {
    name: "Radomira Gyurova",
    role: "Deputy CEO",
    img: "/images/Radomira-Gyurova.png",
  },
  { name: "Lazar Petrov", role: "CMO", img: "/images/Lazar.jpg" },
  { name: "Ivan Chomakov", role: "CTO", img: "/images/Ivan-Chomakov.png" },
  {
    name: "Konstantin Kostov",
    role: "CPO",
    img: "/images/Konstantin-Kostov.png",
  },
  { name: "Petyo Stoykov", role: "CLCO", img: "/images/Petyo-Stoykov.png" },
  { name: "Victor Todorov", role: "CFO", img: "/images/Viktor-Todorv.png" },
  { name: "Elena Gocic", role: "Head of HR", img: "/images/Elena-Gocic.png" },
  { name: "Asen Conev", role: "Head of PMO", img: "/images/Asen-Conev.png" },
];

export const useSiteData = () => ({
  hero,
  intro,
  carousel,
  stats,
  solutions,
  services,
  testimonials,
  team,
});
