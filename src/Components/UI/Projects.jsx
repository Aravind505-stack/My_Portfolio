import React from 'react';

const projects = [
  {
    title: "Executive Head",
    description: (
      <ul className="list-disc list-inside">
        <li>Elected as an Executive Head for the College level technical Student chapter called Computer Society of India (CSI) (2022-2023).</li>
        <li>As Executive Head of the college’s Computer Society of India chapter, I led a team in planning and organizing technical events, workshops, and seminars, significantly enhancing technical skills and awareness among students.</li>
      </ul>
    ),
  },

  {
    title: "Documentation Head",
    description: (
      <ul className="list-disc list-inside">
        <li>Served as the Documentation Head for the NGO Street Cause, dedicated to supporting the welfare of underprivileged
        individuals in Hyderabad.</li>
        <li> In this role, I effectively managed and organized the documentation of our initiatives,
        capturing the impact of our work and helping raise awareness of our mission.</li>
      </ul>
    ),
  },
  {
    title: "Internshala Student Partner",
    description: (
      <ul className="list-disc list-inside">
        <li>Served as a proactive Campus Ambassador for Internshala Student Partner, effectively promoting internship
opportunities and skill development programs among fellow students, fostering a culture of career readiness on
campus</li>
        
      </ul>
    ),
  },

  // Other project entries can be added here
  // { title: "LOZAN Ecommerce Web", description: "Ecommerce website for fashion that sells clothing and shoes.", codeLink: "#" },
  // { title: "HOMEY Furniture app", description: "Luxury furniture app for selling furniture and home decorations.", codeLink: "#" },
  // { title: "CARENT Rental Website", description: "Website for renting and selling cars.", codeLink: "#" },
  // { title: "BurgerZing Food Website", description: "Restaurant website for ordering and delivering food.", codeLink: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-900 py-20">
      <h2 className="text-3xl font-bold mb-6">Positions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg">
            <h3 className="font-bold">{project.title}</h3>
            {project.description}
            {/* <a href={project.codeLink} className="text-purple-700 hover:underline mt-2 block">View Code</a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
