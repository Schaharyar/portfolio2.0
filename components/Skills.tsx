'use client'
import React from 'react'
import { motion } from 'framer-motion';

interface Props {
    // directionLeft?: boolean;
}

function Skills ({  }: Props) {
    return (
        <div className='relative cursor-pointer grid grid-cols-3 gap-5 md:grid-cols-4'>
            <motion.img
             initial={{ opacity: 0}}
             transition={{
              duration: 1.5
             }}
              whileInView={{  opacity: 1}}
            src="/html.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter  transition duration-300 ease-in-out'
            />
            <motion.img
             initial={{ opacity: 0}}
             transition={{
              duration: 1.2
             }}
              whileInView={{ opacity: 1}}
            src="/css-3.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter transition duration-300 ease-in-out'
            />
             <motion.img
              initial={{ opacity: 0}}
              transition={{
               duration: 1.5
              }}
               whileInView={{ opacity: 1}}
            src="/js.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter transition duration-300 ease-in-out'
            />
             <motion.img
              initial={{ opacity: 0}}
              transition={{
               duration: 1.2
              }}
               whileInView={{ opacity: 1}}
            src="/icons8-tailwind-css-96.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter transition duration-300 ease-in-out'
            />
             <motion.img
              initial={{ opacity: 0}}
              transition={{
               duration: 1.5
              }}
               whileInView={{ opacity: 1}}
            src="/icons8-nextjs-144.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter transition duration-300 ease-in-out'
            />
            <motion.img
             initial={{ opacity: 0}}
             transition={{
              duration: 1
             }}
              whileInView={{ x: 0, opacity: 1}}
            src="/icons8-typescript-96.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter transition duration-300 ease-in-out'
            />
             <motion.img
              initial={{ opacity: 0}}
              transition={{
               duration: 1.2
              }}
               whileInView={{ opacity: 1}}
            src="/code-branch.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter transition duration-300 ease-in-out'
            />
             <motion.img
              initial={{ opacity: 0}}
              transition={{
               duration: 1.5
              }}
               whileInView={{ opacity: 1}}
            src="/technology.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter transition duration-300 ease-in-out'
            />
             <motion.img
              initial={{ opacity: 0}}
              transition={{
               duration: 1
              }}
               whileInView={{ opacity: 1}}
            src="/devops.png"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-24
            xl:h-24 filter transition duration-300 ease-in-out'
            />
        </div>


                
        
    )
}

export default Skills
