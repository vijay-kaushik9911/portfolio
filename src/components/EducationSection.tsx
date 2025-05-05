
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export function EducationSection() {
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

  const educationData = [
    {
      id: 1,
      institution: "BMS College of Engineering",
      degree: "Bachelor of Engineering",
      specialization: "Informmation Science",
      duration: "2022 - 2026",
      location: "Bengaluru, Karnataka",
    },
    {
      id: 2,
      institution: "Nandi PU College",
      degree: "Pre-University Education",
      specialization: "Science (PCM)",
      duration: "2020 - 2022",
      location: "Ballari, Karnataka",
    },
    {
      id: 3,
      institution: "Nandi School CBSE",
      degree: "High School",
      duration: "2010 - 2020",
      location: "Ballari, Karnataka",
    },
  ];

  return (
    <section 
      id="education" 
      className="py-20 bg-secondary/5"
      ref={sectionRef}
    >
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">My Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            My academic background and qualifications
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div 
            className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div 
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative transition-all duration-700 transform ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-16"
                }`}
                style={{ 
                  transitionDelay: `${index * 300}ms`,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                {/* Timeline circle - milestone marker */}

                <Card 
                  className={`border-border/50 overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 w-[80%] max-w-lg mx-auto ${
                    isVisible ? "transform-none" : "opacity-0"
                  }`}
                >
                <div 
                  className={`absolute top-6 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 ${
                    isVisible ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: `${index * 300 + 200}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  </div>
                </div>
                  <CardContent className="mt-12 p-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                        {item.duration}
                      </span>
                      <h3 className="text-xl font-semibold">{item.institution}</h3>
                      <h4 className="text-lg mb-1">{item.degree}</h4>
                      {item.specialization && (
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.specialization}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {item.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
