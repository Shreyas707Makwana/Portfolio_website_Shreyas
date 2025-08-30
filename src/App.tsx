import React, { useRef } from "react";
import type { RefObject } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackgroundParticles from "./components/shared/BackgroundParticles";
import GeometricShapes from "./components/shared/GeometricShapes";

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const workExperienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-background text-primary min-h-screen overflow-x-hidden">
      <Header 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          workExperience: () => scrollToSection(workExperienceRef),
          projects: () => scrollToSection(projectsRef),
          skills: () => scrollToSection(skillsRef),
          achievements: () => scrollToSection(achievementsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
      
      <GeometricShapes />
      <BackgroundParticles />
      
      <main>
        <HeroSection 
          onContactClick={() => scrollToSection(contactRef)}
        />
        <AboutSection ref={aboutRef} />
        <WorkExperienceSection ref={workExperienceRef} />
        <ProjectsSection ref={projectsRef} />
        <SkillsSection ref={skillsRef} />
        <AchievementsSection ref={achievementsRef} />
        <ContactSection ref={contactRef} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
