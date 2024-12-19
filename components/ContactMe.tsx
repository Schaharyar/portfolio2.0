'use client'
import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

interface Props {}

const ContactMe: React.FC<Props> = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center md:text-left md:items-start z-0 px-6 py-8 md:px-10 md:h-[60vh] h-screen sm:h-auto"
      style={{
        backgroundImage: `url('/bg-footer.jpg')`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Heading */}
      <h3 className="absolute top-24 w-full text-center md:text-left uppercase tracking-[20px] text-gray-500 text-3xl">
        Contact
      </h3>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center md:items-start space-y-6">
        <h4 className="text-2xl font-semibold text-gray-100 text-center md:text-left">
          Let&#39;s Connect.{' '}
          <span className="underline decoration-[#F7AB0A]/50">Reach Out</span>
        </h4>

        {/* Buttons */}
        <div className="flex space-x-8 justify-center md:justify-start">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923049347176"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex justify-center items-center"
          >
            {/* Mobile Icon */}
            <PhoneIcon className="h-6 w-6 text-white md:hidden" />
            {/* Desktop Text */}
            <span className="hidden md:block ml-2 text-lg">WhatsApp</span>
          </a>

          {/* Email Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=schaharyar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 flex justify-center items-center"
          >
            {/* Mobile Icon */}
            <EnvelopeIcon className="h-6 w-6 text-white md:hidden" />
            {/* Desktop Text */}
            <span className="hidden md:block ml-2 text-lg">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
