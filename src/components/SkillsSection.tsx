
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const skills = {
    frontend: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ],
    backend: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    ],
    machinelearning: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit Learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
    tools: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  };

  return (
    <section 
      id="skills" 
      className="py-20" 
      ref={sectionRef}
    >
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              ref={(el) => (categoryRefs.current[index] = el)}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <SkillCategory 
                title={
                  category === "frontend"
                    ? "Frontend Development"
                    : category === "backend"
                    ? "Backend Development"
                    : category === "machinelearning"
                    ? "Machine Learning"
                    : "Tools & Others"
                } 
                skills={skillList} 
                isVisible={isVisible}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Skill {
  name: string;
  logo: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  isVisible: boolean;
  delay: number;
}

function SkillCategory({ title, skills, isVisible, delay }: SkillCategoryProps) {
  return (
    <Card className="border-border/50 transition-all duration-500 transform hover:shadow-md hover:shadow-primary/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6">{title}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 p-3 bg-card hover:bg-primary/5 rounded-lg transition-all duration-300 border border-border/50 transform hover:-translate-y-1 hover:shadow-md"
              style={{ 
                transitionDelay: `${delay + index * 50}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? "translateY(0) scale(1)" 
                  : "translateY(20px) scale(0.95)"
              }}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="max-w-full max-h-full transition-all duration-300 hover:scale-110"
                />
              </div>
              <span className="text-xs font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
