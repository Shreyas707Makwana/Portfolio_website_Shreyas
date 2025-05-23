import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Drill, Database } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import SectionTitle from "./shared/SectionTitle";

// Updated skill objects with logo paths
const languages = [
  { name: "JavaScript", logo: "/skill-logos/javascript.svg" },
  { name: "TypeScript", logo: "/skill-logos/typescript.svg" },
  { name: "Python", logo: "/skill-logos/python.svg" },
  { name: "C", logo: "/skill-logos/c.svg" },
  { name: "C++", logo: "/skill-logos/cpp.svg" },
  { name: "Java", logo: "/skill-logos/java.svg" },
];

const frameworks = [
  { name: "React", logo: "/skill-logos/react.svg" },
  { name: "Node.js", logo: "/skill-logos/nodejs.svg" },
  { name: "Next.js", logo: "/skill-logos/nextjs.svg" },
  { name: "Express.js", logo: "/skill-logos/express.svg" },
  { name: "TensorFlow", logo: "/skill-logos/tensorflow.svg" },
  { name: "PyTorch", logo: "/skill-logos/pytorch.svg" },
];

const tools = [
  { name: "Git", logo: "/skill-logos/git.svg" },
  { name: "Docker", logo: "/skill-logos/docker.svg" },
  { name: "AWS", logo: "/skill-logos/aws.svg" },
];

const databases = [
  { name: "MongoDB", logo: "/skill-logos/mongodb.svg" },
  { name: "MySQL", logo: "/skill-logos/mysql.svg" },
];

type Skill = {
  name: string;
  logo: string;
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

  const renderSkillGrid = (skills: Skill[], title: string) => (
    <div>
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-5 flex flex-col items-center justify-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <motion.div
              variants={logoAnimationVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="w-16 h-16 mb-3" 
              />
            </motion.div>
            <span className="font-medium text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

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
          className="mt-12 space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {renderSkillGrid(languages, "Languages")}
          {renderSkillGrid(frameworks, "Frameworks")}
          {renderSkillGrid(tools, "Tools")}
          {renderSkillGrid(databases, "Databases")}
        </motion.div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
