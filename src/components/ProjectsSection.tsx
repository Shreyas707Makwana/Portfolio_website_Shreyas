import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import ProjectCard from "./shared/ProjectCard";

const projects = [
  {
    title: "Speech Synthesis",
    description: "Neural Text-to-Speech system with voice cloning capabilities achieving 4.2/5 MOS score through advanced spectrogram and prosody enhancement techniques.",
    longDescription: "Implemented Tacotron2+HiFi-GAN TTS pipeline achieving 4.2/5 MOS score through advanced spectrogram and prosody enhancement techniques. Optimized PyTorch inference with CUDA acceleration reducing synthesis latency by 45% from 2.1s to 1.15s. Created Transformer-based grapheme-to-phoneme converter with 98% accuracy.",
    image: "/project-images/speech-synthesis.svg",
    tags: ["PyTorch", "CUDA", "Streamlit"],
    codeLink: "https://github.com/Shreyas707Makwana/Speech_Synthesis",
    demoLink: "",
  },
  {
    title: "DocSense AI",
    description: "AI-powered RAG platform with JWT authentication processing 10MB PDFs in 6-15s with 25+ conversational memory turns achieving 92% citation accuracy.",
    longDescription: "Developed cloud-deployed RAG platform with JWT authentication processing 10MB PDFs in 6-15s with 25+ conversational memory turns across 300+ validation tests. Built RAG pipeline using sentence-transformer embeddings and pgvector achieving 92% citation accuracy with 50-120ms vector search latency. Deployed full-stack application on Vercel/Render with Supabase Auth, REST APIs, and automated CI/CD achieving 2-3s response times.",
    image: "/project-images/docsense-ai.svg",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Vector DB"],
    codeLink: "https://github.com/Shreyas707Makwana/DocSense_AI",
    demoLink: "https://ai-powered-personal-agent-platform.vercel.app",
  },
  {
    title: "Sync Pad",
    description: "CRDT-based collaborative text editor supporting 50+ concurrent users with sub-150ms update latency and real-time synchronization.",
    longDescription: "Built CRDT-based collaborative editor with Yjs and Remirror supporting 50+ concurrent users with sub-150ms update latency under load testing. Engineered Django Channels with WebSockets and Redis improving synchronization efficiency by 65% and reducing reconnection delays by 45%. Containerized Django + React application with optimized caching achieving 99.9% availability and maintaining sub-200ms API response times.",
    image: "/project-images/sync-pad.svg",
    tags: ["Django", "WebSockets", "Yjs", "React"],
    codeLink: "https://github.com/Shreyas707Makwana/Sync_Pad",
    demoLink: "",
  },
  {
    title: "Spy Camera",
    description: "Smart motion-detection system that uses live camera feed to spot movement and trigger security alerts with real-time processing.",
    longDescription: "Smart motion-detection system that uses live camera feed to spot movement and trigger security alerts with real-time processing capabilities and automated notification system.",
    image: "/project-images/spy-camera.svg",
    tags: ["HTML", "Python", "CSS"],
    codeLink: "https://github.com/Shreyas707Makwana/Spy_Camera",
    demoLink: "",
  },
  {
    title: "Omnidirectional Gaussian Splatting",
    description: "Improved ODGS with SSIM-based Adaptive Densification for higher-quality 3D reconstruction from omnidirectional images.",
    longDescription: "This project improves Omnidirectional Dynamic Gaussian Splatting (ODGS) by introducing SSIM-based Adaptive Densification. Instead of using gradients to decide where to add new Gaussians, we use SSIM (Structural Similarity Index) error maps to focus densification in blurry or missing detail areas, resulting in higher-quality 3D reconstruction with faster convergence.",
    image: "/project-images/omnidirectional-gaussian.svg",
    tags: ["Python", "PyTorch", "Computer Vision", "3D Graphics"],
    codeLink: "https://github.com/Shreyas707Makwana/OmniDirectional_Gaussian_Splatting",
    demoLink: "",
  },
  {
    title: "Auto Entry",
    description: "A fast and easy to navigate automated gate entry system with user management and access control features.",
    longDescription: "A comprehensive automated gate entry system featuring user authentication, access control, and real-time monitoring capabilities for secure facility management.",
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
