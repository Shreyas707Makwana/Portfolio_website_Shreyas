import { forwardRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import ProjectCard from "./shared/ProjectCard";

const projects = [
  {
    title: "Speech Synthesis",
    description: "This project presents a Text-to-Speech (TTS) system capable of voice cloning with limited data. By training on only 40 to 50 recorded sentences, the model can synthesize speech that replicates the target speaker's voice with high accuracy and naturalness.",
    longDescription: "This project presents a Text-to-Speech (TTS) system capable of voice cloning with limited data. By training on only 40 to 50 recorded sentences, the model can synthesize speech that replicates the target speaker's voice with high accuracy and naturalness.",
    image: "/project-images/speech-synthesis.svg",
    tags: ["Python"],
    codeLink: "https://github.com/Shreyas707Makwana/Speech_Synthesis",
    demoLink: "",
  },
  {
    title: "Spy Camera",
    description: "Smart motion-detection system that uses live camera feed to spot movement and trigger security alerts.",
    longDescription: "Smart motion-detection system that uses live camera feed to spot movement and trigger security alerts.",
    image: "/project-images/spy-camera.svg",
    tags: ["HTML", "Python", "CSS"],
    codeLink: "https://github.com/Shreyas707Makwana/Spy_Camera",
    demoLink: "",
  },
  {
    title: "URL Shortener",
    description: "Convert long URLs into short & manageable URLs with my full stack project.",
    longDescription: "Convert long URLs into short & manageable URLs with my full stack project.",
    image: "/project-images/url-shortener.svg",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    codeLink: "https://github.com/Shreyas707Makwana/URL_Shortener",
    demoLink: "",
  },
  {
    title: "Auto Entry",
    description: "A fast and easy to navigate gate entry system.",
    longDescription: "A fast and easy to navigate gate entry system.",
    image: "/project-images/auto-entry.svg",
    tags: ["Node.js", "MongoDB", "HTML", "CSS"],
    codeLink: "https://github.com/Shreyas707Makwana/Auto_Entry",
    demoLink: "",
  },
];

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const { elementRef: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });
  
  // Merge refs
  const mergedRef = (node: HTMLElement | null) => {
    // @ts-ignore
    ref.current = node;
    // @ts-ignore
    sectionRef.current = node;
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  return (
    <section id="projects" ref={mergedRef} className="section py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Project Gallery
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
