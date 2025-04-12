import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  element: HTMLDivElement;
}

const BackgroundParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const particleIdRef = useRef(0);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const createParticle = () => {
      // Generate random values for particle
      const x = Math.random() * 20; // Start from the left side (0-20%)
      const y = Math.random() * 30; // Start from the top (0-30%)
      const size = Math.random() * 3 + 3; // Random size between 3-6px
      const duration = Math.random() * 4 + 8; // Random duration between 8-12s
      
      // Create particle element
      const element = document.createElement("div");
      element.className = "absolute rounded-full opacity-60";
      element.style.backgroundColor = "#7D0A0A"; // Darker maroon color
      element.style.left = `${x}%`;
      element.style.top = `${y}%`;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.animation = `fallDiagonal ${duration}s linear forwards`;
      
      container.appendChild(element);
      
      // Store particle data
      const id = particleIdRef.current++;
      const particle: Particle = { id, x, y, size, duration, element };
      particlesRef.current.push(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (element.parentNode === container) {
          container.removeChild(element);
        }
        particlesRef.current = particlesRef.current.filter(p => p.id !== id);
      }, duration * 1000);
    };
    
    // Create initial batch of particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const interval = setInterval(createParticle, 200);
    
    return () => {
      clearInterval(interval);
      particlesRef.current.forEach(particle => {
        if (particle.element.parentNode === container) {
          container.removeChild(particle.element);
        }
      });
      particlesRef.current = [];
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="particles fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <style jsx>{`
        @keyframes fallDiagonal {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) translateX(100vw);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundParticles;
