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
import AnimatedBackground from "./AnimatedBackground"

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
    document.documentElement.classList.add("dark")
    document.documentElement.style.backgroundColor = "#0D0D0D"
    return () => {
      document.documentElement.classList.remove("dark")
      document.documentElement.style.backgroundColor = ""
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] font-sans text-[#EDEADE]">
      <AnimatedBackground />
{/* Navigation Bar */}
<nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-fit -translate-x-1/2">
  <div className="flex items-center justify-between">
    <div className="flex items-center rounded-full border border-[#242424] bg-[#111111]/90 px-3 py-2 shadow-2xl backdrop-blur-md">
     <div className="flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide px-2 sm:px-4">
  {["home", "about", "projects", "contact"].map((section) => (
    <a
      key={section}
      href={`#${section}`}
      className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-[#C6A667] ${
        activeSection === section
          ? "text-[#C6A667] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#C6A667]"
          : "text-[#8D8D8D]"
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
  className="fixed bottom-4 right-4 z-40 inline-flex items-center rounded-full bg-gradient-to-r from-[#C6A667] to-[#b18a49] px-4 py-2 text-base font-medium text-[#0D0D0D] shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A667]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
>
  Resume <ArrowRight className="ml-2 h-4 w-4" />
</a>





      {/* Home Section */}
      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center justify-center py-12 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#C6A667]/15 to-[#8D8D8D]/25 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-[#b58f4f]/15 to-[#333333]/25 blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-[#C6A667]/10 to-[#EDEADE]/5 blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16 relative z-10">
          <div className="order-2 space-y-6 text-center md:order-1 md:text-left animate-fade-in-up">
            <div className="flex justify-center gap-6 md:justify-center">
              
            </div>
            
            <h1 className="font-heading text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#EDEADE] via-[#C6A667] to-[#EDEADE]/60 bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
              Hi, Anjali here
            </h1>
            
            <p className="text-lg text-[#8D8D8D] animate-fade-in-up animation-delay-500">
            Blending creativity & code into unforgettable journeys ❤️‍🩹
            </p>
          </div>
          
          <div className="order-1 flex justify-center md:order-2 animate-fade-in-up animation-delay-700">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C6A667] via-[#b18a49] to-[#8D8D8D] rounded-full blur-xl opacity-75 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <img
                src="/anjali.jpg"
                width={300}
                height={300}
                alt="Anjali Singh"
                className="relative aspect-square rounded-full object-cover shadow-2xl ring-4 ring-white/20 group-hover:ring-2 group-hover:ring-white/40 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 min-h-screen bg-[#1a1a1a] py-12 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#C6A667]/15 to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-tl from-[#8D8D8D]/20 to-transparent blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-l from-[#C6A667]/10 to-transparent blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16 relative z-10">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEADE] animate-fade-in-up animation-delay-300">
              About Me
            </h2>
            <div className="space-y-4 animate-fade-in-up animation-delay-500">
              <p className="max-w-[600px] text-lg text-[#8D8D8D] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hi, I'm <strong className="text-[#C6A667]">Anjali Singh</strong>  a web developer and UI
                designer from Mumbai, recently graduated with a BSc in IT. I love
                crafting creative, user-focused digital experiences.
              </p>
              <p className="max-w-[600px] text-lg text-[#8D8D8D] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From developing an AR-based earring try-on app (
                <strong className="text-[#C6A667]">Kaizen Arts</strong>) to building emotion-driven platforms
                like <strong className="text-[#EDEADE]">Museek</strong> and <strong className="text-[#bfa25f]">Vibra</strong>, I bring
                ideas to life through clean code and expressive design. I've also
                gained hands-on experience at{" "}
                <strong className="text-[#C6A667]">International Business Machines (IBM)</strong> as a
                front-end intern.
              </p>
              <p className="max-w-[600px] text-lg text-[#8D8D8D] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                "Skilled in <strong className="text-[#EDEADE]">Kotlin</strong>, <strong className="text-[#C6A667]">JavaScript</strong>,{" "}
                <strong className="text-[#EDEADE]">React</strong>, <strong className="text-[#C6A667]">Android Development</strong>, and{" "}
                <strong className="text-[#EDEADE]">Figma </strong>  I'm always exploring new technologies to
                build meaningful and user-centric digital experiences."
              </p>
            </div>
          </div>
            <div className="flex justify-center animate-fade-in-up animation-delay-700">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C6A667] via-[#9b7b3b] to-[#EDEADE]/40 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <video
                src="/coding.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="relative h-auto max-h-[450px] w-full max-w-[650px] rounded-xl object-cover shadow-2xl ring-4 ring-white/20 group-hover:ring-8 group-hover:ring-white/40 transition-all duration-500 group-hover:scale-105"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Carousel */}
      <section
        id="projects"
        className="relative z-10 min-h-screen bg-[#1a1a1a] py-12 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-bl from-purple-500/20 to-pink-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/15 to-green-600/15 blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-8 flex items-center justify-between animate-fade-in-up">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEADE] animate-fade-in-up animation-delay-300">
              Work
            </h2>
            <div className="flex items-center rounded-full bg-[#111111]/80 px-1 py-1 text-xs shadow-sm border border-[#2a2a2a]">
              <button
                type="button"
                onClick={() => setProjectTab("development")}
                className={`flex items-center gap-1 rounded-full px-3 py-1 font-semibold transition-all duration-200 ${
                  projectTab === "development"
                    ? "bg-[#242424] text-[#C6A667] shadow-sm"
                    : "text-[#8D8D8D] hover:text-[#C6A667]"
                }`}
              >
                <span className="text-[#C6A667]">{">_"}</span>
                <span>DEV</span>
              </button>
              <button
                type="button"
                onClick={() => setProjectTab("design")}
                className={`rounded-full px-3 py-1 font-semibold transition-all duration-200 ${
                  projectTab === "design"
                    ? "bg-[#242424] text-[#EDEADE] shadow-sm"
                    : "text-[#8D8D8D] hover:text-[#EDEADE]"
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
        className="relative z-10 min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4 md:px-6 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-tl from-red-500/20 to-pink-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="text-center relative z-10 animate-fade-in-up">
          <h2 className="font-mono mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEADE] animate-fade-in-up animation-delay-300">
            Get in Touch
          </h2>
          <p className="mb-10 text-lg text-[#8D8D8D] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up animation-delay-500">
            Have a project in mind? Let's chat ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 animate-fade-in-up animation-delay-700">
            {/* Social Links */}
            <a
              href="https://www.instagram.com/anjalisinggh_12/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-[#8D8D8D] transition-all duration-300 hover:text-[#C6A667] hover:scale-110"
            >
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">Instagram</span>
            </a>
            <a
              href="https://github.com/Anjalisinggh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-[#8D8D8D] transition-all duration-300 hover:text-[#EDEADE] hover:scale-110"
            >
              <Github className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
              <span className="text-xs sm:text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-singh-82bb42302/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-[#8D8D8D] transition-all duration-300 hover:text-[#C6A667] hover:scale-110"
            >
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:anjalisinggh.12@gmail.com"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-[#8D8D8D] transition-all duration-300 hover:text-[#C6A667] hover:scale-110"
            >
              <Mail className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
              <span className="text-xs sm:text-sm font-medium">Gmail</span>
            </a>
            <a
              href="https://x.com/anjalisinggh12?t=7C4F4VoZQBtreAbIsOFFYg&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-[#8D8D8D] transition-all duration-300 hover:text-[#C6A667] hover:scale-110"
            >
              <X className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">X</span>
            </a>
            <a
              href="https://www.behance.net/anjaliisingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-[#8D8D8D] transition-all duration-300 hover:text-[#C6A667] hover:scale-110"
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
    <Card className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#111111] shadow-lg shadow-black/40 transition-all duration-500 hover:shadow-[#C6A667]/30 hover:-translate-y-1">
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
      <CardHeader className="p-4 group-hover:bg-gradient-to-r group-hover:from-[#1a1a1a] group-hover:to-[#111111] transition-all duration-500">
        <CardTitle className="font-heading text-xl font-semibold text-[#EDEADE] group-hover:text-[#C6A667] transition-colors duration-300">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <CardDescription className="text-[#8D8D8D] group-hover:text-[#EDEADE] transition-colors duration-300">
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
              className="border-[#C6A667] bg-transparent text-[#C6A667] hover:bg-[#C6A667]/10 transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg"
            >
              View Project
            </Button>
          </a>
        )}
        {project.downloadLink && (
          <a href={project.downloadLink} download className="group/btn">
            <Button className="bg-gradient-to-r from-[#C6A667] to-[#b18a49] text-[#0D0D0D] hover:from-[#E0C27B] hover:to-[#C6A667] transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg">
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
            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2a2a2a] bg-[#111111]/80 shadow-lg backdrop-blur-md hover:bg-[#1a1a1a] hover:scale-110 hover:shadow-[#C6A667]/30 transition-all duration-300 md:left-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2a2a2a] bg-[#111111]/80 shadow-lg backdrop-blur-md hover:bg-[#1a1a1a] hover:scale-110 hover:shadow-[#C6A667]/30 transition-all duration-300 md:right-4"
          >
            <ArrowRight className="h-5 w-5" />
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
                  index === selectedIndex ? "bg-[#C6A667] scale-125 shadow-md" : "bg-[#2f2f2f]"
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
          <Card className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#111111] shadow-lg shadow-black/40 transition-all duration-500 hover:shadow-[#C6A667]/30 hover:-translate-y-1">
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src="/solare.jpg"
                alt="SOLARE — Luxury Jewelry Shopping Experience"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 text-sm font-medium uppercase tracking-wide text-[#C6A667]">
                UI/UX 
              </div>
            </div>
            <CardHeader className="p-4 group-hover:bg-gradient-to-r group-hover:from-[#1a1a1a] group-hover:to-[#111111] transition-all duration-500">
              <CardTitle className="font-heading text-xl font-semibold text-[#EDEADE] group-hover:text-[#C6A667] transition-colors duration-300">
              SOLARE — Luxury Jewelry Shopping Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-4 pt-0">
              <CardDescription className="text-[#8D8D8D]">
              SOLARE is a premium jewelry shopping app designed to bring elegance, emotion, and modern technology into one seamless experience. The goal was to create a refined, intuitive, and immersive mobile journey where users can discover handcrafted pieces, try them on virtually, and complete purchases with confidence.              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center gap-3 p-4 pt-0">
              <p className="text-xs text-[#8D8D8D]">
                Tools: Figma · Prototyping · User Flows
              </p>
              <a
                href="https://www.behance.net/gallery/238298675/SOLARE-Get-the-Best-Out-of-Rest"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn"
              >
                <Button className="bg-gradient-to-r from-[#C6A667] to-[#b18a49] text-[#0D0D0D] hover:from-[#E0C27B] hover:to-[#C6A667] transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg">
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
