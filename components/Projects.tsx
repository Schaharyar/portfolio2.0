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

    // State for selected category and current project index
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    // Filtered projects based on category
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    // Handle next/previous project navigation
    const handleNextProject = () => {
        setCurrentProjectIndex((prev) => (prev + 1) % filteredProjects.length);
    };

    const handlePrevProject = () => {
        setCurrentProjectIndex((prev) =>
            prev === 0 ? filteredProjects.length - 1 : prev - 1
        );
    };

    return (
        <div className="relative flex flex-col items-center justify-center max-w-full px-6 mx-auto overflow-hidden z-0">
            {/* Heading */}
            <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            {/* Filter Buttons */}
            <div className="flex gap-4 my-10 mt-28">
                {["All", "Tools", "Web App", "Full Stack"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                            selectedCategory === category
                                ? "bg-[#F7AB0A] text-white"
                                : "bg-gray-200 text-gray-800"
                        } transition duration-300 hover:bg-[#F7AB0A] hover:text-white`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="relative w-full max-w-5xl p-10 mt-2 mx-auto flex justify-center items-center md:hidden">
                {/* Arrow Left */}
                <button
                    onClick={handlePrevProject}
                    className="absolute left-0 z-10 bg-gray-800 text-white p-6 md:p-8 rounded-full shadow-lg animate-pulse hover:bg-gray-700 hover:scale-110 transition duration-300"
                >
                    &#8592;
                </button>

                {/* Project Card (display one project at a time on mobile) */}
                <motion.div
                    key={filteredProjects[currentProjectIndex].title}
                    className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Project Image */}
                    <motion.img
                        src={filteredProjects[currentProjectIndex].image}
                        alt={filteredProjects[currentProjectIndex].title}
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
                            {filteredProjects[currentProjectIndex].title}
                        </h4>
                        <p className="text-sm mt-1">
                            {filteredProjects[currentProjectIndex].description}
                        </p>
                        <a
                            href={filteredProjects[currentProjectIndex].link}
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

                {/* Arrow Right */}
                <button
                    onClick={handleNextProject}
                    className="absolute right-0 z-10 bg-gray-800 text-white p-6 md:p-8 rounded-full shadow-lg animate-pulse hover:bg-gray-700 hover:scale-110 transition duration-300"
                >
                    &#8594;
                </button>
            </div>

            {/* Project Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-10 mt-2"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl p-10 mt-2 mx-auto hidden md:grid place-items-center">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
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
            </div>

            {/* Background Decoration */}
            <div className="absolute top-[30%] left-0 h-[400px] w-full bg-[#F7AB0A]/20 -skew-y-12 z-[-1]" />
        </div>
    );
};

export default Projects;
