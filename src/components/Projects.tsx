"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ProjectCard from "./ProjectCard";

const PLACEHOLDER_PROJECTS = [
  {
    title: "Console Chatbot",
    description: "A Python-based conversational chatbot built for the terminal environment. The project explores basic natural language interaction, command-based conversations, and chatbot logic implementation.",
    tags: ["Python", "NLP concepts", "Logic handling"],
    githubLink: "https://github.com/debayanmanna136-netizen/console-chatbot-python",
  },
  {
    title: "Student Record System",
    description: "A student management application designed to store, manage, and retrieve student information efficiently. This project focuses on data handling, CRUD operations, and structured programming concepts.",
    tags: ["Python", "Data Management", "CRUD Operations"],
    githubLink: "https://github.com/debayanmanna136-netizen/student-record-system",
  },
  {
    title: "Movie Recommendation System",
    description: "A recommendation system that suggests movies based on user preferences and similarity-based approaches. This project explores data processing and recommendation algorithms.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    githubLink: "https://github.com/debayanmanna136-netizen/Movie_recommendation_system",
  },
  {
    title: "Weather Bot",
    description: "A Python-based weather assistant that provides weather information through an interactive bot interface. The project integrates APIs and user interaction logic.",
    tags: ["Python", "APIs", "Automation"],
    githubLink: "https://github.com/debayanmanna136-netizen/weather_bot_python",
  },
];

export default function Projects() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const isVideoInView = useInView(containerRef, { amount: 0.3, once: false });

  const [videoEnded, setVideoEnded] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [dragConstraint, setDragConstraint] = useState(0);
  const [galleryPadding, setGalleryPadding] = useState("5vw");

  useEffect(() => {
    if (isVideoInView) {
      if (!videoEnded && videoRef.current) {
        videoRef.current.playbackRate = 2.0;
        videoRef.current.play().catch((e) => console.log("Video autoplay blocked:", e));
      } else if (videoEnded) {
        const t1 = setTimeout(() => setShowTitle(true), 400);
        const t2 = setTimeout(() => setShowGallery(true), 1000);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
    } else {
      if (!videoEnded && videoRef.current) {
        videoRef.current.pause();
      }
      setShowTitle(false);
      setShowGallery(false);
    }
  }, [isVideoInView, videoEnded]);

  useEffect(() => {
    // Calculate drag constraints when gallery becomes visible
    if (showGallery && carouselRef.current) {
      const updateConstraints = () => {
        if (carouselRef.current) {
          setDragConstraint(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
      };
      updateConstraints();
      window.addEventListener("resize", updateConstraints);
      return () => window.removeEventListener("resize", updateConstraints);
    }
  }, [showGallery]);

  useEffect(() => {
    const updatePadding = () => {
      if (titleRef.current) {
        const left = titleRef.current.getBoundingClientRect().left;
        const mobileFallback = window.innerWidth < 768 ? 20 : 0;
        setGalleryPadding(`${Math.max(left, mobileFallback)}px`);
      }
    };
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // Re-measure once the title becomes visible so padding aligns with the heading
  useEffect(() => {
    if (showTitle && titleRef.current) {
      requestAnimationFrame(() => {
        if (titleRef.current) {
          const left = titleRef.current.getBoundingClientRect().left;
          const mobileFallback = window.innerWidth < 768 ? 20 : 0;
          setGalleryPadding(`${Math.max(left, mobileFallback)}px`);
        }
      });
    }
  }, [showTitle]);



  return (
    <section id="projects" ref={containerRef} className="relative bg-[#050505] w-full min-h-screen overflow-hidden">
      <div className="grid">

        {/* The actual projects content (Z-10) */}
        <div className="col-start-1 row-start-1 z-10 pt-32 pb-40 w-full max-w-[100vw] overflow-hidden flex flex-col justify-center min-h-screen">
          <div className="w-full flex mb-16 relative">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop">
              <motion.div
                ref={titleRef}
                className="max-w-xl w-full text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : 20 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-display-lg text-white text-4xl sm:text-[56px] md:text-[84px] leading-tight mb-4 whitespace-normal sm:whitespace-nowrap">
                  Academic Projects
                </h2>
                <p className="font-body-lg text-[#888] max-w-2xl">
                  A curated exhibition of systems, algorithms, and digital experiences bridging the gap between raw data and human understanding.
                </p>
              </motion.div>
            </div>

            {/* Optional visible navigation hints on the right half */}
            <div className="hidden lg:flex w-1/2 justify-end items-end px-margin-desktop">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showGallery ? 1 : 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="flex gap-4 pb-4"
              >
                <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#888] cursor-not-allowed">
                  <ArrowLeft size={20} />
                </div>
                <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Horizontal Gallery Wrapper */}
          <div
            className="gallery-scroll w-full overflow-x-auto pb-12 pt-4 -mt-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            <style>{`
              .gallery-scroll::-webkit-scrollbar { display: none; }
            `}</style>
            <motion.div
              className="flex gap-8 md:gap-12 pr-[5vw] md:pr-[2rem] w-max"
              style={{ paddingLeft: galleryPadding }}
              initial="hidden"
              animate={showGallery ? "visible" : "hidden"}
            >
              {PLACEHOLDER_PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Video Overlay (Z-50) */}
        <div
          className={`col-start-1 row-start-1 sticky top-0 h-screen w-full z-50 pointer-events-none transition-opacity duration-[1500ms] ease-out ${videoEnded ? "opacity-0" : "opacity-100"
            }`}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/102584-660588476.mp4"
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
          />
        </div>

      </div>
    </section>
  );
}
