import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import profileImage from "@/assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={profileImage}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10"></div>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                {portfolioData.name}
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                {portfolioData.title}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {portfolioData.bio}
              </p>

              {/* Highlighted Achievements */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-accent">3.84/4.00</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">CGPA</p>
                  <span className="inline-block mt-1 text-[9px] font-medium px-1.5 py-0.5 bg-accent text-accent-foreground rounded">Top 5%</span>
                </div>
                <div className="bg-gradient-to-br from-green-500/15 to-green-500/5 border border-green-500/30 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-green-600 dark:text-green-400">10th</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Merit Rank</p>
                  <span className="inline-block mt-1 text-[9px] font-medium px-1.5 py-0.5 bg-green-500/20 text-green-700 dark:text-green-300 rounded">of 222</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-accent flex-shrink-0" />
                  <span className="text-sm">{portfolioData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Briefcase size={18} className="text-accent flex-shrink-0" />
                  <span className="text-sm">{portfolioData.experience[0]?.title} at {portfolioData.experience[0]?.company}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap size={18} className="text-accent flex-shrink-0" />
                  <span className="text-sm">{portfolioData.education[0]?.institution}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Award size={18} className="text-accent flex-shrink-0" />
                  <span className="text-sm">90% Merit-Based Scholarship Holder</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block mt-8 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
