// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    class: "",
  },
  site: {
    name: "Elevation Marketing",
    tagline: "Strategy. Business. Technology.",
    description:
      "Your all-in-one partner for digital growth. One solution that turns digital complexity into growth.",
    // Public URL of the deployed site (used for canonical / Open Graph).
    url: "https://sbt-solutions-ltd.github.io/elevation-marketing",
    // SEO copy used for <title>, meta description, Open Graph and Twitter.
    seoTitle: "Elevation Marketing – Digital Strategy, Technology & Growth",
    seoDescription:
      "Elevation Marketing integrates strategy, software, and customer operations into one agile system. We modernize tech and boost retention to turn complexity into growth.",
    // Social share image (1200x630). Add the file at public/og-image.png.
    ogImage: "/og-image.png",
    email: "hello@elevationmarketing.com",
    careersEmail: "careers@elevationmarketing.com",
    address:
      "Collider activity center, 111V Tsarigradsko Shosse Blvd., floor 3, Sofia 1784, Bulgaria",
    linkedin: "https://www.linkedin.com/company/elevation-marketing/",
    menu: [
      { title: "Services", path: "/services" },
      { title: "Careers", path: "/careers" },
      { title: "Academy", path: "/academy" },
      { title: "About Us", path: "/about" },
    ],
    legal: [
      { title: "Cookie Policy", path: "#" },
      { title: "Privacy Policy", path: "#" },
      { title: "Terms & Conditions", path: "#" },
    ],
  },
});
