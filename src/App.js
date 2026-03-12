"use client"
import { useEffect, useState, useCallback } from "react"
import {
  Github,
  Instagram,
  Linkedin,
 
  ArrowRight,
  ArrowLeft,
 
} from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "./components/ScrollReveal"
import Navbar from "./components/Navbar"
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
  const [projectTab, setProjectTab] = useState("development")

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000"
    return () => {
      document.documentElement.style.backgroundColor = ""
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black font-sans text-white">
      <Navbar />

      




     {/* Home Section - Hero */}
{/* Home Section - Hero */}
<section
  id="home"
  className="relative z-10 min-h-screen overflow-hidden bg-black text-white flex items-center pt-24 sm:pt-28 lg:pt-0"
>
  {/* Background radial pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(163,230,53,0.08),transparent_40%)]" />
  
  {/* Dot pattern overlay */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px]" />

  <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center lg:text-left"
    >
      <p className="text-xs sm:text-sm tracking-widest uppercase text-white/60 mb-6">
        Hey There! Anjali Singh Here —
      </p>

      <h1
        className="font-heading font-extrabold leading-[1] tracking-tight
                   text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {/* DESIGN Row */}
        <span className="flex items-center justify-center lg:justify-start gap-4">
          DESIGN
          <img
            src="/star.png"
            alt="star"
            className="hidden sm:block w-14 h-14 md:w-16 md:h-16 animate-spinSlow"
          />
        </span>

        {/* DEVELOP Row */}
        <span className="flex items-center justify-center lg:justify-start gap-4 mt-4">
          <img
            src="/circle.png"
            alt="circle"
            className="hidden sm:block w-36 md:w-44 lg:w-52 object-contain"
          />
          DEVELOP
        </span>
      </h1>

      <p className="mt-8 text-sm sm:text-base text-white/60 
                    max-w-md mx-auto lg:mx-0 
                    leading-relaxed">
        I believe in the power of innovation and creativity to transform
        ideas into exceptional digital experiences. Working closely with
        you, I strive to bring your vision to life.
      </p>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex justify-center"
    >
      <div className="relative w-full 
                      max-w-xs sm:max-w-md lg:max-w-lg 
                      h-[300px] sm:h-[450px] lg:h-[600px]">
        <img
          src="/Heroimage.png"
          alt="Abstract Design"
          className="w-full h-full object-contain grayscale contrast-125"
        />
      </div>

      {/* Neon glow accent */}
      <div className="absolute top-8 right-8 w-4 h-4 bg-[#a3e635] rounded-full blur-md animate-pulse" />
    </motion.div>

  </div>
</section>

      {/* About Section */}
      <section
  id="about"
  className="relative z-10 min-h-screen bg-black py-12 md:py-24 lg:py-32 overflow-hidden"
>
  {/* Abstract shapes remain same */}

  <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16 relative z-10">
    
    {/* TEXT */}
    <div className="space-y-6 animate-fade-in-up order-1 md:order-2">
      <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-white animate-fade-in-up animation-delay-300">
        About Me
      </h2>

      <div className="space-y-4 animate-fade-in-up animation-delay-500">
        <p className="max-w-[600px] text-lg text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Hi, I'm <strong className="text-[#a3e635]">Anjali Singh</strong>, a web developer and UI designer from Mumbai with a BSc in IT. I build user-focused digital experiences that blend clean design with functional code.
        </p>

        <p className="max-w-[600px] text-lg text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I’ve worked as a Front-End Intern at{" "}
          <strong className="text-[#a3e635]">
            International Business Machines (IBM)
          </strong>{" "}
          and as a UI/UX Designer & Front-End Developer at{" "}
          <strong className="text-white">WeSee</strong>, creating responsive web and mobile interfaces and transforming Figma designs into scalable{" "}
          <strong className="text-[#a3e635]">React</strong> and{" "}
          <strong className="text-white">Next.js</strong> applications.
        </p>

        <p className="max-w-[600px] text-lg text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Skilled in <strong className="text-white">Kotlin</strong>,{" "}
          <strong className="text-[#a3e635]">JavaScript</strong>,{" "}
          <strong className="text-white">React</strong>,{" "}
          <strong className="text-[#a3e635]">Android Development</strong>, and{" "}
          <strong className="text-white">Figma</strong>.
        </p>
      </div>
    </div>

    {/* IMAGE */}
    <div className="flex justify-center animate-fade-in-up animation-delay-700 order-2 md:order-1">
      <div className="relative group">
        <img
          src="/about.png"
          alt="astro"
          className="relative h-auto max-h-[450px] w-full max-w-[650px] hover:scale-105 transition-all duration-500 animate-spinSlow"
        />
      </div>
    </div>

  </div>
</section>

      {/* Projects Section with Carousel */}
      <section
        id="projects"
        className="relative z-10 min-h-screen bg-black py-12 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Abstract visuals + lime glow */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] -translate-x-1/3 -translate-y-1/3 z-0">
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
            <path d="M100,120 L250,80 L320,200 L280,320 L150,350 L60,240 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(163,230,53,0.08)" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] translate-x-1/4 translate-y-1/4 z-0">
          <div className="w-full h-full bg-[#a3e635] opacity-[0.04] blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-8 flex items-center justify-between animate-fade-in-up">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-white animate-fade-in-up animation-delay-300">
              Work
            </h2>
            <div className="flex items-center rounded-full bg-[#0a0a0a]/90 px-1 py-1 text-xs shadow-sm border border-[#a3e635]/20 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setProjectTab("development")}
                className={`flex items-center gap-1 rounded-full px-3 py-1 font-semibold transition-all duration-200 ${
                  projectTab === "development"
                    ? "bg-[#a3e635] text-[#000000] shadow-sm"
                    : "text-white/70 hover:text-[#a3e635]"
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
                    ? "bg-[#a3e635] text-[#000000] shadow-sm"
                    : "text-white/70 hover:text-[#a3e635]"
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
        className="relative z-10 min-h-screen flex items-center justify-center bg-black px-4 md:px-6 overflow-hidden"
      >
        {/* Lime glow + abstract shapes */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#a3e635] opacity-[0.05] blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] z-0">
          <svg viewBox="0 0 350 350" className="w-full h-full" fill="none">
            <path d="M120,100 L250,80 L320,200 L280,310 Q180,340 80,280 L60,180 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(163,230,53,0.1)" strokeWidth="1" />
          </svg>
        </div>

        <div className="text-center relative z-10 animate-fade-in-up">
          <h2 className="font-heading mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#a3e635] animate-fade-in-up animation-delay-300 tracking-tight">
            LET'S TALK
          </h2>
          <a
            href="mailto:anjalisinggh.12@gmail.com"
            className="inline-block mb-10 text-xl sm:text-2xl text-white/90 hover:text-[#a3e635] transition-colors duration-300 animate-fade-in-up animation-delay-400"
          >
            anjalisinggh.12@gmail.com
          </a>
          <p className="mb-10 text-lg text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up animation-delay-500">
            Have a project in mind? Let's create something extraordinary ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 animate-fade-in-up animation-delay-700">
            {/* Social Links */}
            <a
              href="https://www.instagram.com/anjalisinggh_12/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#a3e635] hover:scale-110"
            >
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">Instagram</span>
            </a>
            <a
              href="https://github.com/Anjalisinggh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#a3e635] hover:scale-110"
            >
              <Github className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
              <span className="text-xs sm:text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-singh-82bb42302/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#a3e635] hover:scale-110"
            >
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
            </a>
            
            <a
  href="https://x.com/anjalisinggh12?t=7C4F4VoZQBtreAbIsOFFYg&s=08"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#a3e635] hover:scale-110"
>
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12"
    aria-hidden="true"
  >
    <path
      d="M4 3h4.2L12 8.2 15.8 3H20l-6 9 6 9h-4.2L12 15.8 8.2 21H4l6-9L4 3z"
      fill="currentColor"
    />
  </svg>
  <span className="text-xs sm:text-sm font-medium">X</span>
</a>
            <a
              href="https://www.behance.net/anjaliisingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-all duration-300 hover:text-[#a3e635] hover:scale-110"
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
    <Card className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#a3e635]/20 bg-[#0a0a0a]/90 shadow-lg shadow-black/40 transition-all duration-500 hover:shadow-[#a3e635]/30 hover:-translate-y-1">
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
      <CardHeader className="p-4 group-hover:bg-gradient-to-r group-hover:from-[#0a0a0a] group-hover:to-[#000000] transition-all duration-500">
        <CardTitle className="font-heading text-xl font-semibold text-white group-hover:text-[#a3e635] transition-colors duration-300">
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
              className="border-[#a3e635] bg-transparent text-[#a3e635] hover:bg-[#a3e635]/10 transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg"
            >
              View Project
            </Button>
          </a>
        )}
        {project.downloadLink && (
          <a href={project.downloadLink} download className="group/btn">
            <Button className="bg-gradient-to-r from-[#a3e635] to-[#84cc16] text-[#000000] hover:from-[#84cc16] hover:to-[#a3e635] transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg">
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
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="embla__slide min-w-0 flex-[0_0_100%] p-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <ScrollReveal delay={index * 0.1} duration={0.7}>
                    <ProjectCard project={project} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a3e635]/20 bg-[#0a0a0a]/90 shadow-lg backdrop-blur-md hover:bg-[#0a0a0a] hover:scale-110 hover:shadow-[#a3e635]/30 transition-all duration-300 md:left-4"
          >
            <ArrowLeft className="h-5 w-5 text-[#a3e635]" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a3e635]/20 bg-[#0a0a0a]/90 shadow-lg backdrop-blur-md hover:bg-[#0a0a0a] hover:scale-110 hover:shadow-[#a3e635]/30 transition-all duration-300 md:right-4"
          >
            <ArrowRight className="h-5 w-5 text-[#a3e635]" />
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
                  index === selectedIndex ? "bg-[#a3e635] scale-125 shadow-md" : "bg-white/20"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Design case study */}
      {activeTab === "design" && (
        <div className="mt-4 flex gap-6 overflow-x-auto pb-2">
          <div className="flex-shrink-0 w-[85%] sm:w-[360px] lg:w-[400px]">
            <ScrollReveal delay={0} duration={0.7}>
              <Card className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#a3e635]/20 bg-[#0a0a0a]/90 shadow-lg shadow-black/40 transition-all duration-500 hover:shadow-[#a3e635]/30 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src="/solare.jpg"
                    alt="SOLARE — Luxury Jewelry Shopping Experience"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-sm font-medium uppercase tracking-wide text-[#a3e635] bg-[#0a0a0a]/90 px-2 py-1 rounded">
                    UI/UX
                  </div>
                </div>
                <CardHeader className="p-4 group-hover:bg-gradient-to-r group-hover:from-[#0a0a0a] group-hover:to-[#000000] transition-all duration-500">
                  <CardTitle className="font-heading text-xl font-semibold text-white group-hover:text-[#a3e635] transition-colors duration-300">
                    SOLARE — Luxury Jewelry Shopping Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-4 pt-0">
                  <CardDescription className="text-white/70">
                    SOLARE is a premium jewelry shopping app designed to bring elegance, emotion, and modern technology into one seamless experience. The goal was to create a refined, intuitive, and immersive mobile journey where users can discover handcrafted pieces, try them on virtually, and complete purchases with confidence.
                  </CardDescription>
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
                    <Button className="bg-gradient-to-r from-[#a3e635] to-[#84cc16] text-[#000000] hover:from-[#84cc16] hover:to-[#a3e635] transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg">
                      Explore the Design
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </ScrollReveal>
          </div>

          <div className="flex-shrink-0 w-[85%] sm:w-[360px] lg:w-[400px]">
            <ScrollReveal delay={0.1} duration={0.7}>
              <Card className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#a3e635]/20 bg-[#0a0a0a]/90 shadow-lg shadow-black/40 transition-all duration-500 hover:shadow-[#a3e635]/30 hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src="/superteam.png"
                    alt="Superteam Brazil — Web3 Community Platform"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

                  <div className="absolute bottom-4 left-4 text-sm font-medium uppercase tracking-wide text-[#a3e635] bg-[#0a0a0a]/90 px-2 py-1 rounded">
                    Web3 · UX/UI
                  </div>
                </div>

                {/* Title */}
                <CardHeader className="p-4 group-hover:bg-gradient-to-r group-hover:from-[#0a0a0a] group-hover:to-[#000000] transition-all duration-500">
                  <CardTitle className="font-heading text-xl font-semibold text-white group-hover:text-[#a3e635] transition-colors duration-300">
                    Superteam Brazil — Web3 Community Platform
                  </CardTitle>
                </CardHeader>

                {/* Description */}
                <CardContent className="flex-grow p-4 pt-0">
                  <CardDescription className="text-white/70 leading-relaxed">
                    A Web3 community platform built to connect builders within the Solana ecosystem. Designed a clean and structured interface to help users explore bounties, events, and opportunities with clarity and seamless navigation.
                  </CardDescription>
                </CardContent>

                {/* Footer */}
                <CardFooter className="flex justify-between items-center gap-3 p-4 pt-0">
                  <p className="text-xs text-white/60">
                    Tools: Figma · Prototyping · User Flows
                  </p>

                  <a
                    href="https://www.behance.net/gallery/244574021/Superteam-Brazil-Web3-Community-Platform-UXUI-Design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn"
                  >
                    <Button className="bg-gradient-to-r from-[#a3e635] to-[#84cc16] text-[#000000] hover:from-[#84cc16] hover:to-[#a3e635] transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg">
                      Explore the Design
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      )}
    </div>
  )
}
