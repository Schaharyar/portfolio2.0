'use client'
import React, {  ReactElement } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
    
}

const Navbar: React.FC<Props> = () => {
    return (

        <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5
        }}
         className='flex flex-row items-center xl:items-center'>
            <SocialIcon
            url='https://github.com/Sheharyartariq'
            target='_blank'
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon
            url='https://www.linkedin.com/in/sheharyar-tariq'
            target='_blank'
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon
            url='https://www.upwork.com/freelancers/~019897580da9efcffc'
            target='_blank'
            fgColor='gray'
            bgColor='transparent'
            />
        </motion.div>
        
        <Link href='#contact'>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5
        }}
         className='flex flex-row items-center text-gray-400 cursor-pointer'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
        </Link>
        </div> 
    )
}

export default Navbar
