import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{portfolioData.name} | {portfolioData.title}</title>
        <meta name="description" content={portfolioData.bio} />
        <meta name="keywords" content="computer science, researcher, machine learning, deep learning, computer vision, medical image analysis, explainable AI, NLP" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Publications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
