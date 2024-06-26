'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
    
}

const Projects: React.FC<Props> = () => {
   
    return (
        <div
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-ful justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3> 
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
           
                
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                     initial={{ y: -200, opacity: 0}}
                     transition={{
                      duration: 1.2
                     }}
                      whileInView={{ y: 0, opacity: 1}}
                    //   viewport={{once: true}}
                    className='rounded-md h-55 md:h-30 xl:h-60'
                    src="/bgremove.png"/>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <Link
                        className='text-[#F7AB0A]' 
                        href="https://bgremove66.netlify.app">
                        <h4 className='text-xl md:text-4xl font-bold flex  text-center'>Case Study of : BG Remover
                        <img
                        className='h-5 w-5 md:h-7 md:w-7 ml-2 mt-1' 
                        src="/external-link.png"/></h4>
                        </Link>
                        <p className='text-lg text-center md:text-left'>
                        Built a tool to remove background of an image by using ReactJS and External APIs.   
                        </p>
                    </div>
                </div>

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                     initial={{ y: -200, opacity: 0}}
                     transition={{
                      duration: 1.2
                     }}
                      whileInView={{ y: 0, opacity: 1}}
                      
                    src="/no-back.png" alt="" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <Link
                        className='text-[#F7AB0A]' 
                        href="https://bgchanger66.netlify.app/">
                        <h4 className='text-xl md:text-4xl font-bold flex text-center'>Case Study  of : Color Changer<img
                        className='h-5 w-5 md:h-7 md:w-7 ml-2 mt-1' 
                        src="/external-link.png"/></h4>
                        </Link>
                        <p className='text-lg text-center md:text-left'>
                        In this tool the user can write any color name and the colors display. This is also built with the help of ReactJS
                        </p>
                    </div>
                </div>

        </div>


        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
        </div>
    )
}

export default Projects
