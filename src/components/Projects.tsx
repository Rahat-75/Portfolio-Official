import { portfolioData } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-accent text-accent-foreground rounded">
                      {project.type}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Certifications
            </h3>
            <div className="max-w-2xl mx-auto">
              {portfolioData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    <span className="text-xs font-medium px-2 py-1 bg-accent text-accent-foreground rounded">
                      Grade: {cert.grade}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {cert.skills.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 5 && (
                      <span className="text-xs text-muted-foreground">+{cert.skills.length - 5} more</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
