import { useState } from "react";
import { NavLink } from "react-router-dom";

const base =
  "uppercase tracking-widest text-sm text-brandDark border-b-2 border-transparent hover:border-[#A9C0C8] transition-colors";

const cls = ({ isActive }) => `${base} ${isActive ? "border-[#A9C0C8]" : ""}`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#F9F9F9] border-b border-brandDark/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-24 md:h-[135px] flex items-center justify-between">
          <NavLink to="/" className="inline-flex items-center -ml-6 md:-ml-8">
            <img src="/images/fwm_logo.png" alt="Forward Wealth Management" className="h-[60px] md:h-[84px] w-auto object-contain" />
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={cls}>Home</NavLink>
            <NavLink to="/about" className={cls}>About</NavLink>
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
              <NavLink to="/about" className={cls} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/services" className={cls} onClick={() => setOpen(false)}>Services</NavLink>
              <NavLink to="/contact" className={cls} onClick={() => setOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
