import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaDocker, 
  FaGitAlt, 
  FaAws,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss,
  SiDjango,
  SiFastapi,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiStreamlit,
  SiLinux,
  SiExpress,
  SiHuggingface,
  SiLangchain
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

// Frontend
const frontend = [
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
];

// Backend
const backend = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
];

// Database
const database = [
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
];

// Machine Learning & AI
const mlAndAI = [
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Transformers", icon: SiHuggingface, color: "#FFD21E" },
  { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
];

// DevOps/Tools
const devopsTools = [
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

type Skill = {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
};

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

  const logoAnimationVariants = {
    initial: { 
      scale: 0.8,
      opacity: 0,
      rotate: -10
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const renderSkillGrid = (skills: Skill[], title: string) => {
    const IconComponent = skills[0]?.icon;
    
    return (
      <div>
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-accent/10 border border-accent/20 text-accent px-8 py-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-extrabold text-center tracking-wide uppercase">{title}</h3>
          </div>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
              key={skill.name}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all duration-300 w-28 h-28 md:w-32 md:h-32"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false,
              }}
              custom={index}
            >
              <motion.div
                variants={logoAnimationVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: false }}
                className="mb-3"
                style={{ color: skill.color }}
              >
                <SkillIcon size={56} />
              </motion.div>
                <span className="font-medium text-xs text-center mt-1">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
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
          className="mt-12 space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          {renderSkillGrid(frontend, "Frontend")}
          {renderSkillGrid(backend, "Backend")}
          {renderSkillGrid(database, "Database")}
          {renderSkillGrid(mlAndAI, "Machine Learning & AI")}
          {renderSkillGrid(devopsTools, "DevOps/Tools")}
        </motion.div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
