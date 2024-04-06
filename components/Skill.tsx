'use client'
import React from 'react'
import Skills from './Skills'
import { motion } from 'framer-motion'

interface Props {
    
}

const Skill: React.FC<Props> = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 2}} 
        className='flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
           <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
           <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-xm'>Hover over a skill for current proficiency</h3>   

            <div className='grid grid-cols-3 gap-5 md:grid-cols-4'>
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            </div>

        </motion.div>
    )
}

export default Skill
