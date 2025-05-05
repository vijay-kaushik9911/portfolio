
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Upload, BadgeCheck } from "lucide-react";
import { toast } from "sonner";

interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  imageUrl: string;
  link?: string;
}

export function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: "1",
      title: "Full Stack Development",
      organization: "Udemy",
      date: "2025",
      imageUrl: "/webdev.png",
      link: "https://www.udemy.com/certificate/UC-98dbdf22-18ef-4783-9824-479f9681d8be/"
    },
    {
      id: "2",
      title: "Supervised ML",
      organization: "Coursera",
      date: "2025",
      imageUrl: "/ml1.png",
      link: "https://coursera.org/share/62ad39739af04a8b99f0d91f30a1c2bb"
    },
    {
      id: "3",
      title: "SQL Basic",
      organization: "Hackerrank",
      date: "2024",
      imageUrl: "/sql.png",
      link: "https://www.hackerrank.com/certificates/iframe/25845b774612"
    },
    {
      id: "4",
      title: "CSS Basic",
      organization: "Hackerrank",
      date: "2024",
      imageUrl: "/css.png",
      link: "https://www.hackerrank.com/certificates/iframe/26a6e0b52f44"
    },
    {
      id: "5",
      title: "Problem Solving",
      organization: "Hackerrank",
      date: "2024",
      imageUrl: "/problem.png",
      link: "https://www.hackerrank.com/certificates/iframe/2e0e5d309776"
    },
  ]);

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

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const visitCertificate = (link?: string) => {
    if (!link) {
      toast.info("No link available for this certificate");
      return;
    }
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="certifications" 
      className="py-20"
      ref={sectionRef}
    >
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Showcase of professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id}
              className={`transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer border-border/50" onClick={() => visitCertificate(certificate.link)}>
                <div className="relative">
                  <AspectRatio ratio={4/3} className="bg-secondary/20">
                    <img 
                      src={certificate.imageUrl} 
                      alt={certificate.title} 
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </AspectRatio>
                  {certificate.link && (
                    <Badge 
                      variant="secondary" 
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs font-medium"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Certificate
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium text-lg line-clamp-1">{certificate.title}</h3>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BadgeCheck className="h-4 w-4 mr-1 text-primary" />
                      {certificate.organization}
                    </div>
                    <div className="text-xs text-muted-foreground">{certificate.date}</div>
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
