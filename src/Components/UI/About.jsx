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
            WordPress Developer, SEO & Meta Ads Specialist
            <br />
            based in Hyderabad, India 📍
          </h3>

          <p className="mt-5 text-xl text-gray-500">
            Hi, I'm Aravind Busarapu, a WordPress Developer, SEO & Meta Ads Specialist based in Hyderabad, India. I build responsive, performance-optimized websites using WordPress, WooCommerce, and modern web technologies like HTML, CSS, Bootstrap, and JavaScript. I've delivered multiple end-to-end client projects — from design to deployment — with a strong focus on SEO (on-page, technical), meta optimization, search visibility using RankMath and Yoast SEO, and running targeted Meta (Facebook & Instagram) Ads campaigns to drive traffic and conversions.
          </p>
         
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
