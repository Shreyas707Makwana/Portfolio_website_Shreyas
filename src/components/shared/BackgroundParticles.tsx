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
      const x = Math.random() * 100; // Random position from 0 to 100%
      const y = -10; // Start slightly above the viewport
      const size = Math.random() * 3 + 3; // Random size between 3-6px
      const duration = Math.random() * 4 + 8; // Random duration between 8-12s
      
      // Create particle element
      const element = document.createElement("div");
      element.className = "absolute rounded-full opacity-80";
      element.style.backgroundColor = "#B8001F"; // Specified color
      element.style.left = `${x}%`;
      element.style.top = `${y}px`;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.animation = `fall ${duration}s linear forwards`;
      
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
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) translateX(90vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundParticles;
