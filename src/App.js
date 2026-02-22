"use client"
import { useEffect, useState, useCallback } from "react"


import {
 
  
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
  ArrowLeft,
  X
} from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
 import './index.css';
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card"
import { projects } from "./data/Project"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [projectTab, setProjectTab] = useState("development")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActiveSection(id)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#0a1929"
    return () => {
      document.documentElement.style.backgroundColor = ""
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a1929] font-sans text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-fit -translate-x-1/2">
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded-full border border-[#4FC3F7]/20 bg-[#1a2332]/90 px-3 py-2 shadow-lg backdrop-blur-md">
            <div className="flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide px-2 sm:px-4">
              {["home", "about", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-[#4FC3F7] ${
                    activeSection === section
                      ? "text-[#4FC3F7] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#4FC3F7]"
                      : "text-white/70"
                  }`}
                >
                  {section === "projects"
                    ? "Projects"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <a
        href="/Anjali_cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#29B6F6] px-4 py-2 text-base font-medium text-[#0a1929] shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4FC3F7]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1929]"
      >
        Resume <ArrowRight className="ml-2 h-4 w-4" />
      </a>





      {/* Home Section */}
      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center justify-center py-12 md:py-24 lg:py-32 overflow-hidden bg-[#0a1929]"
      >
        {/* Light blue organic blob shapes */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] -translate-x-1/4 -translate-y-1/4 z-0">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M180,30 Q120,60 90,120 Q60,180 80,240 Q100,300 140,340 Q180,370 240,360 Q300,350 340,300 Q370,250 360,180 Q350,110 310,70 Q270,30 220,40 Q180,30 180,30 Z"
              fill="#4FC3F7"
              opacity="0.2"
            />
            <path
              d="M180,30 Q120,60 90,120 Q60,180 80,240 Q100,300 140,340 Q180,370 240,360 Q300,350 340,300 Q370,250 360,180 Q350,110 310,70 Q270,30 220,40 Q180,30 180,30 Z"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Light blue organic blob shape - Right Side */}
        <div className="absolute top-1/2 right-0 w-[350px] h-[500px] md:w-[450px] md:h-[600px] translate-x-1/4 -translate-y-1/2 z-0">
          <svg viewBox="0 0 350 500" className="w-full h-full">
            <path
              d="M80,40 Q40,100 50,180 Q60,260 90,320 Q120,380 170,420 Q220,460 280,450 Q330,440 350,380 Q360,320 350,250 Q340,180 310,130 Q280,80 240,60 Q200,40 150,50 Q80,40 80,40 Z"
              fill="#64B5F6"
              opacity="0.15"
            />
          </svg>
        </div>

        {/* Light blue wavy lines - Bottom Right */}
        <div className="absolute bottom-20 right-10 w-[300px] h-[200px] z-0 opacity-30">
          <svg viewBox="0 0 300 200" className="w-full h-full">
            <path
              d="M0,90 Q30,70 60,85 Q90,100 120,95 Q150,90 180,100 Q210,110 240,105 Q270,100 300,110"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="1.5"
            />
            <path
              d="M0,110 Q40,95 80,110 Q120,125 160,120 Q200,115 240,125 Q280,135 300,130"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="1.5"
            />
            <path
              d="M0,130 Q35,115 70,130 Q105,145 140,140 Q175,135 210,145 Q245,155 280,150 Q300,148 300,150"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="1.5"
            />
            <path
              d="M0,150 Q45,135 90,150 Q135,165 180,160 Q225,155 270,165 Q300,170 300,170"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16 relative z-10">
          {/* Left Side - Text Content */}
          <div className="order-2 space-y-6 text-left md:order-1 animate-fade-in-up">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white animate-fade-in-up animation-delay-300">
              Hi I'm Anjali Singh
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4FC3F7] animate-fade-in-up animation-delay-400">
              Web Developer / UI Designer
            </h2>
            
            <p className="max-w-[600px] text-base sm:text-lg text-white/80 leading-relaxed animate-fade-in-up animation-delay-500">
              Blending creativity & code into unforgettable journeys. From developing AR-based apps to building emotion-driven platforms, I bring ideas to life through clean code and expressive design.
            </p>
          </div>
          
          {/* Right Side - Portrait Image */}
          <div className="order-1 flex justify-center md:order-2 animate-fade-in-up animation-delay-700 relative z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4FC3F7]/20 blur-2xl rounded-lg"></div>
              <img
                src="/anjali.jpg"
                width={350}
                height={450}
                alt="Anjali Singh"
                className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] object-cover rounded-lg shadow-2xl ring-2 ring-[#4FC3F7]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 min-h-screen bg-[#0a1929] py-12 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Light blue organic blob shapes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] translate-x-1/4 -translate-y-1/4 z-0">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200,50 Q250,80 280,130 Q310,180 300,240 Q290,300 250,340 Q210,370 150,360 Q90,350 60,300 Q30,250 40,180 Q50,110 100,70 Q150,30 200,50 Z"
              fill="#64B5F6"
              opacity="0.15"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] md:w-[450px] md:h-[450px] -translate-x-1/4 translate-y-1/4 z-0">
          <svg viewBox="0 0 350 350" className="w-full h-full">
            <path
              d="M100,50 Q50,100 60,170 Q70,240 110,290 Q150,340 220,330 Q290,320 330,270 Q360,220 350,150 Q340,80 300,40 Q260,0 190,20 Q100,50 100,50 Z"
              fill="#4FC3F7"
              opacity="0.2"
            />
            <path
              d="M100,50 Q50,100 60,170 Q70,240 110,290 Q150,340 220,330 Q290,320 330,270 Q360,220 350,150 Q340,80 300,40 Q260,0 190,20 Q100,50 100,50 Z"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Light blue wavy lines */}
        <div className="absolute top-1/3 left-10 w-[250px] h-[150px] z-0 opacity-25">
          <svg viewBox="0 0 250 150" className="w-full h-full">
            <path
              d="M0,50 Q30,30 60,50 Q90,70 120,60 Q150,50 180,60 Q210,70 240,65 Q250,63 250,65"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="1.5"
            />
            <path
              d="M0,70 Q40,55 80,70 Q120,85 160,80 Q200,75 240,85 Q250,87 250,90"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16 relative z-10">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-white animate-fade-in-up animation-delay-300">
              About Me
            </h2>
            <div className="space-y-4 animate-fade-in-up animation-delay-500">
  <p className="max-w-[600px] text-lg text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    Hi, I'm <strong className="text-[#4FC3F7]">Anjali Singh</strong>, a web developer and UI designer from Mumbai with a BSc in IT. I build user-focused digital experiences that blend clean design with functional code.
  </p>

  <p className="max-w-[600px] text-lg text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    I’ve worked as a Front-End Intern at{" "}
    <strong className="text-[#4FC3F7]">
      International Business Machines (IBM)
    </strong>{" "}
    and as a UI/UX Designer & Front-End Developer at{" "}
    <strong className="text-white">WeSee</strong>, creating responsive web and mobile interfaces and transforming Figma designs into scalable{" "}
    <strong className="text-[#4FC3F7]">React</strong> and{" "}
    <strong className="text-white">Next.js</strong> applications.
  </p>

  <p className="max-w-[600px] text-lg text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    Skilled in <strong className="text-white">Kotlin</strong>,{" "}
    <strong className="text-[#4FC3F7]">JavaScript</strong>,{" "}
    <strong className="text-white">React</strong>,{" "}
    <strong className="text-[#4FC3F7]">Android Development</strong>, and{" "}
    <strong className="text-white">Figma</strong>.
  </p>
</div>
          </div>
          <div className="flex justify-center animate-fade-in-up animation-delay-700">
            <div className="relative group">
        
              <img src="/ai.webp" alt="astro" className="relative h-auto max-h-[450px] w-full max-w-[650px] hover:scale-105 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Carousel */}
      <section
        id="projects"
        className="relative z-10 min-h-screen bg-[#0a1929] py-12 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Light blue organic blob shapes */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] -translate-x-1/3 -translate-y-1/3 z-0">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M150,80 Q100,120 90,180 Q80,240 120,290 Q160,340 220,350 Q280,360 330,320 Q370,280 360,220 Q350,160 310,120 Q270,80 220,70 Q150,80 150,80 Z"
              fill="#4FC3F7"
              opacity="0.15"
            />
            <path
              d="M150,80 Q100,120 90,180 Q80,240 120,290 Q160,340 220,350 Q280,360 330,320 Q370,280 360,220 Q350,160 310,120 Q270,80 220,70 Q150,80 150,80 Z"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[400px] md:w-[450px] md:h-[500px] translate-x-1/3 translate-y-1/3 z-0">
          <svg viewBox="0 0 350 400" className="w-full h-full">
            <path
              d="M200,50 Q250,100 270,160 Q290,220 260,280 Q230,340 180,360 Q130,380 80,340 Q30,300 40,230 Q50,160 100,110 Q150,60 200,50 Z"
              fill="#64B5F6"
              opacity="0.2"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-8 flex items-center justify-between animate-fade-in-up">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-white animate-fade-in-up animation-delay-300">
              Work
            </h2>
            <div className="flex items-center rounded-full bg-[#1a2332]/90 px-1 py-1 text-xs shadow-sm border border-[#4FC3F7]/20 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setProjectTab("development")}
                className={`flex items-center gap-1 rounded-full px-3 py-1 font-semibold transition-all duration-200 ${
                  projectTab === "development"
                    ? "bg-[#4FC3F7] text-[#0a1929] shadow-sm"
                    : "text-white/70 hover:text-[#4FC3F7]"
                }`}
              >
                <span>{">_"}</span>
                <span>DEV</span>
              </button>
              <button
                type="button"
                onClick={() => setProjectTab("design")}
                className={`rounded-full px-3 py-1 font-semibold transition-all duration-200 ${
                  projectTab === "design"
                    ? "bg-[#4FC3F7] text-[#0a1929] shadow-sm"
                    : "text-white/70 hover:text-[#4FC3F7]"
                }`}
              >
                DES
              </button>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <ProjectsCarousel activeTab={projectTab} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 min-h-screen flex items-center justify-center bg-[#0a1929] px-4 md:px-6 overflow-hidden"
      >
        {/* Light blue organic blob shapes */}
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] -translate-x-1/3 z-0">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path
              d="M100,50 Q50,100 60,170 Q70,240 120,280 Q170,320 240,310 Q300,300 320,240 Q330,180 280,130 Q230,80 170,60 Q100,50 100,50 Z"
              fill="#64B5F6"
              opacity="0.15"
            />
          </svg>
        </div>

        <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] md:w-[450px] md:h-[450px] translate-x-1/3 z-0">
          <svg viewBox="0 0 350 350" className="w-full h-full">
            <path
              d="M200,80 Q250,120 270,180 Q290,240 250,290 Q210,340 150,350 Q90,360 50,310 Q10,260 30,200 Q50,140 100,100 Q150,60 200,80 Z"
              fill="#4FC3F7"
              opacity="0.2"
            />
            <path
              d="M200,80 Q250,120 270,180 Q290,240 250,290 Q210,340 150,350 Q90,360 50,310 Q10,260 30,200 Q50,140 100,100 Q150,60 200,80 Z"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Light blue wavy lines */}
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[120px] z-0 opacity-25">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            <path
              d="M0,40 Q25,25 50,40 Q75,55 100,50 Q125,45 150,55 Q175,65 200,60"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="1.5"
            />
            <path
              d="M0,60 Q30,45 60,60 Q90,75 120,70 Q150,65 180,75 Q200,80 200,85"
              fill="none"
              stroke="#4FC3F7"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="text-center relative z-10 animate-fade-in-up">
          <h2 className="font-mono mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-white animate-fade-in-up animation-delay-300">
            Get in Touch
          </h2>
          <p className="mb-10 text-lg text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up animation-delay-500">
            Have a project in mind? Let's chat ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 animate-fade-in-up animation-delay-700">
            {/* Social Links */}
            <a
              href="https://www.instagram.com/anjalisinggh_12/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#4FC3F7] hover:scale-110"
            >
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">Instagram</span>
            </a>
            <a
              href="https://github.com/Anjalisinggh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#4FC3F7] hover:scale-110"
            >
              <Github className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
              <span className="text-xs sm:text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-singh-82bb42302/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#4FC3F7] hover:scale-110"
            >
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:anjalisinggh.12@gmail.com"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#4FC3F7] hover:scale-110"
            >
              <Mail className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
              <span className="text-xs sm:text-sm font-medium">Gmail</span>
            </a>
            <a
              href="https://x.com/anjalisinggh12?t=7C4F4VoZQBtreAbIsOFFYg&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#4FC3F7] hover:scale-110"
            >
              <X className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">X</span>
            </a>
            <a
              href="https://www.behance.net/anjaliisingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#4FC3F7] hover:scale-110"
            >
              <svg 
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.1 1.75H14.01c.022 1.423.928 2.15 2.303 2.15 1.139 0 1.934-.657 2.122-1.978h2.191zm-6.979-7.375c-.099.272-.142.567-.142.861 0 1.667.806 2.764 2.093 2.764 1.127 0 1.874-.85 1.917-2.423h-3.868zM6 13H2v-2h4v2zm-2-3h4V8H4v2zm2-3H2V3h4v4z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium">Behance</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
function ProjectCard({ project }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#4FC3F7]/20 bg-[#1a2332]/90 shadow-lg shadow-black/40 transition-all duration-500 hover:shadow-[#4FC3F7]/30 hover:-translate-y-1">
      <div className="relative h-56 w-full overflow-hidden">
        {project.video ? (
          <video
            src={project.video}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
      <CardHeader className="p-4 group-hover:bg-gradient-to-r group-hover:from-[#1a2332] group-hover:to-[#0a1929] transition-all duration-500">
        <CardTitle className="font-heading text-xl font-semibold text-white group-hover:text-[#4FC3F7] transition-colors duration-300">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-3 p-4 pt-0">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn"
          >
            <Button
              variant="outline"
              className="border-[#4FC3F7] bg-transparent text-[#4FC3F7] hover:bg-[#4FC3F7]/10 transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg"
            >
              View Project
            </Button>
          </a>
        )}
        {project.downloadLink && (
          <a href={project.downloadLink} download className="group/btn">
            <Button className="bg-gradient-to-r from-[#4FC3F7] to-[#29B6F6] text-[#0a1929] hover:from-[#64B5F6] hover:to-[#4FC3F7] transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg">
              Download
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  )
}

function ProjectsCarousel({ activeTab }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback(index => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(emblaApi => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  const onInit = useCallback(emblaApi => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="relative">
      {/* Development projects carousel */}
      {activeTab === "development" && (
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {projects.map(project => (
                <div
                  key={project.id}
                  className="embla__slide min-w-0 flex-[0_0_100%] p-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4FC3F7]/20 bg-[#1a2332]/90 shadow-lg backdrop-blur-md hover:bg-[#1a2332] hover:scale-110 hover:shadow-[#4FC3F7]/30 transition-all duration-300 md:left-4"
          >
            <ArrowLeft className="h-5 w-5 text-[#4FC3F7]" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4FC3F7]/20 bg-[#1a2332]/90 shadow-lg backdrop-blur-md hover:bg-[#1a2332] hover:scale-110 hover:shadow-[#4FC3F7]/30 transition-all duration-300 md:right-4"
          >
            <ArrowRight className="h-5 w-5 text-[#4FC3F7]" />
            <span className="sr-only">Next slide</span>
          </Button>

          <div className="mt-8 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                onClick={() => scrollTo(index)}
                className={`h-2 w-2 rounded-full p-0 transition-all duration-300 hover:scale-125 hover:shadow-md ${
                  index === selectedIndex ? "bg-[#4FC3F7] scale-125 shadow-md" : "bg-white/20"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Design case study */}
      {activeTab === "design" && (
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#4FC3F7]/20 bg-[#1a2332]/90 shadow-lg shadow-black/40 transition-all duration-500 hover:shadow-[#4FC3F7]/30 hover:-translate-y-1">
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src="/solare.jpg"
                alt="SOLARE — Luxury Jewelry Shopping Experience"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 text-sm font-medium uppercase tracking-wide text-[#4FC3F7] bg-[#1a2332]/90 px-2 py-1 rounded">
                UI/UX 
              </div>
            </div>
            <CardHeader className="p-4 group-hover:bg-gradient-to-r group-hover:from-[#1a2332] group-hover:to-[#0a1929] transition-all duration-500">
              <CardTitle className="font-heading text-xl font-semibold text-white group-hover:text-[#4FC3F7] transition-colors duration-300">
              SOLARE — Luxury Jewelry Shopping Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-4 pt-0">
              <CardDescription className="text-white/70">
              SOLARE is a premium jewelry shopping app designed to bring elegance, emotion, and modern technology into one seamless experience. The goal was to create a refined, intuitive, and immersive mobile journey where users can discover handcrafted pieces, try them on virtually, and complete purchases with confidence.              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center gap-3 p-4 pt-0">
              <p className="text-xs text-white/60">
                Tools: Figma · Prototyping · User Flows
              </p>
              <a
                href="https://www.behance.net/gallery/238298675/SOLARE-Get-the-Best-Out-of-Rest"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn"
              >
                <Button className="bg-gradient-to-r from-[#4FC3F7] to-[#29B6F6] text-[#0a1929] hover:from-[#64B5F6] hover:to-[#4FC3F7] transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg">
                Explore the Design
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>

        

        
      )}
    </div>
  )
}
