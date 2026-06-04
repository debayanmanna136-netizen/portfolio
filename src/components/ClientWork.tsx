"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

// Reusable animated counter component
function AnimatedCounter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: false, margin: "-100px 0px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, suffix, isInView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

const CLIENT_PROJECTS = [
  {
    title: "The Shine Hair & Beauty",
    description: "A complete digital transformation for a premium hair and beauty salon. Focused on increasing online bookings and establishing a luxury brand presence.",
    services: ["Website Design", "Frontend Development", "Mobile Optimization", "SEO Setup", "WhatsApp Integration"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/the_shine_hero_section.png",
    liveLink: "https://theshinesalon.vercel.app/",
  },
  {
    title: "Interior Zone",
    description: "A premium digital presence for a luxury interior design studio. The website captures the studio's philosophy of Quiet Luxury — where sophisticated design is whispered through materiality, light, and impeccable craftsmanship.",
    services: ["Brand Identity & Strategy", "Website Design", "Frontend Development", "CMS Integration", "Performance Optimisation"],
    technologies: ["Next.js", "Framer Motion", "Sanity CMS"],
    liveLink: "https://interiordecordemo.netlify.app/",
    image: "/interior_zone_hero_section.png",
  },
  {
    title: "Fitness Camp",
    description: "A high-energy, conversion-focused landing page for a premier fitness bootcamp. Designed to drive sign-ups while showcasing an active and vibrant brand identity.",
    services: ["Website Design", "Frontend Development", "Performance Optimization"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://fitnesscampdemo.netlify.app/",
    image: "/fitness_camp_hero_section.png",
  },
];

const CLIENT_REVIEWS = [
  {
    quote: "Debayan completely transformed our digital presence. The attention to detail and modern aesthetic perfectly captured our brand's luxury identity.",
    author: "Sujit Ojha",
    role: "Founder, The Shine Hair & Beauty",
  }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ClientWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Carousel states
  const [[page, direction], setPage] = useState([0, 0]);
  const [[reviewPage, reviewDirection], setReviewPage] = useState([0, 0]);

  // Wrap around indices
  const activeIndex = ((page % CLIENT_PROJECTS.length) + CLIENT_PROJECTS.length) % CLIENT_PROJECTS.length;
  const activeReviewIndex = ((reviewPage % CLIENT_REVIEWS.length) + CLIENT_REVIEWS.length) % CLIENT_REVIEWS.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const paginateReview = (newDirection: number) => {
    setReviewPage([reviewPage + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 10000);
    return () => clearInterval(timer);
  }, [page]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginateReview(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [reviewPage]);

  const smoothVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const project = CLIENT_PROJECTS[activeIndex];
  const review = CLIENT_REVIEWS[activeReviewIndex];

  return (
    <section id="client-work" className="bg-white text-[#111] w-full py-32 md:py-48 overflow-hidden relative" ref={containerRef}>
      
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

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10">

        {/* Intro Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display-lg text-4xl sm:text-[48px] md:text-[84px] leading-tight mb-8 text-[#111] uppercase tracking-wide whitespace-normal sm:whitespace-nowrap">
              Client Services
            </h2>
            <p className="font-body-lg text-[#555] max-w-2xl text-xl">
              A curated collection of websites and digital solutions built for real clients and businesses. Focusing on measurable results and uncompromising aesthetics.
            </p>
          </motion.div>
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-40 pt-16 border-t border-black/10">
          {[
            { value: 12, suffix: "+", label: "Client Projects Delivered" },
            { value: 15, suffix: "+", label: "Websites Designed" },
            { value: 100, suffix: "%", label: "Responsive Design" },
            { value: 3, suffix: "+", label: "Years Learning & Building" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="font-display-lg text-[56px] md:text-[72px] text-[#111] leading-none mb-4">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-label-caps text-label-caps text-[#666] uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Carousel Container */}
        <div className="relative w-full flex flex-col pt-16 border-t border-black/10">
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-12">
            <div className="font-label-caps text-label-caps text-[#111] uppercase tracking-widest">
              Selected Works
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-colors"
                aria-label="Previous project"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-colors"
                aria-label="Next project"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Swipeable Project Area */}
          <div className="w-full relative overflow-hidden pb-12 grid grid-cols-1 grid-rows-1 items-start">
            
            {/* Hidden dummy elements for ALL projects to enforce max height across any viewport */}
            {CLIENT_PROJECTS.map((dummyProject, i) => (
              <div key={`dummy-${i}`} className="col-start-1 row-start-1 w-full flex flex-col gap-24 items-start invisible pointer-events-none" aria-hidden="true">
                <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                  <div className="w-full lg:w-1/2 flex items-start border border-black/10 bg-gray-50 overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={dummyProject.image} alt="dummy" className="w-full h-auto select-none" />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col justify-center select-none pt-4 lg:pt-0">
                    <h3 className="font-display-lg text-[40px] md:text-[56px] leading-tight mb-6">{dummyProject.title}</h3>
                    <p className="font-body-lg mb-12 text-lg md:text-xl">{dummyProject.description}</p>
                    <div className="mb-12">
                      <h4 className="font-label-caps text-label-caps uppercase tracking-widest mb-4 border-b border-black/10 pb-4">Services</h4>
                      <ul className="flex flex-col gap-3">
                        {dummyProject.services.map((service) => (
                          <li key={service} className="font-body-md flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-black opacity-20"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-12">
                      <h4 className="font-label-caps text-label-caps uppercase tracking-widest mb-4 border-b border-black/10 pb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {dummyProject.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-2 border border-black/20 font-label-caps text-label-caps uppercase tracking-widest">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-3 font-label-caps text-label-caps uppercase tracking-widest">
                        Visit Website <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                key={page}
                custom={direction}
                variants={smoothVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.8 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="col-start-1 row-start-1 w-full flex flex-col gap-24 items-start cursor-grab active:cursor-grabbing"
              >
                {/* Top Section: Image and Content side-by-side */}
                <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                  
                  {/* Image Area */}
                  <div className="w-full lg:w-1/2 flex items-start border border-black/10 bg-gray-50 overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto select-none pointer-events-none mix-blend-multiply"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center select-none pt-4 lg:pt-0">
                    <h3 className="font-display-lg text-[40px] md:text-[56px] text-[#111] leading-tight mb-6">
                      {project.title}
                    </h3>
                    <p className="font-body-lg text-[#555] mb-12 text-lg md:text-xl">
                      {project.description}
                    </p>

                    <div className="mb-12">
                      <h4 className="font-label-caps text-label-caps text-[#111] uppercase tracking-widest mb-4 border-b border-black/10 pb-4">
                        Services
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {project.services.map((service) => (
                          <li key={service} className="font-body-md text-[#555] flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-black opacity-20"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-12">
                      <h4 className="font-label-caps text-label-caps text-[#111] uppercase tracking-widest mb-4 border-b border-black/10 pb-4">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-2 border border-black/20 text-[#555] font-label-caps text-label-caps uppercase tracking-widest">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 font-label-caps text-label-caps uppercase tracking-widest text-[#111] hover:text-[#555] transition-colors"
                        onPointerDownCapture={(e) => e.stopPropagation()} 
                      >
                        Visit Website <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Client Feedback Carousel */}
        <div className="w-full pt-32 pb-8 border-t border-black/10 mt-16 relative">
          
          <div className="flex justify-between items-center mb-16">
            <h3 className="font-label-caps text-label-caps text-[#666] uppercase tracking-widest">
              Client Feedback
            </h3>
            <div className="flex gap-4">
              {CLIENT_REVIEWS.length > 1 && (
                <>
                  <button 
                    onClick={() => paginateReview(-1)}
                    className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-colors"
                    aria-label="Previous review"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button 
                    onClick={() => paginateReview(1)}
                    className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-colors"
                    aria-label="Next review"
                  >
                    <ArrowRight size={16} />
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="w-full relative overflow-hidden grid grid-cols-1 grid-rows-1 items-start">
            
            {/* Hidden dummy elements for ALL reviews to enforce max height */}
            {CLIENT_REVIEWS.map((dummyReview, i) => (
              <div key={`dummy-review-${i}`} className="col-start-1 row-start-1 w-full max-w-4xl mx-auto text-center invisible pointer-events-none" aria-hidden="true">
                <p className="font-display-lg text-2xl md:text-[40px] leading-relaxed mb-10 italic opacity-90 select-none">
                  "{dummyReview.quote}"
                </p>
                <div className="font-label-caps text-label-caps uppercase tracking-widest select-none">
                  <span className="block mb-2">{dummyReview.author}</span>
                  {dummyReview.role}
                </div>
              </div>
            ))}

            <AnimatePresence initial={false} custom={reviewDirection}>
              <motion.div
                key={reviewPage}
                custom={reviewDirection}
                variants={smoothVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.8 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginateReview(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginateReview(-1);
                  }
                }}
                className="col-start-1 row-start-1 w-full max-w-4xl mx-auto text-center cursor-grab active:cursor-grabbing"
              >
                <p className="font-display-lg text-2xl md:text-[40px] text-[#111] leading-relaxed mb-10 italic opacity-90 select-none">
                  "{review.quote}"
                </p>
                <div className="font-label-caps text-label-caps uppercase tracking-widest text-[#555] select-none">
                  <span className="text-[#111] block mb-2">{review.author}</span>
                  {review.role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* About My Journey Section */}
        <div id="journey" className="w-full pt-32 pb-16 mt-16 border-t border-black/10 relative flex flex-col items-center">
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
            
            <div className="font-body-lg text-[#555] text-lg md:text-2xl leading-relaxed flex flex-col gap-8 text-left md:text-center">
              <p>
                My journey started with curiosity about technology and how ideas can be transformed into real-world solutions. I am a Data Science student exploring the intersection of AI, software development, and creative problem-solving. Along the way, I have built AI-driven projects, developed modern web experiences, and worked on real client websites, helping businesses establish their digital presence.
              </p>
              <p>
                I enjoy combining data, design, and technology to create meaningful products. From experimenting with machine learning to crafting premium user experiences, every project is a step toward becoming a better builder, researcher, and innovator.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
