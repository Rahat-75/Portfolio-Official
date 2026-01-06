import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-accent">Rahat</span>
          </h1>

          <p className="text-lg md:text-xl text-accent font-medium mb-4">
            {portfolioData.title}
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experienced in Computer Vision, Medical Image Analysis, NLP & Explainable AI. Seeking an AI/ML Developer or Data Scientist role to apply research-backed AI solutions in production-oriented environments.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-4 text-center hover:scale-105 transition-transform">
              <p className="text-2xl md:text-3xl font-bold text-accent">3.84</p>
              <p className="text-xs text-muted-foreground">CGPA / 4.00</p>
              <span className="inline-block mt-1 text-[10px] font-medium px-2 py-0.5 bg-accent text-accent-foreground rounded-full">Top 5%</span>
            </div>
           
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform">
              <p className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">{portfolioData.publications.length}</p>
              <p className="text-xs text-muted-foreground">Publications</p>
              <span className="inline-block mt-1 text-[10px] font-medium px-2 py-0.5 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full">IEEE • Springer • Nature</span>
            </div>
            
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#publications"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              View Publications
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
