import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
          <div className="md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Vijay Kaushik P</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Web Developer & Machine Learning Engineer
            </h2>
            <p className="text-lg max-w-xl mb-8 text-foreground/80">
              I build exceptional digital experiences with modern technologies.
              Specialized in both web development and machine learning to create
              intelligent and responsive applications.
            </p>

            <div className="flex flex-col items-center">
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#about">Learn More</a>
                </Button>
              </div>

              <div className="flex space-x-5 justify-center">
                <a
                  href="https://github.com/vijay-kaushik9911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/vijay-kaushik-p-76534b280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://leetcode.com/u/vijay_kaushik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="LeetCode"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
                <a
                  href="mailto:vijaykaushik9911@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-60 h-60 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-card border-2 border-primary overflow-hidden">
                <img
                  src="/me4.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}