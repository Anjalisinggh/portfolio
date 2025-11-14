"use client"
import { useEffect, useState, useCallback } from "react"


import {
 
  Bot,
  Laptop,
  Code2,
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

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      {/* Particle Background Placeholder */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-950" />
      </div>
{/* Navigation Bar */}
<nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-fit -translate-x-1/2">
  <div className="flex items-center justify-between">
    <div className="flex items-center rounded-full bg-white/80 px-3 py-2 shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
     <div className="flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide px-2 sm:px-4">
  {["home", "about", "projects", "contact"].map((section) => (
    <a
      key={section}
      href={`#${section}`}
      className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary ${
        activeSection === section
          ? "text-blue-600 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-blue-600"
          : "text-muted-foreground"
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
  className="fixed bottom-4 right-4 z-40 inline-flex items-center rounded-full bg-black px-4 py-2 text-base font-medium text-white shadow-lg transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:bg-gray-950 dark:hover:bg-gray-800"
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
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-600/10 blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16 relative z-10">
          <div className="order-2 space-y-6 text-center md:order-1 md:text-left animate-fade-in-up">
            <div className="flex justify-center gap-6 md:justify-center">
              <div className="group relative">
                <Bot className="h-8 w-8 text-blue-500 dark:text-blue-400 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-400 group-hover:drop-shadow-lg cursor-pointer" />
                <div className="absolute -top-2 -right-2 h-3 w-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                 Designing
                </div>
              </div>
              
              <div className="group relative">
                <Laptop className="h-8 w-8 text-green-500 dark:text-green-400 transition-all duration-300 group-hover:scale-125 group-hover:text-green-400 group-hover:drop-shadow-lg cursor-pointer" />
                <div className="absolute -top-2 -right-2 h-3 w-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  Development
                </div>
              </div>
              
              <div className="group relative">
                <Code2 className="h-8 w-8 text-purple-500 dark:text-purple-400 transition-all duration-300 group-hover:scale-125 group-hover:text-purple-400 group-hover:drop-shadow-lg cursor-pointer" />
                <div className="absolute -top-2 -right-2 h-3 w-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  Coding
                </div>
              </div>
            </div>
            
            <h1 className="font-heading text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
              Hi, Anjali here
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-500">
            Blending creativity & code into unforgettable journeys ❤️‍🩹
            </p>
          </div>
          
          <div className="order-1 flex justify-center md:order-2 animate-fade-in-up animation-delay-700">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <img
                src="/anjali.jpg"
                width={300}
                height={300}
                alt="Anjali Singh"
                className="relative aspect-square rounded-full object-cover shadow-2xl ring-4 ring-white/20 group-hover:ring-8 group-hover:ring-white/40 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 min-h-screen bg-white py-12 dark:bg-gray-800 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-green-400/20 to-blue-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-tl from-purple-400/20 to-pink-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-l from-yellow-400/15 to-orange-600/15 blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16 relative z-10">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-green-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
              About Me
            </h2>
            <div className="space-y-4 animate-fade-in-up animation-delay-500">
              <p className="max-w-[600px] text-lg text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hi, I'm <strong className="text-green-600 dark:text-green-400">Anjali Singh</strong> — a web developer and UI
                designer from Mumbai, recently graduated with a BSc in IT. I love
                crafting creative, user-focused digital experiences.
              </p>
              <p className="max-w-[600px] text-lg text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From developing an AR-based earring try-on app (
                <strong className="text-blue-600 dark:text-blue-400">Kaizen Arts</strong>) to building emotion-driven platforms
                like <strong className="text-purple-600 dark:text-purple-400">Museek</strong> and <strong className="text-pink-600 dark:text-pink-400">Vibra</strong>, I bring
                ideas to life through clean code and expressive design. I've also
                gained hands-on experience at{" "}
                <strong className="text-orange-600 dark:text-orange-400">International Business Machines (IBM)</strong> as a
                front-end intern.
              </p>
              <p className="max-w-[600px] text-lg text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                "Skilled in <strong className="text-red-600 dark:text-red-400">Kotlin</strong>, <strong className="text-indigo-600 dark:text-indigo-400">JavaScript</strong>,{" "}
                <strong className="text-cyan-600 dark:text-cyan-400">React</strong>, <strong className="text-emerald-600 dark:text-emerald-400">Android Development</strong>, and{" "}
                <strong className="text-violet-600 dark:text-violet-400">Figma</strong> — I'm always exploring new technologies to
                build meaningful and user-centric digital experiences."
              </p>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-up animation-delay-700">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
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
        className="relative z-10 min-h-screen bg-gray-50 py-12 dark:bg-gray-900 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-bl from-purple-400/20 to-pink-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-blue-400/15 to-green-600/15 blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="font-heading mb-12 text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
            My Work
          </h2>
          <div className="animate-fade-in-up animation-delay-300">
            <ProjectsCarousel />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 px-4 md:px-6 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-tl from-red-400/20 to-pink-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="text-center relative z-10 animate-fade-in-up">
          <h2 className="font-heading mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
            Get in Touch
          </h2>
          <p className="mb-10 text-lg text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up animation-delay-500">
            Have a project in mind? Let's chat ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 animate-fade-in-up animation-delay-700">
            {/* Social Links */}
            <a
              href="https://www.instagram.com/anjalisinggh_12/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-all duration-300 hover:text-pink-500 hover:scale-110 dark:text-gray-400 dark:hover:text-pink-400"
            >
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">Instagram</span>
            </a>
            <a
              href="https://github.com/Anjalisinggh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:scale-110 dark:text-gray-400 dark:hover:text-white"
            >
              <Github className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
              <span className="text-xs sm:text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anjali-singh-82bb42302/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-all duration-300 hover:text-blue-600 hover:scale-110 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:anjalisinggh.12@gmail.com"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-all duration-300 hover:text-red-500 hover:scale-110 dark:text-gray-400 dark:hover:text-red-400"
            >
              <Mail className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
              <span className="text-xs sm:text-sm font-medium">Gmail</span>
            </a>
            <a
              href="https://x.com/anjalisinggh12?t=7C4F4VoZQBtreAbIsOFFYg&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-all duration-300 hover:text-blue-400 hover:scale-110 dark:text-gray-400 dark:hover:text-blue-300"
            >
              <X className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs sm:text-sm font-medium">X</span>
            </a>
            <a
              href="https://www.behance.net/anjaliisingh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-all duration-300 hover:text-[#1769ff] hover:scale-110 dark:text-gray-400 dark:hover:text-[#1769ff]"
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
    <Card className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
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
      <CardHeader className="p-4 group-hover:bg-gradient-to-r group-hover:from-gray-50 group-hover:to-gray-100 dark:group-hover:from-gray-800 dark:group-hover:to-gray-700 transition-all duration-500">
        <CardTitle className="font-heading text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <CardDescription className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
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
              className="border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg"
            >
              View Project
            </Button>
          </a>
        )}
        {project.downloadLink && (
          <a href={project.downloadLink} download className="group/btn">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-lg">
              Download
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  )
}

function ProjectsCarousel() {
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
        className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md backdrop-blur-sm hover:bg-white hover:scale-110 hover:shadow-lg dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-all duration-300 md:left-4"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md backdrop-blur-sm hover:bg-white hover:scale-110 hover:shadow-lg dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-all duration-300 md:right-4"
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
              index === selectedIndex ? "bg-primary scale-125 shadow-md" : "bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
