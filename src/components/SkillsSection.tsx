import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Drill, Database } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import ProgressBar from "./shared/ProgressBar";

const languages = [
  { name: "JavaScript", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "C", percentage: 80 },
  { name: "Java", percentage: 75 },
];

const frameworks = [
  { name: "React", percentage: 90 },
  { name: "Node.js", percentage: 85 },
  { name: "TensorFlow", percentage: 75 },
  { name: "Next.js", percentage: 80 },
];

const tools = [
  { name: "Git", percentage: 90 },
  { name: "Docker", percentage: 80 },
  { name: "AWS", percentage: 70 },
];

const databases = [
  { name: "MongoDB", percentage: 90 },
  { name: "MySQL", percentage: 80 },
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
            
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-medium">{language.name}</span>
                  </div>
                  <ProgressBar percentage={language.percentage} isVisible={isVisible} delay={index * 0.1} />
                </div>
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
            
            <div className="space-y-4">
              {frameworks.map((framework, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-medium">{framework.name}</span>
                  </div>
                  <ProgressBar percentage={framework.percentage} isVisible={isVisible} delay={index * 0.1 + 0.2} />
                </div>
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
            
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-medium">{tool.name}</span>
                  </div>
                  <ProgressBar percentage={tool.percentage} isVisible={isVisible} delay={index * 0.1 + 0.4} />
                </div>
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
            
            <div className="space-y-4">
              {databases.map((db, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-medium">{db.name}</span>
                  </div>
                  <ProgressBar percentage={db.percentage} isVisible={isVisible} delay={index * 0.1 + 0.6} />
                </div>
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
