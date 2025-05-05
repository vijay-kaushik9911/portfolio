
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "AssignFlow",
      description : "A streamlined task management platform that enables team leads to assign, track, and manage tasks while allowing employees to view and complete their assigned responsibilities in an organized workflow.",
      image: "",
      tags: ["Next.js", "FireBase", "Tailwind CSS"],
      githubLink: "https://github.com/vijay-kaushik9911/ems",
      liveLink: "#",
    },
    
    {
      id: 2,
      title: "FemFlare - PCOD Detection",
      description: "A machine learning-powered web application for early detection of PCOD using clinical and diagnostic data. Designed to assist healthcare professionals in providing faster, data-driven insights.",
      image: "/pcod.png",
      tags: ["Python", "Scikit-learn", "Flask"],
      githubLink: "https://github.com/vijay-kaushik9911/PCOD_Detection",
      liveLink: "#"
    },
      
    {
      id: 3,
      title: "FactPulse",
      description: "A simple platform to discover and share interesting facts. Users can explore topics or contribute their own.",
      image: "/fact.png",
      tags: ["React.js", "SupaBase", "Chart.js"],
      githubLink: "https://github.com/yourusername/finance-tracker",
      liveLink: "https://factpulse1.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/5" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Here are some of my recent projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="overflow-hidden h-full border-border/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
