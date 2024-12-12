'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {}

const ExperienceCard: React.FC<Props> = () => {
    return (
        <article className="flex flex-col items-center space-y-4 w-full max-w-sm bg-[#292929] p-6 rounded-lg shadow-md hover:opacity-100 opacity-90 cursor-pointer transition-opacity duration-200">
            <motion.img
                initial={{
                    y: -50,
                    opacity: 0
                }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-24 w-24 rounded-full object-cover"
                src="https://avatars.githubusercontent.com/u/99352538?v=4"
                alt="Profile Picture"
            />

            <div className="text-center">
                <h4 className="text-2xl font-semibold text-white">Network Technician</h4>
                <p className="text-lg font-medium text-gray-300 mt-1">Self-Employed</p>
                <p className="text-sm text-gray-500 uppercase mt-2">2021 - 2023</p>
            </div>

            <ul className="list-disc text-left space-y-2 text-gray-400 text-sm px-6">
                <li>Troubleshooting network and server problems</li>
                <li>Testing and configuring software</li>
                <li>Setting up and managing network systems</li>
            </ul>
        </article>
    )
}

export default ExperienceCard
