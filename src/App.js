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
    <div className="flex items-center justify-between rounded-full bg-white/80 px-4 py-2 shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
      <div className="flex gap-4 pr-2 md:pr-0 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {["home", "about", "projects", "contact"].map(section => (
          <a
            key={section}
            href={`#${section}`}
            className={`relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary ${
              activeSection === section
                ? "text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary"
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

{/* Resume Button */}
<a
  href="/Anjali_cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed z-40 top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:bg-gray-950 dark:hover:bg-gray-800"
>
  Resume <ArrowRight className="ml-1.5 h-4 w-4" />
</a>



      {/* Home Section */}
      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center justify-center py-12 md:py-24 lg:py-32"
      >
        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
          <div className="order-2 space-y-6 text-center md:order-1 md:text-left">
            <div className="flex justify-center gap-6 md:justify-start">
             
              <Bot className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <Laptop className="h-8 w-8 text-green-500 dark:text-green-400" />
              <Code2 className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            </div>
            <h1 className="font-heading text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Hi, Anjali here
            </h1>
           
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <img
              src="/anjali.jpg"
              width={300}
              height={300}
              alt="Anjali Singh"
              className="aspect-square rounded-full object-cover shadow-xl ring-4 ring-primary/50"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 min-h-screen bg-white py-12 dark:bg-gray-800 md:py-24 lg:py-32"
      >
        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              About Me
            </h2>
            <p className="max-w-[600px] text-lg text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hi, I'm <strong>Anjali Singh</strong> — a web developer and UI
              designer from Mumbai, recently graduated with a BSc in IT. I love
              crafting creative, user-focused digital experiences.
            </p>
            <p className="max-w-[600px] text-lg text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From developing an AR-based earring try-on app (
              <strong>Kaizen Arts</strong>) to building emotion-driven platforms
              like <strong>Museek</strong> and <strong>Vibra</strong>, I bring
              ideas to life through clean code and expressive design. I've also
              gained hands-on experience at{" "}
              <strong>International Business Machines (IBM)</strong> as a
              front-end intern.
            </p>
            <p className="max-w-[600px] text-lg text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              "Skilled in <strong>Kotlin</strong>, <strong>JavaScript</strong>,{" "}
              <strong>React</strong>, <strong>Android Development</strong>, and{" "}
              <strong>Figma</strong> — I'm always exploring new technologies to
              build meaningful and user-centric digital experiences."
            </p>
          </div>
          <div className="flex justify-center">
            <video
              src="/coding.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="h-auto max-h-[450px] w-full max-w-[650px] rounded-xl object-cover shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Projects Section with Carousel */}
      <section
        id="projects"
        className="relative z-10 min-h-screen bg-gray-50 py-12 dark:bg-gray-900 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading mb-12 text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            My Work
          </h2>
          <ProjectsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 min-h-screen bg-white py-12 dark:bg-gray-800 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="font-heading mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get in Touch
          </h2>
          <p className="mb-10 text-lg text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind? Let's chat ✨
          </p>
         <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
  <a
    href="https://www.instagram.com/anjalisinggh_12/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
  >
    <Instagram className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110" />
    <span className="text-xs sm:text-sm font-medium">Instagram</span>
  </a>
  <a
    href="https://github.com/Anjalisinggh"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
  >
    <Github className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110" />
    <span className="text-xs sm:text-sm font-medium">GitHub</span>
  </a>
  <a
    href="https://www.linkedin.com/in/anjali-singh-82bb42302/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
  >
    <Linkedin className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110" />
    <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
  </a>
  <a
    href="mailto:anjalisinggh.12@gmail.com"
    className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
  >
    <Mail className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110" />
    <span className="text-xs sm:text-sm font-medium">Gmail</span>
  </a>
  <a
    href="https://x.com/anjalisinggh12?t=7C4F4VoZQBtreAbIsOFFYg&s=08"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-1 sm:gap-2 text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
  >
    <X className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform group-hover:scale-110" />
    <span className="text-xs sm:text-sm font-medium">X (Twitter)</span>
  </a>
</div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-56 w-full">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="font-heading text-xl font-semibold">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-3 p-4 pt-0">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View Project
            </Button>
          </a>
        )}
        {project.downloadLink && (
          <a href={project.downloadLink} download>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
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
        className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 md:left-4"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 md:right-4"
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
            className={`h-2 w-2 rounded-full p-0 ${
              index === selectedIndex ? "bg-primary" : "bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}