import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Code } from "lucide-react";
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
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
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