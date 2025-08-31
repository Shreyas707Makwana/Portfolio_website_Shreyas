import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Code2, Eye, Filter } from "lucide-react";
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
    category: "AI/ML",
    color: "from-purple-500 to-pink-500",
    accentColor: "purple"
  },
  {
    title: "DocSense AI",
    description: "AI-powered RAG platform with JWT authentication processing 10MB PDFs in 6-15s with 25+ conversational memory turns achieving 92% citation accuracy.",
    longDescription: "Developed cloud-deployed RAG platform with JWT authentication processing 10MB PDFs in 6-15s with 25+ conversational memory turns across 300+ validation tests. Built RAG pipeline using sentence-transformer embeddings and pgvector achieving 92% citation accuracy with 50-120ms vector search latency. Deployed full-stack application on Vercel/Render with Supabase Auth, REST APIs, and automated CI/CD achieving 2-3s response times.",
    image: "/project-images/docsense-ai.svg",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Vector DB"],
    codeLink: "https://github.com/Shreyas707Makwana/DocSense_AI",
    demoLink: "https://ai-powered-personal-agent-platform.vercel.app",
    category: "Full-Stack",
    color: "from-blue-500 to-cyan-500",
    accentColor: "blue"
  },
  {
    title: "Sync Pad",
    description: "CRDT-based collaborative text editor supporting 50+ concurrent users with sub-150ms update latency and real-time synchronization.",
    longDescription: "Built CRDT-based collaborative editor with Yjs and Remirror supporting 50+ concurrent users with sub-150ms update latency under load testing. Engineered Django Channels with WebSockets and Redis improving synchronization efficiency by 65% and reducing reconnection delays by 45%. Containerized Django + React application with optimized caching achieving 99.9% availability and maintaining sub-200ms API response times.",
    image: "/project-images/sync-pad.svg",
    tags: ["Django", "WebSockets", "Yjs", "React"],
    codeLink: "https://github.com/Shreyas707Makwana/Sync_Pad",
    demoLink: "",
    category: "Full-Stack",
    color: "from-green-500 to-emerald-500",
    accentColor: "green"
  },
  {
    title: "Spy Camera",
    description: "Smart motion-detection system that uses live camera feed to spot movement and trigger security alerts with real-time processing.",
    longDescription: "Smart motion-detection system that uses live camera feed to spot movement and trigger security alerts with real-time processing capabilities and automated notification system.",
    image: "/project-images/spy-camera.svg",
    tags: ["HTML", "Python", "CSS"],
    codeLink: "https://github.com/Shreyas707Makwana/Spy_Camera",
    demoLink: "",
    category: "Computer Vision",
    color: "from-red-500 to-orange-500",
    accentColor: "red"
  },
  {
    title: "Omnidirectional Gaussian Splatting",
    description: "Improved ODGS with SSIM-based Adaptive Densification for higher-quality 3D reconstruction from omnidirectional images.",
    longDescription: "This project improves Omnidirectional Dynamic Gaussian Splatting (ODGS) by introducing SSIM-based Adaptive Densification. Instead of using gradients to decide where to add new Gaussians, we use SSIM (Structural Similarity Index) error maps to focus densification in blurry or missing detail areas, resulting in higher-quality 3D reconstruction with faster convergence.",
    image: "/project-images/omnidirectional-gaussian.svg",
    tags: ["Python", "PyTorch", "Computer Vision", "3D Graphics"],
    codeLink: "https://github.com/Shreyas707Makwana/OmniDirectional_Gaussian_Splatting",
    demoLink: "",
    category: "Computer Vision",
    color: "from-indigo-500 to-purple-500",
    accentColor: "indigo"
  },
  {
    title: "Auto Entry",
    description: "A fast and easy to navigate automated gate entry system with user management and access control features.",
    longDescription: "A comprehensive automated gate entry system featuring user authentication, access control, and real-time monitoring capabilities for secure facility management.",
    image: "/project-images/auto-entry.svg",
    tags: ["Node.js", "MongoDB", "HTML", "CSS"],
    codeLink: "https://github.com/Shreyas707Makwana/Auto_Entry",
    demoLink: "",
    category: "Web App",
    color: "from-yellow-500 to-amber-500",
    accentColor: "yellow"
  },
];

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
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

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));
  
  return (
    <section id="projects" ref={mergedRef} className="section py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Large decorative circles */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-xl"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Rocket className="h-8 w-8 text-accent" />
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <Code2 className="h-8 w-8 text-accent" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Project Showcase
          </motion.h2>
          
          <motion.p
            className="text-lg text-primary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore my journey through innovative solutions, cutting-edge technologies, and impactful creations
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-accent to-primary text-white shadow-lg shadow-accent/25"
                  : "bg-white/80 backdrop-blur-sm text-primary/70 hover:bg-white hover:text-primary border border-primary/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {category}
              </span>
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          key={selectedCategory}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={`${selectedCategory}-${index}`}
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
