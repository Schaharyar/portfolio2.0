'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

function Skills({}: Props) {
    return (
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
            {/* Skill Icon */}
            {[
                { src: "/html.png", name: "HTML" },
                { src: "/css-3.png", name: "CSS" },
                { src: "/js.png", name: "JavaScript" },
                { src: "/icons8-tailwind-css-96.png", name: "Tailwind CSS" },
                { src: "/icons8-nextjs-144.png", name: "Next.js" },
                { src: "/icons8-typescript-96.png", name: "TypeScript" },
                { src: "/code-branch.png", name: "Git" },
                { src: "/technology.png", name: "Tech Tools" },
                { src: "/devops.png", name: "DevOps" },
            ].map((skill, index) => (
                <motion.div
                    key={index}
                    className="relative group flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src={skill.src}
                        alt={skill.name}
                        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                        <span className="text-white text-sm font-semibold">{skill.name}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default Skills;
