import React from 'react';

const experiences = [
  {
    name: "Naari BY Manasa",
    url: "https://www.naaribymanasa.com",
    role: "Freelance WordPress Developer & Meta Ads",
    tasks: [
      "Built and delivered a complete eCommerce fashion website for a real client using WordPress and WooCommerce, handling the project end-to-end from design to deployment and client training.",
      "Implemented a scalable product management system allowing the client to easily manage catalog, pricing, and discounts.",
      "Designed structured navigation architecture (menus, footer layout, internal linking) to improve user experience.",
      "Implemented dynamic pricing and discount flows using WooCommerce best practices.",
      "Integrated social and communication channels (WhatsApp, Instagram, Facebook, YouTube) to improve user engagement.",
      "Optimized website performance using caching, image optimization, and frontend best practices.",
      "Applied SEO fundamentals (metadata, structure, indexing readiness) using RankMath.",
      "Planned and ran Meta (Facebook & Instagram) Ads campaigns to drive targeted traffic to the store, set up the Meta Pixel for conversion tracking, and optimized ad creatives and audience targeting to improve ROAS.",
      "Skill Set : Html, CSS, Search Engine Optimization (SEO), WordPress, WebSpaceKit, Meta Ads"
    ]
  },

  {
    name: "ToothBliss Dental Care",
    url: "https://www.toothblissdentalcare.com",
    role: "Freelance WordPress Developer",
    tasks: [
      "Designed and implemented a responsive multi-page website using WordPress CMS and modern UI structure.",
      "Configured domain-based email setup through hosting provider for professional communication.",
      "Customized theme layout including header, footer, reusable content sections, and service containers.",
      "Implemented SEO-friendly structure, optimized page hierarchy, and performance-focused asset loading.",
      "Optimized website performance using caching, image optimization, and frontend best practices.",
      "Built modular homepage sections for services, doctor profile, testimonials, and contact flow.",
      "Configured hosting environment, domain mapping, and production deployment.",
      "Ensured cross-device responsiveness and accessibility compliance.",
      "Skill Set : Html, CSS, Search Engine Optimization (SEO), WordPress, WebSpaceKit"
    ]
  },

  {
    name: "PKC Laundries",
    url: "https://www.pkclaundries.com",
    role: "Freelance WordPress Developer",
    tasks: [
      "Designed and launched a fully functional laundry service website using WordPress and Bluehost, including domain, SSL, and Cloudflare CDN setup.",
      "Customized themes and plugins to support key features: service listings, FAQs, blog, contact, and booking forms.",
      "Integrated a seamless 'Book Now' scheduling flow for pickups and deliveries based on client needs.",
      "Improved performance and security with caching, CDN, and regular maintenance.",
      "Managed content and blog updates to boost SEO and user engagement.",
      "Skill Set : Html, CSS, Search Engine Optimization (SEO), WordPress, Bluehost."
    ]
  },

  {
    name: "Zonestra Technologies",
    url: "https://www.zonestra.com",
    role: "Frontend Developer – HTML, CSS & JavaScript",
    tasks: [
      "Designed and developed the complete corporate website for Zonestra Technologies, an Enterprise Data & AI Transformation consulting firm, using pure HTML, CSS, and JavaScript — no frameworks.",
      "Built a multi-section, content-rich site covering service verticals including Enterprise Transformation Strategy, Data Platforms & CDP, Data Science & AI, Digital Analytics & BI, and Digital Commerce.",
      "Structured and coded interactive case study sections with clean semantic HTML, ensuring readability and maintainability.",
      "Implemented responsive layouts using CSS to ensure a consistent experience across desktop, tablet, and mobile devices.",
      "Applied performance best practices including optimized asset loading, clean CSS architecture, and minimal JS footprint.",
      "Ensured SEO-friendly markup with proper heading hierarchy, semantic tags, and meta structure for search visibility.",
      "Skill Set : Html, CSS, JavaScript, Search Engine Optimization (SEO)."
    ]
  },

  {
    name: "The Roar and Howl Company",
    url: null,
    role: "WordPress Developer",
    tasks: [
      "Developed a fully functional e-commerce website for The Roar and Howl Company using WordPress and WooCommerce, providing an intuitive and seamless shopping experience.",
      "Integrated secure payment gateways (PayPal, Stripe) and optimized checkout for seamless transactions.",
      "Customized themes, plugins, and mobile-friendly design, improving site performance and user engagement.",
      "Applied SEO strategies to boost organic traffic and improve site rankings on search engines.",
      "Customized themes and plugins using HTML, CSS, and JavaScript to achieve a unique and visually appealing design tailored to the brand.",
      "Utilized WebSpaceKit Hosting to ensure optimal performance, reliability, and scalability for WordPress-based e-commerce websites, enhancing user experience and site speed.",
      "Skill Set : Html, CSS, JavaScript, WordPress, Search Engine Optimization (SEO), WebSpaceKit."
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">
            {exp.role} at{" "}
            {exp.url ? (
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
              >
                {exp.name}
              </a>
            ) : (
              exp.name
            )}
          </h3>
          <ul className="list-disc list-inside">
            {exp.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
