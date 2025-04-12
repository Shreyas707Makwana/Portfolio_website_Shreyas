import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary/5 text-center">
      <div className="container mx-auto px-4">
        <motion.p 
          className="text-primary/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} Shreyas. All rights reserved.
        </motion.p>
        <motion.p 
          className="text-primary/60 text-sm mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Made with ❤️ by Shreyas
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
