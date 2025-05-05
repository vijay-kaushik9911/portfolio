import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="about" className="py-20 bg-secondary/5" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Here's a brief introduction about my background and what I do.
          </p>
        </div>

        <Card 
          className={`border-border/50 bg-card/50 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div 
                className={`space-y-4 transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h3 className="text-xl font-semibold">Who I am</h3>
                <p className="text-foreground/80">
                  I'm a curious and driven developer who enjoys turning ideas into real, working solutions. Whether it's a web app, a smart feature powered by machine learning, or a small automation script, I enjoy the challenge of building things that are both useful and meaningful.
                </p>
                <p className="text-foreground/80">
                  I believe in continuous learning and love exploring the intersection of different technologies. For me, it's not just about writing code — it's about solving problems, improving experiences, and making an impact through thoughtful design and innovation.
                </p>
                <p className="text-foreground/80">
                  Outside of work, I'm always experimenting with new tools, reading up on emerging tech, or just enjoying creative hobbies that keep me inspired and motivated.
                </p>

              </div>

              <div 
                className={`space-y-6 transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium min-w-[120px]">Name:</span>
                      <span className="text-foreground/80">Vijay Kaushik P</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium min-w-[120px]">Email:</span>
                      <a 
                        href="mailto:vijaykaushik9911@gmail.com"
                        className="text-primary hover:underline"
                      >
                        vijaykaushik9911@gmail.com
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium min-w-[120px]">Location:</span>
                      <span className="text-foreground/80">Bengaluru, Karnataka - India</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="font-medium min-w-[120px]">Interests:</span>
                      <span className="text-foreground/80">
                        Web Development, Machine Learning, Data Visualization, Problem Solving
                      </span>
                    </li>
                  </ul>
                </div>

                <div 
                  className={`transition-all duration-700 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <h3 className="text-xl font-semibold mb-4">Find Me On</h3>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://github.com/vijay-kaushik9911"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-card hover:bg-primary/10 border border-border rounded-md transition-colors flex items-center gap-2 text-sm"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/vijay-kaushik-p-76534b280/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-card hover:bg-primary/10 border border-border rounded-md transition-colors flex items-center gap-2 text-sm"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://leetcode.com/u/vijay_kaushik/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-card hover:bg-primary/10 border border-border rounded-md transition-colors flex items-center gap-2 text-sm"
                    >
                      LeetCode
                    </a>
                    <a 
                      href="mailto:vijaykaushik9911@gmail.com"
                      className="px-4 py-2 bg-card hover:bg-primary/10 border border-border rounded-md transition-colors flex items-center gap-2 text-sm"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
