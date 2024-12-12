import React from 'react';
import ExperienceCard from './ExperienceCard';

interface Props {}

const WorkExperience: React.FC<Props> = () => {
    return (
        <div className="h-screen flex flex-col items-center text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto space-y-10 overflow-hidden">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
                {/* Experience */}
            </h3>

            {/* <div className="w-full flex space-x-6 overflow-x-scroll p-6 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            </div> */}
            <ExperienceCard />    
        </div>
        
    );
};

export default WorkExperience;
