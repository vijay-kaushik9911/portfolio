
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-secondary/5"
      ref={sectionRef}
    >
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <Card 
              className={`border-border/50 transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Info</h3>

                <div className="space-y-6">
                  <div 
                    className={`flex items-start gap-4 transition-all duration-500 transform ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: "100ms" }}
                  >
                    <div className="rounded-full bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:vijaykaushik9911@gmail.com"
                        className="text-primary hover:underline"
                      >
                        vijaykaushik9911@gmail.com
                      </a>
                    </div>
                  </div>

                  <div 
                    className={`flex items-start gap-4 transition-all duration-500 transform ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    {/* <div className="rounded-full bg-primary/10 p-3">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a href="tel:+11234567890" className="text-foreground/80">
                        +1 (123) 456-7890
                      </a>
                    </div> */}
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=12.9716,77.5946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div
                      className={`flex items-start gap-4 transition-all duration-500 transform ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                      }`}
                      style={{ transitionDelay: "300ms" }}
                    >
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-foreground/80">Bengaluru, Karnataka</p>
                      </div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`border-border/50 transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/vijay-kaushik9911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-3 bg-card hover:bg-primary/10 border border-border rounded-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vijay-kaushik-p-76534b280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-3 bg-card hover:bg-primary/10 border border-border rounded-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: "450ms" }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://leetcode.com/u/vijay_kaushik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-3 bg-card hover:bg-primary/10 border border-border rounded-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    LeetCode
                  </a>
                  <a
                    href="mailto:vijaykaushik9911@gmail.com"
                    className={`px-4 py-3 bg-card hover:bg-primary/10 border border-border rounded-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: "550ms" }}
                  >
                    Email
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card 
            className={`lg:col-span-2 border-border/50 transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div 
                    className={`space-y-2 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="abc xyz"
                      required
                    />
                  </div>
                  <div 
                    className={`space-y-2 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abc.xyz@example.com"
                      required
                    />
                  </div>
                </div>

                <div 
                  className={`space-y-2 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="subject"
                    required
                  />
                </div>

                <div 
                  className={`space-y-2 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="message"
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className={`w-full transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`} 
                  disabled={isSubmitting}
                  style={{ transitionDelay: "700ms" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
