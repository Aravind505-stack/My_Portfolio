import React from 'react';

const experiences = [
  {
    company: "Hyno",
    role: "Software Developer",
    duration: "April. 2023 – Present",
    location: "Hyderbad",
    tasks: [
      "Proficient in crafting responsive and visually captivating web applications through collaborative efforts with cross-functional teams.",
      "Demonstrated success in optimizing web assets for maximum visibility and user experience.",
      "Utilized HTML5, CSS3, BOOTSTRAP and JAVASCRIPT to build structured and semantic markup, applying best practices for accessibility and search engine optimization (SEO).",
      "Leveraged the GSAP library to create dynamic and engaging animations, enhancing user interaction and experience across application.",
      "Skill Set : Html, CSS, JavaScript, Bootstrap, Search Engine Optimization (SEO), GSAP."
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
  }
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
