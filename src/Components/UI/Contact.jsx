import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h5j52uv', 'template_ka865yl', e.target, 'nB77dOL95l9MudUHi')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
      });
    e.target.reset();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="Contact" className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row lg:gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">
            Let's discuss
            <br />
            something <span className="text-blue">cool</span> together
          </h2>
          <p className="hidden lg:block pb-5">I'm interested in...</p>
          <ul className="hidden lg:flex flex-wrap gap-5 mb-6 lg:mb-0">
            <li className="bg-gray-200 text-gray-900 p-2 rounded">
              Ecommerce Website
            </li>
            <li className="bg-gray-200 text-gray-900 p-2 rounded">
              Landing Page
            </li>
            <li className="bg-gray-200 text-gray-900 p-2 rounded">Portfolio</li>
            <li className="bg-gray-200 text-gray-900 p-2 rounded">
              Blog Website
            </li>
            <li className="bg-gray-200 text-gray-900 p-2 rounded">
              Responsive Design
            </li>
          </ul>
        </div>
        <form className="lg:w-1/2 max-w-md w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Your Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Your Message</label>
            <textarea
              name="message"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue text-white px-4 py-3 rounded w-full hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
        <div className="lg:hidden w-full mt-6">
          <p className="mb-4 text-center">I'm interested in...</p>
          <ul className="flex flex-wrap gap-2 justify-center">
            <li className="bg-gray-200 text-gray-900 p-2 rounded">
              Ecommerce Website
            </li>
            <li className="bg-gray-200 text-gray-900 p-2 rounded">
              Landing Page
            </li>
            <li className="bg-gray-200 text-gray-900 p-2 rounded">Portfolio</li>
            <li className="bg-gray-200 text-gray-900 p-2 rounded">
              Blog Website
            </li>
            <li className="bg-gray-200 text-gray-900 p-2 rounded">
              Responsive Design
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
