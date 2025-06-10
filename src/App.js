import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // New state

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation happens only once when scrolling down
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar fixed-top shadow-sm">
        <div className="container">
          <div className="navbar-left">Anjali Singh</div>

          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>

          <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link ${
                  activeSection === section ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="section">
        <div className="content-container">
          <div className="profile">
            <img
              src="/anjali.jpg"
              alt="Anjali Singh"
              className="profile-image fade-in"
            />
          </div>

          {/* Left Content */}
          <div className="left-content">
            <div className="svg">
              <img src="/codesandbox.svg" alt="icon" />
              <img src="/code.svg" alt="icon" />
              <img src="/gitlab.svg" alt="icon" />
            </div>
            <h1 className="fade-in">Hi, Anjali here</h1>
          </div>

          {/* Profile on the Right */}
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-content">
          <div className="profile-info fade-in">
            <h2>About Me</h2>
            <p>
              Hi, I’m <strong>Anjali Singh</strong> — a web developer and UI
              designer from Mumbai, recently graduated with a BSc in IT. I love
              crafting creative, user-focused digital experiences.
            </p>
            <p>
              From developing an AR-based earring try-on app (
              <strong>Kaizen Arts</strong>) to building emotion-driven platforms
              like <strong>Museek</strong> and <strong>Vibra</strong>, I bring
              ideas to life through clean code and expressive design. I’ve also
              gained hands-on experience at{" "}
              <strong>International Business Machines (IBM) </strong> as a
              front-end intern.
            </p>
            <p>
              “Skilled in <strong>Kotlin</strong>,{" "}
              <strong>JavaScript</strong>, <strong>React</strong>,{" "}
              <strong>Android Development</strong>, and <strong>Figma</strong> —
              I’m always exploring new technologies to build meaningful and
              user-centric digital experiences.” 
            </p>
          </div>
          <div className="gif-container">
            <img src="/hello.gif" alt="Coding Animation" className="gif" />
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div>
          <div className="project-grid">
            <div className="card" data-animate="">
              <img src="/vibra.jpg" alt="Vibra" />
              <div className="card-body">
                <h5 className="card-title">Vibra (Ongoing)</h5>
                <p className="card-text">
                  A full-stack music app with anonymous messages{" "}
                </p>
                <a
                  href="https://vibra-mu.vercel.app/"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="card" data-animate="">
              <img src="/kaizen.jpg" alt="Kaizen Arts" />
              <div className="card-body">
                <h5 className="card-title">Kaizen Arts</h5>
                <p className="card-text">
                  Developed an AI-powered AR app that uses facial detection to
                  recommend earring styles based on individual features and
                  preferences.
                </p>
                <a
                  href="/kaizenArts.apk"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="card" data-animate="">
              <img src="/skyteller.png" alt="Sky Teller" />
              <div className="card-body">
                <h5 className="card-title">Sky Teller</h5>
                <p className="card-text">
                  SkyTeller, a weather forecasting web app that presents
                  real-time weather updates alongside creative, fortune-style
                  messages. Focused on delivering a clean, responsive user
                  interface with an engaging and interactive experience.
                </p>
                <a
                  href="https://sky-teller.vercel.app/"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="card" data-animate="">
              <img src="/museek.jpg" alt="Museek" />
              <div className="card-body">
                <h5 className="card-title">Museek</h5>
                <p className="card-text">
                  A modern UI music app inspired by Spotify with custom themes.
                </p>
                <a
                  href="https://museek-ten.vercel.app/"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="card" data-animate="">
              <img src="/todo.jpg" alt="ToDo" />
              <div className="card-body">
                <h5 className="card-title">ToDo</h5>
                <p className="card-text">
                  A minimal task manager with local storage support.
                </p>
                <a
                  href="https://todo-cyan-pi.vercel.app/"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="card" data-animate="">
              <img src="/safetrip.png" alt="Traffic Prom" />
              <div className="card-body">
                <h5 className="card-title">Safe Trip</h5>
                <p className="card-text">
                  SafeTrip is a React-based web app that helps users plan safer
                  travel routes by visualizing real-time crime data on an
                  interactive map. It alerts users about high-risk areas along
                  their selected path using heatmaps and location tracking.
                </p>
                <a
                  href="https://safetrip-neon.vercel.app/"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-container">
        <h2>Contact</h2>
        <p> Have a project in mind? Let's chat ✨</p>
        <div className="contact-icons">
          <a
            href="https://www.instagram.com/anjalisinggh_12/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            data-tooltip="Instagram"
          >
            <img
              src="/instagram.svg"
              alt="Insta Icon"
              className="contact-icon"
            />
          </a>

          <a
            href="https://github.com/Anjalisinggh"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="GitHub"
            className="contact-link"
          >
            <img src="/github.svg" alt="GitHub Icon" className="contact-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/anjali-singh-82bb42302/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            data-tooltip="LinkedIn"
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn Icon"
              className="contact-icon"
            />
          </a>

          <a
            href="mailto:anjalisinggh.12@gmail.com"
            className="contact-link"
            data-tooltip="Gmail"
          >
            <img
              src="/message-square.svg"
              alt="Gmail Icon"
              className="contact-icon"
            />
          </a>

          <a
            href=" https://x.com/anjalisinggh12?t=7C4F4VoZQBtreAbIsOFFYg&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            data-tooltip="Twitter"
          >
            <img
              src="/twitter.svg"
              alt="Twitter Icon"
              className="contact-icon"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
