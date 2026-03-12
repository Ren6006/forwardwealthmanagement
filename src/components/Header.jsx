import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const base =
  "uppercase tracking-widest text-sm text-brandDark border-b-2 border-transparent hover:border-[#A9C0C8] transition-colors";

const cls = ({ isActive }) => `${base} ${isActive ? "border-[#A9C0C8]" : ""}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const location = useLocation();
  const isAboutSection = location.pathname === "/about" || location.pathname.startsWith("/about/");

  useEffect(() => {
    function handleClickOutside(e) {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#F9F9F9] border-b border-brandDark/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-24 md:h-[135px] flex items-center justify-between">
          <NavLink to="/" className="inline-flex items-center -ml-6 md:-ml-8">
            <img src="/images/fwm_logo.png" alt="Forward Wealth Management" className="h-[60px] md:h-[84px] w-auto object-contain" />
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={cls}>Home</NavLink>
            <div className="relative" ref={aboutRef}>
              <button
                type="button"
                className={`${base} ${aboutOpen || isAboutSection ? "border-[#A9C0C8]" : ""} cursor-pointer bg-transparent border-none font-inherit`}
                onClick={() => setAboutOpen((v) => !v)}
                aria-expanded={aboutOpen}
                aria-haspopup="true"
              >
                About
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 pt-1 min-w-0 z-10 whitespace-nowrap">
                  <div className="bg-[#F9F9F9] border border-brandDark/10 shadow-md py-1">
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 text-sm uppercase tracking-widest text-brandDark hover:bg-brandDark/5 whitespace-nowrap"
                      onClick={() => setAboutOpen(false)}
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/about/our-approach"
                      className="block px-4 py-2 text-sm uppercase tracking-widest text-brandDark hover:bg-brandDark/5 whitespace-nowrap"
                      onClick={() => setAboutOpen(false)}
                    >
                      Our Approach
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/services" className={cls}>Who We Serve</NavLink>
            <NavLink to="/contact" className={cls}>Contact</NavLink>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-brandDark/20"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-brandDark text-xl">{open ? "×" : "≡"}</span>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 pt-2">
              <NavLink to="/" className={cls} onClick={() => setOpen(false)}>Home</NavLink>
              <div className="flex flex-col gap-1 pl-2 border-l-2 border-brandDark/10">
                <span className="uppercase tracking-widest text-sm text-brandDark/70">About</span>
                <NavLink to="/about" className={cls} onClick={() => setOpen(false)}>About Us</NavLink>
                <NavLink to="/about/our-approach" className={cls} onClick={() => setOpen(false)}>Our Approach</NavLink>
              </div>
              <NavLink to="/services" className={cls} onClick={() => setOpen(false)}>Who We Serve</NavLink>
              <NavLink to="/contact" className={cls} onClick={() => setOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
