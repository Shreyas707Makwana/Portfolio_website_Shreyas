import { forwardRef } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import profileImage from "../assets/profile-image.jpg";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
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
    <section id="about" ref={mergedRef} className="section py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[2/1] overflow-hidden rounded-xl shadow-xl bg-primary/5 flex items-center justify-center">
              <img 
                src={profileImage} 
                alt="Shreyas Makwana" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Computer Science engineering student with expertise in AI/ML and full-stack development. I've constructed production-ready RAG systems delivering 92% citation precision and scalable applications handling 50+ concurrent users. Developed neural text-to-speech systems with 4.2/5 MOS scores and document analysis models with 82.6% mAP performance. Proficient in various DevOps tools and software testing services with strong foundation in modern web technologies.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <BookOpen className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="ml-9">B. Tech in Computer Science @ IIIT Vadodara 2026</p>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
