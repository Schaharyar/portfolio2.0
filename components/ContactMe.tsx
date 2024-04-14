'use client'
import React, {useState} from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'


interface Props {
    
}

const ContactMe: React.FC<Props> = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        // Emailjs services
        const serviceId = 'service_eq4a25d';
        const templateId = 'template_n9q3m2m';
        const publickey = 'pfX1zOv3KaGSPj6Pl';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Schaheryar',
            message: message
        };

        // sending the mail
        emailjs.send(serviceId, templateId, templateParams, publickey)
        .then((Response) => {
            // alert('Message Sent Successfully')
            toast.success("Form Submitted!")
            // console.log('Email send Successfully!', Response )
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            toast.error('Something went wrong!')
            console.log('Error sending enail:', error)
        })

    }

    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-ful justify-evenly mx-auto items-center z-0'>
             <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3> 

            <div className='flex flex-col space-y-5'>
                <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                    I have got just what you need.{""}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
                </h4>

                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h- w-7 animate-pulse'/>
                    <p className='text-xl md:text-2xl'>+923049347176</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h- w-7 animate-pulse'/>
                    <p className='text-xl md:text-2xl'>xheharyartariq@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h- w-7 animate-pulse'/>
                    <p className='text-xl md:text-2xl'>123 Developer Lane</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}
                    className='flex flex-col space-y-2 w-[350px] md:w-[400px] mx-auto'>
                    <input  
                    className='contactInput' 
                    placeholder='Name' 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required/>
                    <input  
                    className='contactInput' 
                    placeholder='Email' 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required/>
                    <textarea  
                    className='contactInput' 
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} 
                    required/>
                    <button
                    type='submit'  
                    className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>


            </div>
        </div>
    )
}

export default ContactMe