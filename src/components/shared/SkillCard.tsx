import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
}

const SkillCard = ({ title, icon }: SkillCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-4 border border-primary/10"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="text-center">
        <div className="w-12 h-12 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-3">
          {icon}
        </div>
        <h4 className="font-medium">{title}</h4>
      </div>
    </motion.div>
  );
};

export default SkillCard;
