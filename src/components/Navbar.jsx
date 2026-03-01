import { useEffect, useState, useRef, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  const updateUnderline = useCallback(() => {
    const activeLink = linkRefs.current[activeSection];
    const nav = navRef.current;
    if (activeLink && nav) {
      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setUnderlineStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeSection, updateUnderline]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-8 z-50 flex w-full items-center justify-between px-6 py-4 md:px-10">
      {/* Logo */}
      <a
        href="#home"
        onClick={closeMobile}
        className="flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-[#a3e635]"
      >
        <ArrowUpRight className="h-5 w-5 text-[#a3e635]" />
        <span>Anjali.</span>
      </a>

      {/* Desktop Nav */}
      <nav
        ref={navRef}
        className="relative hidden items-center gap-8 md:flex"
      >
        {navLinks.map(({ id, label, href }) => (
          <a
            key={id}
            ref={(el) => (linkRefs.current[id] = el)}
            href={href}
            className={`relative text-sm font-medium transition-colors duration-300 hover:text-[#a3e635] ${
              activeSection === id ? "text-[#a3e635]" : "text-white/80"
            }`}
          >
            {label}
          </a>
        ))}
        {/* Sliding underline */}
        <span
          className="absolute -bottom-1 h-0.5 rounded-full bg-[#a3e635]"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
            transition: "left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      </nav>

      {/* Resume Button */}
      <a
        href="/Anjali_cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={closeMobile}
        className="hidden items-center gap-2 rounded-lg bg-[#a3e635] px-4 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 md:flex"
      >
        Resume
        <ArrowUpRight className="h-4 w-4" />
      </a>

      {/* Mobile Hamburger */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-[#a3e635] md:hidden"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute left-4 right-4 top-full mt-2 overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="rounded-xl border border-white/10 bg-slate-950/95 p-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ id, label, href }) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={closeMobile}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-[#a3e635] ${
                    activeSection === id ? "text-[#a3e635]" : "text-white/80"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Anjali_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="flex items-center gap-2 rounded-lg bg-[#a3e635] px-4 py-3 text-sm font-medium text-black"
              >
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
