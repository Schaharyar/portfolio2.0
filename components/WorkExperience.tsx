"use client"
import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

interface Props {}

const WorkExperience: React.FC<Props> = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Dummy data for Experience Cards
  const experiences = [1, 2, 3, 4]; // Replace with real experience data

  // Handle navigation
  const handleNavigate = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentCard((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
    } else {
      setCurrentCard((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="h-screen flex flex-col items-center text-center max-w-full px-10 justify-center mx-auto relative overflow-hidden">
      {/* Heading */}
      <h3 className="absolute top-20 left-1/2 transform -translate-x-1/2 uppercase tracking-[15px] text-gray-500 text-2xl z-10">
        Experience
      </h3>

      {/* Arrow Buttons */}
      <button
        className="absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-6 md:p-8 rounded-full shadow-lg animate-pulse hover:bg-gray-700 hover:scale-110 transition duration-300"
        onClick={() => handleNavigate("left")}
      >
        &#8592;
      </button>

      <button
        className="absolute right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-6 md:p-8 rounded-full shadow-lg animate-pulse hover:bg-gray-700 hover:scale-110 transition duration-300"
        onClick={() => handleNavigate("right")}
      >
        &#8594;
      </button>

      {/* Experience Card Display */}
      <div className="flex w-full overflow-hidden items-center justify-center relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentCard * 100}%)`,
          }}
        >
          {experiences.map((_, index) => (
            <div
              key={index}
              className={`min-w-full flex justify-center items-center transition-opacity duration-500 ease-in-out ${
                index === currentCard ? "opacity-100" : "opacity-50"
              }`}
            >
              <ExperienceCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
