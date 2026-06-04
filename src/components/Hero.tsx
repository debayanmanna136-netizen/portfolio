"use client";

import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "./TypewriterEffect";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active");
          }, index * 200); // Stagger effect
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".reveal-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main id="home" className="flex-grow relative overflow-hidden">
      <div className="max-w-full mx-auto lg:h-[calc(100vh-72px)] min-h-[600px] flex flex-col-reverse lg:flex-row relative">
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center z-20 py-12 lg:py-0 h-full px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="reveal-up delay-100 max-w-xl text-center lg:text-left transition-all duration-1000 ease-out transform">
            <span className="font-label-caps text-label-caps tracking-widest text-secondary block mb-8 uppercase">
              Data Science Student
            </span>
            <span className="font-accent-script text-5xl text-primary block mb-4 -ml-2 text-opacity-90">
              Welcome,
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-8 md:text-[96px] text-[56px] leading-tight hover:-translate-y-1 transition-transform duration-500">
              I&apos;m <span className="whitespace-nowrap">Debayan Manna.</span>
            </h1>
            <TypewriterEffect />
            <div className="flex flex-col sm:flex-row gap-6 lg:justify-start justify-center group/buttons">
              <Link
                className="px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase text-center border border-primary hover:bg-surface-container-lowest hover:text-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 inline-block w-full sm:w-auto"
                href="#client-work"
                onClick={(e) => handleScrollToSection(e, "#client-work")}
              >
                Explore My Work
              </Link>
              <Link
                className="px-8 py-4 bg-transparent text-primary font-label-caps text-label-caps uppercase text-center border border-primary hover:bg-surface-container hover:border-primary hover:-translate-y-1 transition-all duration-500 inline-block w-full sm:w-auto"
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "#contact")}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        {/* Right Illustration Area */}
        <div className="w-full lg:w-1/2 h-[55vh] md:h-[60vh] lg:h-full relative z-10 flex items-center justify-center p-0 lg:p-4 overflow-hidden">
          <div className="w-full h-full relative reveal-up delay-300 scale-[1.15] lg:scale-100 mt-8 lg:mt-0">
            <Image
              alt="Monochrome illustration of Debayan Manna"
              className="w-full h-full object-contain object-center mix-blend-multiply grayscale contrast-125 brightness-110 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_60%,transparent_100%)]"
              src="/hand_drawn_editorial_ink_sketch_illustration_of_the_same_young_male_student.png"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
