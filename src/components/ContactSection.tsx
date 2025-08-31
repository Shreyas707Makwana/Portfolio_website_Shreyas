import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, MessageCircle, Send, Phone } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
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
    <section id="contact" ref={mergedRef} className="section py-20 relative">
      <div className="container mx-auto px-4">
        {/* Enhanced Contact Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageCircle className="h-8 w-8 text-pink-500" />
            <Send className="h-6 w-6 text-blue-500 animate-pulse" />
            <Phone className="h-8 w-8 text-green-500" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p
            className="text-lg text-primary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to collaborate? Let's build something amazing together
          </motion.p>
        </motion.div>
        
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <p className="mb-8 text-primary/80">Feel free to reach out for collaborations or just a friendly hello! or to hire me!</p>
          
          <motion.div 
            className="flex items-center justify-center mb-10"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-accent mr-3">
              <Mail className="h-6 w-6" />
            </div>
            <a href="mailto:shreyasmakwana.smh@gmail.com" className="text-primary hover:text-accent transition-colors text-lg">
              shreyasmakwana.smh@gmail.com
            </a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 justify-center"
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            {[
              { icon: <Github className="h-7 w-7" />, href: "https://github.com/Shreyas707Makwana", label: "GitHub" },
              { icon: <Linkedin className="h-7 w-7" />, href: "https://www.linkedin.com/in/shreyas-makwana-472a4a258/", label: "LinkedIn" },
              { icon: <Instagram className="h-7 w-7" />, href: "https://www.instagram.com/shreyas_._makwana?igsh=MWsxbnFjemwxNTJsdw==", label: "Instagram" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary hover:text-accent hover:bg-primary/10 transition-colors"
                aria-label={social.label}
                variants={item}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
