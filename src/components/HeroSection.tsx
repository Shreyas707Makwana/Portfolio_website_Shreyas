import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Linkedin } from "lucide-react";
import resumePdf from "../assets/Resume_Shreyas.pdf";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="section flex items-center justify-center relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-3/5 mb-10 md:mb-0 text-center md:text-left md:pl-10">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-2"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="inline-block">Hi <motion.span
                  animate={{ 
                    rotate: [0, 20, -10, 20, 0],
                    transformOrigin: "bottom right"
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    repeatDelay: 1
                  }}
                  className="inline-block"
                >👋</motion.span></span>
              </motion.h1>
              
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="inline-block">I'm Shreyas</span>
              </motion.h2>
              
              <motion.div 
                className="max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <p className="text-xl md:text-2xl text-primary/80">
                  Creating beautiful user experiences.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a
                href="mailto:shreyasmakwana.smh@gmail.com"
                className="transform transition-transform duration-300 hover:scale-105 bg-primary text-background px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-5 w-5" />
                <span>Email Me</span>
              </motion.a>
              
              <motion.a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105 border-2 border-primary text-primary px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FileText className="h-5 w-5" />
                <span>Resume</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/shreyas-makwana-472a4a258/"
                target="_blank" 
                rel="noopener"
                className="transform transition-transform duration-300 hover:scale-105 bg-[#0077B5] text-background px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
              <svg className="w-full h-full text-accent/10" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="50" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
