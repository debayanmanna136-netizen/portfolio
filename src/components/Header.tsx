"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CLIENT WORK", href: "#client-work" },
  { name: "JOURNEY", href: "#journey" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Handle body scroll locking
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle scroll logic for active sections and hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Active section logic
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Trigger if the top of the section is within 250px from top of viewport
          if (rect.top <= 250) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);

      // Hide/Show navbar logic
      if (isMobileMenuOpen) {
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY < 100) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
      } else {
        const diff = currentScrollY - lastScrollY.current;
        if (diff > 40) {
          setIsVisible(false);
          lastScrollY.current = currentScrollY;
        } else if (diff < -40) {
          setIsVisible(true);
          lastScrollY.current = currentScrollY;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check after a slight delay to ensure elements are rendered
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : "-100%" 
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full top-0 sticky bg-primary border-b border-primary z-50"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-[80px] relative z-50 bg-primary">
        <Link
          className="font-headline-md text-headline-md tracking-wide text-on-primary hover:opacity-80 transition-opacity z-50 relative"
          href="#home"
          onClick={(e) => handleScrollToSection(e, "#home")}
        >
          Debayan Manna
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`group relative font-body-md text-body-md uppercase tracking-widest transition-colors duration-300 py-2 ${
                  isActive ? "text-on-primary" : "text-on-primary/70 hover:text-on-primary"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute left-0 bottom-0 w-full h-[1px] bg-on-primary transform transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col gap-[6px] p-2 hover:opacity-70 transition-opacity z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`w-6 h-[1px] bg-on-primary block transition-transform duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}></span>
          <span className={`w-6 h-[1px] bg-on-primary block transition-transform duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center md:hidden pt-[80px]"
          >
            <nav className="flex flex-col items-center justify-center gap-8 w-full px-6 h-full pb-[80px]">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    className={`text-2xl font-display-lg uppercase tracking-widest transition-colors w-full text-center py-4 ${
                      isActive ? "text-on-primary" : "text-on-primary/60 hover:text-on-primary"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
