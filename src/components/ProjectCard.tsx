"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  liveLink,
  githubLink,
  index,
}: ProjectCardProps) {
  // Cinematic slide-in animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white border border-[#e2e2e2] rounded-[32px] w-[360px] h-[520px] p-7 flex flex-col justify-between shrink-0 hover:-translate-y-2 transition-transform duration-500 ease-out"
    >
      <div className="flex flex-col overflow-hidden">
        <h3 className="font-headline-md text-headline-md font-normal text-black mb-3 group-hover:text-surface-tint transition-colors">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-[#4c4546] mb-5 leading-relaxed line-clamp-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-[#e2e2e2] rounded-full font-label-caps text-label-caps text-black uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 pt-5 border-t border-[#f3f3f3] mt-5 shrink-0">
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-black hover:opacity-60 transition-colors"
          >
            View Project <ArrowUpRight size={16} />
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-[#5e5e5e] hover:text-black transition-colors"
          >
            <Code size={16} /> View Source
          </Link>
        )}
      </div>
    </motion.div>
  );
}
