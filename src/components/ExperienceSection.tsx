
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const experienceData = [
    {
      id: 1,
      position: "Upcoming Intern",
      company: "Fidelity Investments",
      duration: "2025",
      location: "Bengaluru, Karnataka",
      responsibilities: [],
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-20"
      ref={sectionRef}
    >
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            My professional journey and roles
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((job, index) => (
            <div 
              key={job.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card 
                className="border-border/50 overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="border-l-4 border-primary h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.position}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-muted-foreground">
                          <span className="text-primary font-medium">{job.company}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <span className="mt-2 md:mt-0 inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {job.duration}
                      </span>
                    </div>

                    <ul className="space-y-2 list-disc list-inside text-foreground/80">
                      {job.responsibilities.map((item, idx) => (
                        <li 
                          key={idx}
                          className={`transition-all ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                          style={{ transitionDelay: `${index * 200 + idx * 100 + 200}ms` }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
