'use client'
import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

interface Props {}

const ContactMe: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_eq4a25d';
    const templateId = 'template_n9q3m2m';
    const publickey = 'pfX1zOv3KaGSPj6Pl';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Schaheryar',
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publickey)
      .then(() => {
        toast.success('Form Submitted!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        toast.error('Something went wrong!');
        console.error('Error sending email:', error);
      });
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center text-left z-0 px-6 py-8 md:px-10 md:h-[80vh] h-screen sm:h-auto"
      style={{
        backgroundImage: `url('/bg-footer.jpg')`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Centered Heading */}
      <h3 className="absolute top-24 w-full text-center uppercase tracking-[20px] text-gray-500 text-3xl">
        Contact
      </h3>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-screen-lg mx-auto space-y-6 md:space-y-0 md:space-x-12 items-start">
        {/* Text Section */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          <h4 className="text-2xl font-semibold text-gray-100">
            I have just what you need.{' '}
            <span className="underline decoration-[#F7AB0A]/50">Let&#39;s Talk</span>
          </h4>

          <div className="space-y-3 text-gray-200">
            <div className="flex items-center space-x-3">
              <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
              <p className="text-lg">+92-304-9347176</p>
            </div>
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
              <p className="text-lg">schaharyar@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
              <p className="text-lg">123 Developer Lane</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 w-full md:w-1/2 hidden sm:flex"
        >
          <input
            className="contactInput"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="contactInput"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;