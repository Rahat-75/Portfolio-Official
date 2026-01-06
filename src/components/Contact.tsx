import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Seeking an AI/ML Developer or Data Scientist role to apply research-backed AI solutions in production-oriented environments. Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent transition-all text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-accent" />
              </div>
              <h3 className="font-medium text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground break-all">{portfolioData.email}</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${portfolioData.phone}`}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent transition-all text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-accent" />
              </div>
              <h3 className="font-medium text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">{portfolioData.phone}</p>
            </a>

            {/* Location */}
            <div className="bg-card border border-border rounded-xl p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-accent" />
              </div>
              <h3 className="font-medium text-foreground mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">{portfolioData.location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          {/* Languages */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Languages:</span>{" "}
              {portfolioData.languages.map((lang) => `${lang.name} (${lang.level})`).join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
