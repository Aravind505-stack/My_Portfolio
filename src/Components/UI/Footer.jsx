import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="container mx-auto">
        <p>Built with Code and Creativity by Aravind Busarapu</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="https://github.com/Aravind505-stack?tab=repositories" className="hover:underline"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/aravind-busarapu-41389a1a3/" className="hover:underline"><FaLinkedin size={24} /></a>
          <a href="https://x.com/BusarapuAravin1" className="hover:underline"><FaTwitter size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
