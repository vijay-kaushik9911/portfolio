
import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { PublicationsSection } from "@/components/PublicationsSection";
import { CertificationsSection } from "@/components/CertificationsSection";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="overflow-hidden m-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <PublicationsSection />
          <EducationSection />
          <ExperienceSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
