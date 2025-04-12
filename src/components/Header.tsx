import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: {
    about: () => void;
    projects: () => void;
    skills: () => void;
    contact: () => void;
  };
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
  
  const skills = ["AI/ML", "Design", "Development", "Coding"];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingTextIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // Changed from 3000ms to 2000ms (2 seconds)
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleNavClick = (callback: () => void) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    callback();
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300 ${isScrolled ? 'glass' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-bold flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-4xl">&lt;/&gt;</span>
          <motion.span
            key={rotatingTextIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-accent ml-1 text-3xl"
          >
            {skills[rotatingTextIndex]}
          </motion.span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { label: "About", onClick: onNavigate.about },
            { label: "Projects", onClick: onNavigate.projects },
            { label: "Skills", onClick: onNavigate.skills },
            { label: "Contact", onClick: onNavigate.contact },
          ].map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => item.onClick()}
              className="text-xl text-primary hover:text-accent transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background absolute top-full left-0 right-0 p-6 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick(onNavigate.about)} className="text-lg text-primary hover:text-accent transition-colors text-left">
                About
              </button>
              <button onClick={() => handleNavClick(onNavigate.projects)} className="text-lg text-primary hover:text-accent transition-colors text-left">
                Projects
              </button>
              <button onClick={() => handleNavClick(onNavigate.skills)} className="text-lg text-primary hover:text-accent transition-colors text-left">
                Skills
              </button>
              <button onClick={() => handleNavClick(onNavigate.contact)} className="text-lg text-primary hover:text-accent transition-colors text-left">
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
