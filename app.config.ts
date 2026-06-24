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
