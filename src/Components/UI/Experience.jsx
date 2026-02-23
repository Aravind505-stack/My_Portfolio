import React from 'react';

const experiences = [
  {
    company: "Absyz",
    role: "Frontend Developer",
    duration: "Feb 2025 - Present ",
    location: "Hyderabad",
    tasks: [
      "Developed and maintained complex, form-driven user interfaces using React and modern UI libraries, focusing on usability, validation, and performance.",
      "Implemented state management and structured data flow, handling conditional rendering, dynamic forms, and responsive layouts.",
      "Integrated APIs and collaborated closely with backend teams to ensure efficient data exchange and seamless frontend–backend integration.",
      "Worked with databases and backend logic to support application workflows and data consistency.",
      "Contributed to Next.js-based implementations and internal applications, following scalable and maintainable frontend practices.",
      "Gained hands-on experience with Salesforce development, building components using Lightning Web Components (LWC) and implementing business logic with Apex."
    ]
  },

  

   {
    company: "Naari BY Manasa (naaribymanasa.com)",
    role: "Freelance WordPress Developer",
    duration: "Nov 2025",
    location: "Hyderabad (Remote)",
    tasks: [
      "Built and delivered a complete eCommerce fashion website for a real client using WordPress and WooCommerce, handling the project end-to-end from design to deployment and client training.",
      "Implemented a scalable product management system allowing the client to easily manage catalog, pricing, and discounts",
      "Designed structured navigation architecture (menus, footer layout, internal linking) to improve user experience.",
      "Implemented dynamic pricing and discount flows using WooCommerce best practices",
      "Integrated social and communication channels (WhatsApp, Instagram, Facebook, YouTube) to improve user engagement",
       "Optimized website performance using caching, image optimization, and frontend best practices",
      "Applied SEO fundamentals (metadata, structure, indexing readiness) using RankMath",
      "Skill Set : Html, CSS,  Search Engine Optimization (SEO), WordPress, WebSpaceKit"
    ]
  },

    {
    company: "ToothBliss Dental care (toothblissdentalcare.com)",
    role: "Freelance WordPress Developer",
    duration: "Aug 2025 - Oct 2025",
    location: "Hyderabad (Remote)",
    tasks: [
      "Designed and implemented a responsive multi-page website using WordPress CMS and modern UI structure.",
      "Configured domain-based email setup through hosting provider for professional communication.",
      "Customized theme layout including header, footer, reusable content sections, and service containers.",
      "Implemented SEO-friendly structure, optimized page hierarchy, and performance-focused asset loading.",
       "Optimized website performance using caching, image optimization, and frontend best practices",
      "Built modular homepage sections for services, doctor profile, testimonials, and contact flow.",
      "Configured hosting environment, domain mapping, and production deployment.",
      "Ensured cross-device responsiveness and accessibility compliance.",
      "Skill Set : Html, CSS,  Search Engine Optimization (SEO), WordPress, WebSpaceKit"
    ]
  },



  {
    company: "PKC Laundries (pkclaundries.com)",
    role: "Freelance WordPress Developer",
    duration: "Jan 2025 - Feb 2025",
    location: "Virtual",
    tasks: [
      "Designed and launched a fully functional laundry service website using WordPress and Bluehost, including domain, SSL, and Cloudflare CDN setup.",
      "Customized themes and plugins to support key features: service listings, FAQs, blog, contact, and booking forms.",
      "Integrated a seamless 'Book Now' scheduling flow for pickups and deliveries based on client needs.",
      "Improved performance and security with caching, CDN, and regular maintenance.",
      "Managed content and blog updates to boost SEO and user engagement.",
      "Skill Set : Html, CSS,  Search Engine Optimization (SEO), WordPress, Bluehost."
    ]
  },
  {
    company: "Hyno",
    role: "Software Developer",
    duration: "January. 2023 – June 2024",
    location: "Hyderbad",
    tasks: [
      "Proficient in crafting responsive and visually captivating web applications through collaborative efforts with cross-functional teams.",
      "Demonstrated success in optimizing web assets for maximum visibility and user experience.",
      "Utilized HTML5, CSS3, BOOTSTRAP and JAVASCRIPT to build structured and semantic markup, applying best practices for accessibility and search engine optimization (SEO).",
      "• Integrated CRM systems to enhance customer relationship management, leading to improved client interactions and data organization.",
      "Leveraged the GSAP library to create dynamic and engaging animations, enhancing user interaction and experience across application.",
      "Skill Set : Html, CSS, JavaScript, Bootstrap, ReactJS, Search Engine Optimization (SEO), GSAP."
    ]
  },

  {
    company: "The Roar and Howl Company",
    role: "Wordpress Developer",
    duration: "December 2023",
    location: "Hyderbad",
    tasks: [
      "Developed a fully functional e-commerce website for The Roar and Howl Company using WordPress and WooCommerce, providing an intuitive and seamless shopping experience.",
      "Integrated secure payment gateways (PayPal, Stripe) and optimized checkout for seamless transactions.",
      "Customized themes, plugins, and mobile-friendly design, improving site performance and user engagement.",
      "Applied SEO strategies to boost organic traffic and improve site rankings on search engines.",
      "Customized themes and plugins using HTML, CSS, and JavaScript to achieve a unique and visually appealing design tailored to the brand.",
      "Utilized WebSpaceKit Hosting to ensure optimal performance, reliability, and scalability for WordPress-based e-commerce websites, enhancing user experience and site speed.",
      "Skill Set : Html, CSS, JavaScript, Wordpress, Search Engine Optimization (SEO), WebSpaceKit."
    ]
  },

  {
    company: "MomentumX",
    role: "Full Stack Developer",
    duration: "April. 2023 – Nov. 2023",
    location: "Remote(UK)",
    tasks: [
      "Leading front-end development efforts for a website project, leveraging HTML, CSS, and JavaScript to create an engaging and intuitive user interface.",
      "Collaborating closely with designers and back-end developers to ensure seamless integration of front-end components with the overall website architecture.",
      "Utilizing Docsify, a documentation site generator, to create comprehensive and interactive documentation for the website, enhancing the user experience and facilitating knowledge sharing among team members and users.",
      "Proficient in AWS, with hands-on experience in S3 bucket management and module deployment for project implementation.",
      "Skill Set: Html, CSS, JavaScript, ReactJS, Docsify, AR Technology, Figma."
    ]
  },

 
];

const Experience = () => {
  return (
    <section id="experience" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
          <p className="italic">{exp.duration} | {exp.location}</p>
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
