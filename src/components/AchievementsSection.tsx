import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Code, Medal, Crown } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

// Achievement data
const achievements = [
  {
    title: "CodeChef 3-Star Rating",
    description: "Achieved 3-Star CodeChef rating (Rank 1687) demonstrating strong algorithmic skills and competitive programming expertise",
    year: "2024",
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    link: "https://www.codechef.com/users/shreyas707"
  },
  {
    title: "LeetCode 1600+ Rating",
    description: "Achieved 1600+ LeetCode rating with 300+ problems solved, showcasing proficiency in data structures and algorithms",
    year: "2024",
    icon: <Code className="w-10 h-10 text-blue-400" />,
    link: "https://leetcode.com/shreyas707"
  },
  {
    title: "Campus Hackathon 2nd Place",
    description: "Won 2nd place in campus hackathon for ML solution achieving 91% prediction accuracy with advanced data science techniques",
    year: "2024",
    icon: <Award className="w-10 h-10 text-purple-400" />
  },
  {
    title: "NVIDIA DLI Certification",
    description: "Completed NVIDIA Deep Learning Institute Certification in neural networks with 95% assessment score",
    year: "2024",
    icon: <Star className="w-10 h-10 text-green-400" />,
    link: "https://courses.nvidia.com/certificates",
    certificateLink: "/certificates/nividia.pdf"
  }
];

type Achievement = {
  title: string;
  description: string;
  year: string;
  icon: JSX.Element;
  link?: string;
  certificateLink?: string;
};

const AchievementsSection = forwardRef<HTMLElement>((props, ref) => {
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

  return (
    <section id="achievements" ref={mergedRef} className="section py-20 relative">
      <div className="container mx-auto px-4">
        {/* Enhanced Achievements Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Trophy className="h-8 w-8 text-yellow-500" />
            <Crown className="h-6 w-6 text-purple-500 animate-pulse" />
            <Medal className="h-8 w-8 text-amber-500" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-purple-500 to-amber-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Achievements
          </motion.h2>
          
          <motion.p
            className="text-lg text-primary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Milestones and recognition earned through dedication and excellence
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false,
              }}
              custom={index}
            >
              <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 rounded-xl p-6 pb-14 relative flex items-start transition-all duration-300 shadow-lg border border-lavender-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-1" style={{backgroundColor: '#f8f6ff'}}>
                <div className="mr-4 mt-1">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600 mb-2">{achievement.description}</p>
                </div>
                {achievement.certificateLink && (
                  <button
                    onClick={() => window.open(achievement.certificateLink!, '_blank', 'noopener')}
                    className="absolute bottom-4 right-4 inline-flex items-center justify-center px-3 py-1.5 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors text-sm font-medium"
                  >
                    View Certificate
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

AchievementsSection.displayName = "AchievementsSection";

export default AchievementsSection; 