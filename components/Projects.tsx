'use client';
import React from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link';

interface Props {}

const Projects: React.FC<Props> = () => {
    const projects = [
        {
            title: "BG Remover",
            description: "Built a tool to remove the background of an image using ReactJS and External APIs.",
            image: "/bgremove.png",
            link: "https://bgremove66.netlify.app",
        },
        {
            title: "Color Changer",
            description: "A tool where users can input any color name to display it. Built with ReactJS.",
            image: "/no-back.png",
            link: "https://bgchanger66.netlify.app/",
        },
    ];

    return (
        <div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto overflow-hidden z-0">
            <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative flex flex-col md:flex-row w-full items-center justify-center space-y-10 md:space-y-0 md:space-x-10 p-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group relative w-[90%] md:w-[45%] lg:w-[40%] bg-[#292929] rounded-lg shadow-lg p-6 overflow-hidden transition-transform duration-300 hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="rounded-md object-cover h-40 w-auto"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <div className="mt-6">
                            <h4 className="text-2xl font-bold text-white group-hover:text-[#F7AB0A] transition-colors duration-300">
                                {project.title}
                            </h4>
                            <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4  text-[#F7AB0A] font-semibold flex items-center hover:underline cursor-pointer"
                            >
                                View Project
                                <img
                                    src="/external-link.png"
                                    alt="Link"
                                    className="h-5 w-5 ml-2"
                                />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Background Element */}
            <div className="absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] w-full -skew-y-12" />
        </div>
    );
};

export default Projects;

