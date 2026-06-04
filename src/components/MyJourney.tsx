"use client";

import { motion } from "framer-motion";

export default function MyJourney() {
  return (
    <section className="bg-white text-[#111] w-full py-32 md:py-48 overflow-hidden relative" id="about">
      
      {/* ── Animated Pattern Background (Salon Match) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/Gemini_Generated_Image_v16gc5v16gc5v16g.png')`,
            backgroundSize: "380px",
            backgroundRepeat: "repeat",
          }}
        />
        
        {/* Slight white gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center"
        >
          <h2 className="font-display-lg text-4xl sm:text-[48px] md:text-[64px] leading-tight mb-12 text-[#111] uppercase tracking-wide">
            My Journey
          </h2>
          
          <div className="font-casual-script text-[#555] text-3xl md:text-[40px] leading-relaxed flex flex-col gap-8 text-left md:text-center">
            <p>
              My journey started with curiosity about technology and how ideas can be transformed into real-world solutions. I am a Data Science student exploring the intersection of AI, software development, and creative problem-solving. Along the way, I have built AI-driven projects, developed modern web experiences, and worked on real client websites, helping businesses establish their digital presence.
            </p>
            <p>
              I enjoy combining data, design, and technology to create meaningful products. From experimenting with machine learning to crafting premium user experiences, every project is a step toward becoming a better builder, researcher, and innovator.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
