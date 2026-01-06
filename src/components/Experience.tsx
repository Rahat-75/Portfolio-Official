import { portfolioData } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Experience
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12"></div>

          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-accent font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-20">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 max-w-2xl mx-auto"
                >
                  <span className="text-sm text-accent font-medium">{edu.period}</span>
                  <h4 className="text-xl font-semibold text-foreground mt-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mt-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                  {edu.thesis && (
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium text-foreground">Thesis:</span> {edu.thesis}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Honours & Awards
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {portfolioData.awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <h4 className="font-semibold text-foreground">{award.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{award.issuer}</p>
                  <p className="text-xs text-accent mt-1">{award.period || award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
