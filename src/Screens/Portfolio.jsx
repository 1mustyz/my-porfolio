import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Brain,
  Zap,
  ArrowRight,
  ExternalLink,
  Download,
  Menu,
  X,
} from "lucide-react";

import {
  sections,
  menus,
  skills,
  experiences,
  projects,
  researchPapers,
} from "../Utils/constants";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              A.Yusuf
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menus.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 p-4">
              {menus.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Almustapha Yusuf
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Software Engineer | AI/ML Researcher | Fullstack Developer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about building intelligent systems and solving
              real-world problems through innovative AI solutions and robust
              software engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                View My Work <ArrowRight size={20} />
              </button>
              <a
                href="/files/Almustapha Yusuf Resume.pdf"
                download="Almustapha_Yusuf_Resume.pdf"
                className="px-8 py-3 border border-gray-600 rounded-full hover:border-blue-400 transition-colors flex items-center gap-2"
              >
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a Software Engineer with 5 years of experience in designing,
                developing, and deploying robust web applications. Currently
                focused on Artificial Intelligence, Machine Learning, and
                Natural Language Processing.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I hold a B.Tech in Computer Science with First Class Honours and
                have successfully implemented advanced AI systems including
                Agentic RAG solutions and N-gram models for speech and language
                processing.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-blue-400" size={20} />
                <span>Karu, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={20} />
                <span>onemusty.z@gmail.com</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl text-center">
                <Code className="mx-auto mb-3 text-blue-400" size={40} />
                <h3 className="text-xl font-semibold mb-2">5+ Years</h3>
                <p className="text-gray-400">Development Experience</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl text-center">
                <Brain className="mx-auto mb-3 text-purple-400" size={40} />
                <h3 className="text-xl font-semibold mb-2">AI/ML</h3>
                <p className="text-gray-400">Research & Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 capitalize text-blue-400">
                  {category === "aiml" ? "AI/ML" : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl border-l-4 border-blue-400"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <Zap
                        className="text-yellow-400 mt-1 flex-shrink-0"
                        size={16}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      project.category === "AI/ML"
                        ? "bg-purple-600/30 text-purple-300"
                        : "bg-blue-600/30 text-blue-300"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 rounded text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project?.link && (
                    <a
                      href={project?.link}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project?.demo && (
                    <a
                      href={project?.demo}
                      target="_blank"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Research & Publications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid gap-8">
            {researchPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 p-8 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {paper.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          paper.status === "Published"
                            ? "bg-green-600/30 text-green-300"
                            : paper.status === "Under Review"
                            ? "bg-yellow-600/30 text-yellow-300"
                            : paper.status === "In Progress"
                            ? "bg-blue-600/30 text-blue-300"
                            : "bg-gray-600/30 text-gray-300"
                        }`}
                      >
                        {paper.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3 leading-relaxed">
                      {paper.description}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      <span className="font-medium">Authors:</span>{" "}
                      {paper.authors} •{" "}
                      <span className="font-medium">Year:</span> {paper.year}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full text-sm text-purple-300 border border-purple-500/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Brain size={16} />
                    <span className="text-sm">AI/ML Research</span>
                  </div>
                  <a
                    href={paper.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg hover:from-blue-600/30 hover:to-purple-600/30 transition-all text-blue-300 hover:text-blue-200"
                  >
                    <ExternalLink size={16} />
                    {paper.status === "Published"
                      ? "View"
                      : paper.status === "Under Review"
                      ? "Preprint"
                      : "View"}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Research Focus Summary */}
          <div className="mt-16 bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-8 rounded-xl border border-blue-500/20">
            <div className="text-center">
              <Brain className="mx-auto mb-4 text-blue-400" size={60} />
              <h3 className="text-2xl font-semibold mb-4">
                Current Research Focus
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Actively researching advanced AI systems, with particular focus
                on Retrieval-Augmented Generation (RAG), Natural Language
                Processing, and intelligent agent architectures. Currently
                working on several research papers in these domains.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Agentic RAG Systems
                  </h4>
                  <p className="text-gray-400">
                    Advanced retrieval and generation architectures
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-purple-400 mb-2">
                    Speech & Language Processing
                  </h4>
                  <p className="text-gray-400">
                    N-gram models and statistical language modeling
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibent text-pink-400 mb-2">
                    Vector Search Systems
                  </h4>
                  <p className="text-gray-400">
                    Efficient information retrieval mechanisms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              I'm always open to discussing new opportunities, collaborating on
              interesting projects, or sharing knowledge about AI/ML and
              software engineering.
            </p>

            <div className="flex justify-center gap-8 mb-8">
              <a
                href="mailto:onemusty.z@gmail.com"
                target="_blank"
                className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail size={24} />
                <span>onemusty.z@gmail.com</span>
              </a>

              <a
                href="mailto:onemustyfc@gmail.com"
                target="_blank"
                className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail size={24} />
                <span>onemustyfc@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mustapha-yusuf-3275471b7/"
                target="_blank"
                className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Almustapha Yusuf</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
