import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Zap, Star, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    codeLink: string;
    demoLink: string;
    category: string;
    color: string;
    accentColor: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15 * -1;
    const rotateY = (x - centerX) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
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
      className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-all duration-500 pb-16"
      variants={item}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      }}
    >
      {/* Animated border gradient */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{ padding: '2px' }}
      >
        <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-3xl" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-60`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={isHovered ? {
              y: [-10, -30, -10],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            } : {}}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Category badge */}
      <motion.div
        className="absolute top-4 left-4 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1`}>
          <Star className="h-3 w-3" />
          {project.category}
        </span>
      </motion.div>

      {/* Image section with enhanced overlay */}
      <div className="relative h-48 overflow-hidden">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </motion.div>
        
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
        
        {/* Enhanced title section */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <motion.h3 
            className="text-xl font-bold mb-1 flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            <Zap className="h-4 w-4 text-yellow-400" />
            {project.title}
          </motion.h3>
          <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
        </motion.div>
      </div>
      
      {/* Content section */}
      <div className="relative z-10 p-4">
        {/* Enhanced tags */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 backdrop-blur-sm rounded-full text-xs font-semibold border border-white/20 text-primary hover:scale-105 transition-transform cursor-default`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.4 + tagIndex * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Description with gradient text */}
        <motion.p 
          className="text-primary/80 text-sm mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {project.longDescription}
        </motion.p>
      </div>

      {/* Enhanced action buttons */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <motion.a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
          View Code
          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </motion.a>

        {project.demoLink && (
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-xl transition-all duration-300 text-sm font-semibold shadow-lg transform hover:-translate-y-1`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
            Live Demo
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
        )}
      </div>

      {/* Hover glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
      />
    </motion.div>
  );
};

export default ProjectCard;
