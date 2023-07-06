export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "eGov Super App",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Developers",
      href: "/developers",
    },
  ],
  servicesList: [
    {
      category: "Business and Trade",
      description:
        "Services related to business and trade registration, business tax, banking and assistance, product monitoring and complaints",
      image: "business_trade.svg",
      href: "/business-and-trade",
    },
    {
      category: "Disaster and Weather",
      description:
        "Services on weather and disaster management, and complaints related to it",
      image: "disaster_weather.svg",
      href: "/disaster-and-weather",
    },
    {
      category: "Health",
      description:
        "Services related to regulation and utilization of available health care, facilities, assistance, and programs",
      image: "health.svg",
      href: "/health",
    },
    {
      category: "Social Services",
      description: "Services on benefits, pensions, and other social services",
      image: "social_services.svg",
      href: "/social-services",
    },
    {
      category: "Certificates and IDs",
      description:
        "Services on how to avail certificates, IDs, licenses, clearances, and other government documents and records",
      image: "certificates_ids.svg",
      href: "/certificates-and-ids",
    },
    {
      category: "Education",
      description:
        "Services on enrollment and registration, financial assistance and scholarship, online courses, research and extension, and complaints about the education system",
      image: "education.svg",
      href: "/education",
    },
    {
      category: "Housing",
      description:
        "Services related to settlements and infrastructure management; regulations and assistance; government projects monitoring; contractor accreditation; and related functions",
      image: "housing.svg",
      href: "/housing",
    },
    {
      category: "Tax",
      description:
        "Services associated with management and facilitation of taxes",
      image: "tax.svg",
      href: "/tax",
    },
    {
      category: "Contributions",
      description:
        "Services related to contributions, pensions, benefits, and other social services",
      image: "contributions.svg",
      href: "/contributions",
    },
    {
      category: "Employment",
      description:
        "Services related to employment requirements, professional development and eligibility, job opportunities, and job related complaint",
      image: "employment.svg",
      href: "/employment",
    },
    {
      category: "Passport and Travel",
      description:
        "Services related to passport and visa applications, and providing assistance to tourists, foreigners, and Filipino citizens",
      image: "passport.svg",
      href: "/passport-and-travel",
    },
    {
      category: "Transport and Driving",
      description:
        "Services that deal with regulation, management and registrations related to transportation system",
      image: "transportation.svg",
      href: "/transport-and-driving",
    },
  ],
}
