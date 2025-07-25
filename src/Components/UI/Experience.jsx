import React from 'react';

const experiences = [
  {
    company: "Absyz",
    role: "Frontend Developer",
    duration: "Feb 2025 - Present ",
    location: "Hyderabad",
    tasks: [
      "Led the frontend development of a healthcare platform, focusing on complex, form-driven workflows and responsive user experiences.",
      "Built dynamic and validated interfaces using React, Material-UI (MUI), React Hook Form, and Zod, ensuring seamless state management and robust error handling.",
      "Integrated GraphQL APIs using Apollo Client, collaborating closely with backend teams to streamline data flow and improve payload efficiency.",
      "Solved diverse frontend challenges including advanced validations, conditional rendering, responsive layout issues, and API handling.",
      "Actively debugged, tested, and optimized features using browser dev tools and local test environments, improving feature stability and delivery speed.",
      "Gained practical exposure to backend processes involving PostgreSQL and TypeORM, strengthening frontend-backend coordination."
    ]
  },
  {
    company: "PKC Laundries (pkclaundries.com)",
    role: "Freelance Web Developer",
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
