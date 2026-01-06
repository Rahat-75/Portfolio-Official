import { ExternalLink, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Publications = () => {
  return (
    <section id="publications" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            Research Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>

          {/* Publications Count Header */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30 rounded-full px-6 py-3">
              <FileText size={20} className="text-accent" />
              <span className="text-lg font-semibold text-foreground">{portfolioData.publications.length} Research Publications</span>
              <span className="text-xs font-medium px-2 py-1 bg-accent text-accent-foreground rounded-full">IEEE • Springer • Nature</span>
            </div>
          </div>

          <div className="space-y-6">
            {portfolioData.publications.map((pub, index) => (
              <div
                key={index}
                className={`bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pub.status?.includes("Q1")
                    ? "border-accent/50 ring-2 ring-accent/20 shadow-lg shadow-accent/10"
                    : "border-border hover:shadow-lg"
                  }`}
              >
                {pub.status?.includes("Q1") && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-gradient-to-r from-accent to-orange-500 text-white rounded-full animate-pulse">
                      ⭐ Featured Research
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${pub.status?.includes("Q1") ? "bg-accent/20" : "bg-accent/10"
                    }`}>
                    <FileText size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-accent text-accent-foreground rounded">
                        {pub.year}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded">
                        {pub.journal}
                      </span>
                      {pub.status && (
                        <span className={`text-xs font-medium px-2 py-1 rounded ${pub.status.includes("Q1")
                            ? "bg-green-500/20 text-green-700 dark:text-green-300"
                            : "bg-muted text-muted-foreground"
                          }`}>
                          {pub.status}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {pub.authors}
                    </p>
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-accent hover:underline font-medium"
                      >
                        <ExternalLink size={14} />
                        View Publication
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
