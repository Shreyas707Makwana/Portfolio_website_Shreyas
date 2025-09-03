import { forwardRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code2, Zap, Trophy, Target, Rocket, Brain, Heart, User, Sparkles } from "lucide-react";
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
  
  
  const highlights = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Developer",
      description: "Fascinated by the magic of neural networks and machine learning. I love turning data into intelligent insights and building systems that can think.",
      color: "text-purple-500"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack Creator",
      description: "From sleek frontends to robust backends, I enjoy crafting complete digital experiences that users love and systems that scale beautifully.",
      color: "text-blue-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Optimization Geek",
      description: "There's something deeply satisfying about making things faster, smoother, and more efficient. Every millisecond matters in the digital world.",
      color: "text-yellow-500"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Competitive Coder",
      description: "I thrive on algorithmic challenges and love the rush of solving complex problems under pressure. Competition makes me sharper.",
      color: "text-green-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <section id="about" ref={mergedRef} className="section py-20 relative">
      <div className="container mx-auto px-4">
        {/* Enhanced About Me Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <User className="h-8 w-8 text-blue-500" />
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
            <Brain className="h-8 w-8 text-purple-500" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            About Me
          </motion.h2>
          
          <motion.p
            className="text-lg text-primary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover the passion, creativity, and innovation behind the code
          </motion.p>
        </motion.div>
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[2/1] overflow-hidden rounded-xl shadow-xl bg-primary/5 flex items-center justify-center">
              <img 
                src={profileImage} 
                alt="Shreyas Makwana" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold">Who I Am</h3>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-accent font-semibold">curious mind</span> studying Computer Science at IIIT Vadodara, 
              where every day brings new possibilities to explore. My world revolves around the beautiful chaos of 
              <span className="text-accent font-semibold"> code, algorithms, and artificial intelligence</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What drives me? The thrill of solving puzzles that others call "impossible." Whether it's teaching machines to understand human speech 
              or building applications that millions could use, I find joy in turning wild ideas into reality.
            </p>
            
            <div className="flex items-center space-x-3 mt-6">
              <BookOpen className="h-6 w-6 text-accent" />
              <div>
                <h4 className="text-lg font-semibold">Education</h4>
                <p className="text-muted-foreground">B. Tech in Computer Science @ IIIT Vadodara 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Target className="h-8 w-8 text-accent" />
            <h3 className="text-2xl font-bold text-center">What I Do</h3>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-opacity-10 transition-all duration-300"
              >
                <div className={`flex items-center space-x-3 mb-3 ${highlight.color}`}>
                  {highlight.icon}
                  <h4 className="text-lg font-semibold">{highlight.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Passion Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center bg-accent/5 rounded-xl p-8 border border-accent/20"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="h-8 w-8 text-accent" />
            <h3 className="text-2xl font-bold">My Passion</h3>
          </div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            I believe technology should be a <span className="text-accent font-semibold">force for good</span>—making life easier, 
            more connected, and more meaningful. Every algorithm I write, every system I build, and every problem I solve 
            is a small step toward a <span className="text-accent font-semibold">smarter, more efficient world</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
