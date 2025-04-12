import { motion } from "framer-motion";

const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circle */}
      <motion.div
        className="absolute rounded-full bg-accent opacity-10 w-64 h-64 top-[15%] left-[-5%]"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Square */}
      <motion.div
        className="absolute w-96 h-96 bg-primary opacity-10 top-[50%] right-[-10%]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Rectangle */}
      <motion.div
        className="absolute w-48 h-48 bg-primary opacity-10 bottom-[10%] left-[20%] rounded-lg"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GeometricShapes;
