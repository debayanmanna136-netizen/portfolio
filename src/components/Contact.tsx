"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const GmailIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Contact() {
  return (
    <section className="bg-[#050505] text-white w-full pt-32 pb-16 md:pt-48 md:pb-12 overflow-hidden relative flex flex-col items-center" id="contact">
      
      {/* Decorative Ink Stroke / Doodle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-12 md:top-24 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="relative w-[180px] h-[45px] md:w-[220px] md:h-[60px]">
          <Image 
            src="/arrow_image.webp" 
            alt="Decorative Arrow" 
            fill 
            className="object-contain" 
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-display-lg text-[40px] sm:text-[48px] md:text-[80px] leading-tight mb-8 uppercase tracking-wider text-white">
            Let's Build Something<br/>Together
          </h2>
          <p className="font-body-lg text-[#aaa] text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto">
            Have a project idea, collaboration opportunity, or just want to connect?<br className="hidden md:block" /> Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {/* Email */}
          <motion.a 
            href="mailto:debayanmanna136@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col items-center justify-center p-6 aspect-square w-full max-w-[200px] mx-auto bg-white text-[#111] hover:bg-gray-100 transition-all duration-500 hover:-translate-y-2 rounded-full shadow-lg"
          >
            <GmailIcon size={32} className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-label-caps text-label-caps uppercase tracking-widest">Email</h3>
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/debayan-manna-322344319/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col items-center justify-center p-6 aspect-square w-full max-w-[200px] mx-auto bg-white text-[#111] hover:bg-gray-100 transition-all duration-500 hover:-translate-y-2 rounded-full shadow-lg"
          >
            <LinkedinIcon size={32} className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-label-caps text-label-caps uppercase tracking-widest">LinkedIn</h3>
          </motion.a>

          {/* Facebook */}
          <motion.a 
            href="https://www.facebook.com/debayan.manna.2025"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col items-center justify-center p-6 aspect-square w-full max-w-[200px] mx-auto bg-white text-[#111] hover:bg-gray-100 transition-all duration-500 hover:-translate-y-2 rounded-full shadow-lg"
          >
            <FacebookIcon size={32} className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-label-caps text-label-caps uppercase tracking-widest">Facebook</h3>
          </motion.a>
        </div>
      </div>

      {/* Minimal Footer embedded in Contact section */}
      <footer className="w-full mt-32 md:mt-48 pt-12 border-t border-white/10 flex flex-col items-center max-w-7xl mx-auto">
        <h4 className="font-casual-script text-4xl md:text-5xl text-white mb-6">Debayan Manna</h4>
        <p className="font-label-caps text-label-caps uppercase tracking-widest text-[#888] mb-12 text-center px-4">
          Data Science Student <span className="opacity-50 mx-2">|</span> AI Enthusiast <span className="opacity-50 mx-2">|</span> Developer
        </p>
        <div className="font-meta-sm text-meta-sm tracking-widest text-[#555] uppercase flex flex-col md:flex-row items-center gap-6">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="hidden md:inline opacity-50">-</span>
          <div className="flex gap-6">
            <a href="mailto:debayanmanna136@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/debayan-manna-322344319/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.facebook.com/debayan.manna.2025" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
