'use client'
import React, {  ReactElement } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '@/components/BackgroundCircles'
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  
}

export default function Hero({}: Props): ReactElement {
  const [text, count] = useTypewriter({
    words: [
      "Hi The Name's Sheharyar",
      "Guy who loves coffee",
      "<ButLovesToCodeMore/>"
    ],
    loop: true, 
    deleteSpeed: 50, 
    typeSpeed: 100, 
  });
  return (
   
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      
      
      <img
      className='relative rounded-full h-32 w-32 mx-auto object-cover' 
      src="/usr.jpeg" alt="Sherry" />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer  
        </h2>
      <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <div className='pt-5'>
        <Link href="#about">
        <button className='heroButton'>About</button>
        </Link>
        <Link href="#experience">
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href="#skills">
        <button className='heroButton'>Skils</button>
        </Link>
        <Link href="#projects">
        <button className='heroButton'>Projects</button>
        </Link>
      </div>
      </div>
    </div>
  )
}
