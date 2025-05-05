
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PublicationsSection() {
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

  const publications = [
    {
      id: 1,
      title: "Digital Twins: A Big Data-Driven Approach to AIoT",
      journal: "Springer",
      year: "2024-25",
      status: "Under Review",
      abstract: "This paper explores how Digital Twin technology enhances AIoT systems using big data analytics. It highlights real-time data integration for smarter monitoring, prediction, and automation.",
      authors: ["Vijay Kaushik P", "et al."],
      keywords: ["Digital Twin", "AIoT", "Big Data"],
      link: "#" // Replace with actual link when published
    }
  ];

  return (
    <section 
      id="publications" 
      className="py-20"
      ref={sectionRef}
    >
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Publications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            My research and academic contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication) => (
            <div 
              key={publication.id}
              className={`transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <Card className="border-border/50 overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex items-center justify-center bg-primary/10 p-4 rounded-full">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl font-semibold">{publication.title}</h3>
                        <Badge variant="secondary" className="text-xs self-start sm:self-auto bg-primary/10 text-primary">
                          {publication.status}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground gap-y-2 gap-x-4">
                        <span className="flex items-center gap-1">
                          <span className="font-medium">Journal:</span> {publication.journal}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="font-medium">Year:</span> {publication.year}
                        </span>
                      </div>
                      
                      <p className="text-foreground/80 text-sm sm:text-base">
                        {publication.abstract}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Authors:</span>{" "}
                          {publication.authors.join(", ")}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {publication.keywords.map((keyword) => (
                            <Badge key={keyword} variant="outline" className="bg-card">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div 
                        className={`transition-all delay-500 duration-700 transform ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                      >
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-2"
                        >
                          {/* <span>View Publication</span> */}
                          {/* <ExternalLink className="h-4 w-4" /> */}
                        </a>
                      </div>
                    </div>
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
