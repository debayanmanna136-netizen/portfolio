"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PHRASES = [
  "I am a Data Science Student.",
  "I am a Data Analyst.",
  "I am an AI Enthusiast.",
  "I am a Web Developer.",
  "I build AI Solutions.",
  "I build Digital Products.",
];

export default function TypewriterEffect() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    
    // Typing speed configuration
    const typeSpeed = 60; // Slightly varied typing speed
    const deleteSpeed = 30;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        timeout = setTimeout(() => {}, pauseBeforeType);
      } else {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (text === currentPhrase) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      } else {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="font-accent-script text-3xl md:text-4xl text-on-surface-variant mb-12 max-w-lg min-h-[48px] flex items-center lg:justify-start justify-center">
      <span className="text-center lg:text-left">{text}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-[2px] h-[1.1em] bg-primary ml-[4px]"
        style={{ transformOrigin: "bottom" }}
      />
    </div>
  );
}
