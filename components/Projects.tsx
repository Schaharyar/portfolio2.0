'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {}

const Projects: React.FC<Props> = () => {
    const projects = [
        {
            title: "BG Remover",
            description: "Built a tool to remove the background of an image using ReactJS and External APIs.",
            image: "/bgremove.png",
            link: "https://bgremove66.netlify.app",
            category: "Tools",
        },
        {
            title: "Color Changer",
            description: "A tool where users can input any color name to display it. Built with ReactJS.",
            image: "/bgchanger.png",
            link: "https://bgchanger66.netlify.app/",
            category: "Tools",
        },
        {
            title: "Vaultify",
            description: "A secure app for managing data efficiently with ReactJS and Node.js.",
            image: "/vaultify.png",
            link: "https://vaultify66.netlify.app",
            category: "Full Stack",
        },
        {
            title: "Weather App",
            description: "Fetches real-time weather data from an external API using ReactJS.",
            image: "/weather.jpeg",
            link: "https://weatherapp66.netlify.app/",
            category: "Web App",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle navigation arrows
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 2) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 2 : (prev - 2 + projects.length) % projects.length
        );
    };

    // Calculate the currently visible projects
    const visibleProjects = projects.slice(currentIndex, currentIndex + 2);

    return (
        <div className="relative h-screen flex flex-col items-center justify-center max-w-full px-6 mx-auto overflow-hidden z-0">
            {/* Heading */}
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            {/* Project Cards */}
            <div className="relative w-full max-w-5xl mt-20 flex justify-center items-center">
                {/* Arrow Left */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 z-10 bg-gray-800 text-white p-4 md:p-6 rounded-full shadow-lg animate-pulse hover:bg-gray-700 hover:scale-110 transition duration-300"
                >
                    &#8592;
                </button>

                {/* Project Container */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
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
                    ))}
                </motion.div>

                {/* Arrow Right */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 z-10 bg-gray-800 text-white p-4 md:p-6 rounded-full shadow-lg animate-pulse hover:bg-gray-700 hover:scale-110 transition duration-300"
                >
                    &#8594;
                </button>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-[30%] left-0 h-[400px] w-full bg-[#F7AB0A]/20 -skew-y-12 z-[-1]" />
        </div>
    );
};

export default Projects;
