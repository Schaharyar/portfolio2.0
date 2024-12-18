'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {}

const Projects: React.FC<Props> = () => {
  const projects = [
    {
      title: 'BG Remover',
      description: 'Built a tool to remove the background of an image using ReactJS and External APIs.',
      image: '/bgremove.png',
      link: 'https://bgremove66.netlify.app',
      category: 'Tools',
    },
    {
      title: 'Color Changer',
      description: 'A tool where users can input any color name to display it. Built with ReactJS.',
      image: '/bgchanger.png',
      link: 'https://bgchanger66.netlify.app/',
      category: 'Tools',
    },
    {
      title: 'Vaultify',
      description: 'A secure app for managing data efficiently with ReactJS and Node.js.',
      image: '/vaultify.png',
      link: 'https://vaultify66.netlify.app',
      category: 'Full Stack',
    },
    {
      title: 'Weather App',
      description: 'Fetches real-time weather data from an external API using ReactJS.',
      image: '/weather.jpeg',
      link: 'https://weatherapp66.netlify.app/',
      category: 'Web App',
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  // Handle navigation
  const handleNavigate = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentProject((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    } else {
      setCurrentProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="h-screen flex flex-col items-center text-center max-w-full px-10 justify-center mx-auto relative overflow-hidden">
      {/* Heading */}
      <h3 className="absolute top-20 left-1/2 transform -translate-x-1/2 uppercase tracking-[15px] text-gray-500 text-2xl z-10">
        Projects
      </h3>

      {/* Arrow Buttons */}
      <button
        className="absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-6 md:p-8 rounded-full shadow-lg animate-pulse hover:bg-gray-700 hover:scale-110 transition duration-300"
        onClick={() => handleNavigate('left')}
      >
        &#8592;
      </button>

      <button
        className="absolute right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-6 md:p-8 rounded-full shadow-lg animate-pulse hover:bg-gray-700 hover:scale-110 transition duration-300"
        onClick={() => handleNavigate('right')}
      >
        &#8594;
      </button>

      {/* Project Cards Display */}
      <div className="flex w-full overflow-hidden items-center justify-center relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentProject * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`min-w-full flex justify-center items-center transition-opacity duration-500 ease-in-out ${
                index === currentProject ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <motion.div
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  role="presentation"
                ></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-xl font-bold group-hover:text-[#F7AB0A] transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm mt-1">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-[#F7AB0A] hover:underline"
                  >
                    View Project
                    <img
                      src="/external-link.png"
                      alt="External Link"
                      className="h-4 w-4 ml-2"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-[30%] left-0 h-[400px] w-full bg-[#F7AB0A]/20 -skew-y-12 z-[-1]" />
    </div>
  );
};

export default Projects;
