import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Drill, Database } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

// Updated skill objects with logo paths
const languages = [
  { name: "JavaScript", logo: "/skill-logos/js.svg" },
  { name: "Python", logo: "/skill-logos/python.svg" },
  { name: "C", logo: "/skill-logos/c.svg" },
  { name: "Java", logo: "/skill-logos/java.svg" },
];

const frameworks = [
  { name: "React", logo: "/skill-logos/react.svg" },
  { name: "Node.js", logo: "/skill-logos/nodejs.svg" },
  { name: "TensorFlow", logo: "/skill-logos/tensorflow.svg" },
  { name: "Next.js", logo: "/skill-logos/nextjs.svg" },
];

const tools = [
  { name: "Git", logo: "/skill-logos/git.svg" },
  { name: "Docker", logo: "/skill-logos/docker.svg" },
  { name: "AWS", logo: "/skill-logos/aws.svg" },
];

const databases = [
  { name: "MongoDB", logo: "/skill-logos/mongodb.svg" },
  { name: "MySQL", logo: "/skill-logos/mysql.svg" },
];

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
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
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <section id="skills" ref={mergedRef} className="section py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          My Stack
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {/* Languages */}
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-xl shadow-lg border border-primary/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                <Code className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {languages.map((language, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mb-2 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <img 
                      src={language.logo} 
                      alt={language.name} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{language.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Frameworks */}
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-xl shadow-lg border border-primary/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                <Monitor className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Frameworks</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {frameworks.map((framework, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <div className="w-16 h-16 mb-2 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <img 
                      src={framework.logo} 
                      alt={framework.name} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{framework.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-xl shadow-lg border border-primary/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                <Drill className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <div className="w-16 h-16 mb-2 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <img 
                      src={tool.logo} 
                      alt={tool.name} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Databases */}
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-xl shadow-lg border border-primary/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                <Database className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Databases</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {databases.map((db, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                >
                  <div className="w-16 h-16 mb-2 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <img 
                      src={db.logo} 
                      alt={db.name} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{db.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
