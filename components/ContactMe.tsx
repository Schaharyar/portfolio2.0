'use client'
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
// import { useForm, SubmitHandler } from "react-hook-form"


// type Inputs = {
//     Name: string
//     email: string
//     message: string
//   }


interface Props {
    
}

const ContactMe: React.FC<Props> = () => {
//     const { register, handleSubmit } = useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = (e) => {
//     e.target.reset();
    // window.location.href =    `mailto:xheharyartariq@gmail?body=Hi my name is ${formData.Name}. ${formData.message} (${formData.email})`;
//   };

    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-ful justify-evenly mx-auto items-center z-0'>
             <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3> 

            <div className='flex flex-col space-y-5'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{""}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
                </h4>

                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h- w-7 animate-pulse'/>
                    <p className='text-2xl'>+923049347176</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h- w-7 animate-pulse'/>
                    <p className='text-2xl'>xheharyartariq@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h- w-7 animate-pulse'/>
                    <p className='text-2xl'>123 Developer Lane</p>
                    </div>
                </div>

                <form
                    className='flex flex-col space-y-2 w-[400px] mx-auto'>
                    <input  className='contactInput' placeholder='Name' type="text" required/>
                    <input  className='contactInput' placeholder='Email' type="email" required/>
                    <textarea  className='contactInput' placeholder='Message' required/>
                    <button
                    type='submit'  
                    className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>


            </div>
        </div>
    )
}

export default ContactMe