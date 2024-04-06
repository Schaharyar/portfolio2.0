import React from 'react'
import ExperienceCard from './ExperienceCard'

interface Props {
    
}

const WorkExperience: React.FC<Props> = () => {
    return (
        <div className='h-screen flex relative space-y-20  xl:space-y-30 overflow-hidden flex-col text-left md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3
            className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
            >Experience</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>
    )
}

export default WorkExperience
