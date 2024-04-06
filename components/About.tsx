'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
    
}

const About: React.FC<Props> = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3> 
        
       <motion.img
       initial={{ x: -200, opacity: 0}}
            transition={{
             duration: 1.2
            }}
             whileInView={{ x: 0, opacity: 1}}
             viewport={{once: true}}
            src="/usr.jpeg"
            alt='usr_img'  
            className='mt-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-64 xl:h-95'
       />    
      
       <div className='space-y-3 px-0 md:px-10'>
        <h4
         className='text-xl md:text-3xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> Background.</h4>
        <p
         className='text-base'>
        Highly skilled MERN Stack Developer with [3 years] of experience in designing, developing, and deploying web appli-
        cations. Proficient in utilizing MongoDB, Express.js, React.js, and Node.js to deliver robust and efficient solutions.
        </p>
       </div>
        </motion.div>
    )
}

export default About
