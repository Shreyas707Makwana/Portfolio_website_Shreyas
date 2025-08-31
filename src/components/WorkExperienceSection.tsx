import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, ExternalLink, Sparkles, Zap, Building, Target } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const WorkExperienceSection = forwardRef<HTMLElement>((props, ref) => {
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

  const handleCertificateClick = () => {
    // Open internship certificate from public/certificates in a new tab
    window.open('/certificates/Summer_internship_certificate.pdf', '_blank', 'noopener');
  };
  
  return (
    <section id="work-experience" ref={mergedRef} className="section py-20 relative">
      <div className="container mx-auto px-4">
        {/* Enhanced Work Experience Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            animate={{
              x: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Briefcase className="h-8 w-8 text-indigo-500" />
            <Building className="h-6 w-6 text-cyan-500 animate-bounce" />
            <Target className="h-8 w-8 text-emerald-500" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Work Experience
          </motion.h2>
          
          <motion.p
            className="text-lg text-primary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Professional journey and impactful contributions
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-accent/20 p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 25px 50px -12px rgba(183, 32, 85, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/15 to-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <motion.div
                    className="flex items-center space-x-3 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">AI Software Engineer Intern</h3>
                    <Sparkles className="h-5 w-5 text-accent/60 animate-pulse" />
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-4 text-primary/70 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center space-x-2 bg-accent/5 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="font-medium">May 2025 - July 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-accent/5 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="font-medium">Tilva Artsoft, On Site</span>
                    </div>
                  </motion.div>
                </div>
                
                <motion.button
                  onClick={handleCertificateClick}
                  className="inline-flex items-center justify-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Award className="h-4 w-4 mr-2" />
                  View Certificate
                  <ExternalLink className="h-3 w-3 ml-1" />
                </motion.button>
              </div>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-gradient-to-r from-accent/5 via-accent/3 to-transparent rounded-lg p-3 border-l-4 border-accent/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold text-primary">Key Achievements:</h4>
                  </div>
                  <ul className="space-y-3 text-primary/80">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent/60 rounded-full mt-1.5 mr-3 flex-shrink-0 shadow-sm"></div>
                      <span>Engineered FastAPI backend and Next.js frontend scaffolder enabling automated static deployments, reducing project setup time by <strong className="text-accent">80%</strong> and improving team productivity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent/60 rounded-full mt-1.5 mr-3 flex-shrink-0 shadow-sm"></div>
                      <span>Established CI/CD pipelines with Docker containerization, cutting deployment time from 20 minutes to <strong className="text-accent">4 minutes</strong> and achieving <strong className="text-accent">99.9% uptime</strong></span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent/60 rounded-full mt-1.5 mr-3 flex-shrink-0 shadow-sm"></div>
                      <span>Integrated Redis caching and monitoring with Prometheus/Grafana, optimizing P95 latency to <strong className="text-accent">1.8s</strong> and increasing system stability by <strong className="text-accent">25%</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-accent/3 via-transparent to-accent/5 rounded-lg p-3 border border-accent/10">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold text-primary">Skills Gained:</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Natural Language Processing (NLP)",
                      "FastAPI Backend Development", 
                      "Redis Caching",
                      "PostgreSQL Schema Design",
                      "React/TypeScript Frontend Scaffolding",
                      "Docker Containerization",
                      "GitHub Actions CI/CD",
                      "Observability and Monitoring",
                      "Automated Testing"
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-accent/20 shadow-sm hover:shadow-md hover:bg-accent/5 transition-all duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 0.7 + (index * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

WorkExperienceSection.displayName = "WorkExperienceSection";

export default WorkExperienceSection;
