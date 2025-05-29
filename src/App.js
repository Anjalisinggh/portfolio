import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // New state

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
    <>
      {/* Navbar */}
      <nav className="navbar fixed-top shadow-sm">
        <div className="container">
          <div className="navbar-left">Anjali Singh</div>
          
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>

          <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link ${activeSection === section ? "active" : ""}`}
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
        <h1 className="fade-in">Hi, Anjali here</h1>
        <div className="svg">
          <img src="/codesandbox.svg" alt="icon" />
          <img src="/code.svg" alt="icon" />
          <img src="/gitlab.svg" alt="icon" />
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-content">
          <div className="profile-info">
            <h2>About Me</h2>
            <p>I’m a web developer and UI/UX designer who loves clean design and cool code.</p>
          </div>
          <div className="gif-container">
            <img src="/Coding.gif" alt="Coding Animation" className="gif" />
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>Check out Museek, Vibra, EcoSnap and more.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Let’s build something awesome! 📬</p>
      </section>
    </>
  );
}

export default App;
