import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    codeLink: string;
    demoLink: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20 * -1; // Inverted for natural tilt
    const rotateY = (x - centerX) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };
  
  const isOdd = index % 2 === 0;
  
  const item = {
    hidden: { 
      opacity: 0, 
      x: isOdd ? -30 : 30,
      y: 0,
    },
    show: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-primary/10 transition-all duration-300 relative pb-16"
      variants={item}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={project.image} 
            alt={project.title}
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm opacity-90">{project.description}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-primary/5 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-primary/70 text-sm mb-4">
          {project.longDescription}
        </p>
        
      </div>

      {/* View Code button - pinned to card bottom-left */}
      <div className="absolute bottom-4 left-4">
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          <Github className="h-4 w-4 mr-2" />
          View Code
        </a>
      </div>

      {/* Live Demo button - pinned to card bottom-right when available */}
      {project.demoLink && (
        <div className="absolute bottom-4 right-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
          >
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
