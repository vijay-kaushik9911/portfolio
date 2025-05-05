
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {year} Vijay Kaushik P. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/vijay-kaushik9911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/vijay-kaushik-p-76534b280/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/u/vijay_kaushik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href="mailto:vijaykaushik9911@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
