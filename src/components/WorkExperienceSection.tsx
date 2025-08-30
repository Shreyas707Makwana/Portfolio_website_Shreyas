import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, ExternalLink } from "lucide-react";
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
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30 rounded-2xl shadow-2xl border border-blue-200/30 p-8 relative overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <motion.div
                    className="flex items-center space-x-3 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Briefcase className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl font-bold text-primary">AI Software Engineer Intern</h3>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-4 text-primary/70 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">May 2025 - July 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
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
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Key Achievements:</h4>
                  <ul className="space-y-2 text-primary/80">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Engineered FastAPI backend and Next.js frontend scaffolder enabling automated static deployments, reducing project setup time by <strong>80%</strong> and improving team productivity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Established CI/CD pipelines with Docker containerization, cutting deployment time from 20 minutes to <strong>4 minutes</strong> and achieving <strong>99.9% uptime</strong></span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Integrated Redis caching and monitoring with Prometheus/Grafana, optimizing P95 latency to <strong>1.8s</strong> and increasing system stability by <strong>25%</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-accent/5 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Skills Gained:</h4>
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
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary border border-primary/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 0.7 + (index * 0.05) }}
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
