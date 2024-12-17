import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* Header Section */}
        <Navbar />

        {/* Hero Section*/}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        {/* Skills section */}
        <section id="skills" className="snap-start">
          <Skill />
        </section>

        {/* Projects section */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        {/* Footer (scroll to top) */}
        <Link href="#hero">
          <footer className="fixed bottom-5 right-20 w-12 h-12 cursor-pointer transition-all duration-300 ease-in-out opacity-0 md:opacity-100 z-50">
            <div className="flex items-center justify-center h-full w-full">
              <img
                className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110"
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/chevron-up.png"
                alt="chevron-up"
              />
            </div>
          </footer>
        </Link>
      </main>
    </>
  );
}
