import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
  isVisible: boolean;
  delay?: number;
}

const ProgressBar = ({ percentage, isVisible, delay = 0 }: ProgressBarProps) => {
  return (
    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-accent rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isVisible ? `${percentage}%` : 0 }}
        transition={{ 
          duration: 1,
          delay: delay,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default ProgressBar;
