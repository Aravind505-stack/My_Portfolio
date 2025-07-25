import React from "react";
import Skills from "./Skills";
import WebDev from '../../Images/XROS ACHE.jpg';

const About = () => {
  return (
    <section id="About" className="text-gray-900 pb-20">
      {/* Use flex-col for mobile (sm) screens and flex-row for larger screens */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img src={WebDev} className="rounded-lg" alt="Web Development" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <h2 className="text-xl font-bold mb-3 text-gray-800 uppercase">
            About Me
          </h2>

          <h3 className="text-3xl font-bold mb-3 text-gray-800">
            Front-end Developer
            <br />
            based in Hyderabad, India 📍
          </h3>

          <p className="mt-5 text-xl text-gray-500">
            Hey, my name is Aravind Busarapu, and I'm a Frontend Developer. My passion is to create and develop clean UI/UX for my users.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            My main stack currently includes JavaScript, React.js, TypeScript, GraphQL, SQL, Python.
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
