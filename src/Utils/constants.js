export const sections = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "research",
  "contact",
];

export const menus = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Research",
  "Contact",
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Python",
    "FastAPI",
    "Express.js",
    "GraphQL",
    "REST APIs",
  ],
  database: ["MongoDB", "PostgreSQL", "Redis"],
  aiml: [
    "NLP",
    "Vector Search",
    "RAG Systems",
    "N-gram Models",
    "LLMs",
    "Sentiment Analysis",
  ],
  tools: ["Docker", "GitHub Actions", "CI/CD", "DigitalOcean", "Microservices"],
};

export const experiences = [
  {
    title: "AI Research & Development Engineer",
    company: "Independent Research",
    period: "2024 - Present",
    description:
      "Architected advanced Agentic RAG systems and developed statistical language models using Maximum Likelihood Estimation.",
    achievements: [
      "Built autonomous agents for strategic information retrieval",
      "Developed N-gram models for text generation and autocompletion",
      "Created production-ready NLP applications",
    ],
  },
  {
    title: "Full Stack Developer & Mobile Developer",
    company: "CoAmana",
    period: "Dec 2023 – Apr 2025",
    description:
      "Contributed to building insight tools using modern tech stack in a distributed team environment.",
    achievements: [
      "Implemented features using GraphQL and Apollo Client",
      "Enhanced analytics capabilities and user experience",
      "Collaborated effectively in remote team setting",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Clive Alliance",
    period: "Nov 2022 – Feb 2024",
    description:
      "Developed fintech solutions for banking and monitoring systems.",
    achievements: [
      "Built applications for Zikora Bank",
      "Optimized backend queues and caching using Redis",
      "Implemented secure financial transaction systems",
    ],
  },
];

export const projects = [
  {
    title: "Agentic RAG System",
    description:
      "Advanced Retrieval-Augmented Generation system with autonomous agents for strategic information search and synthesis.",
    tech: ["Python", "FastAPI", "Vector Search", "LLMs", "NLP"],
    category: "AI/ML",
    link: "https://github.com/1mustyz/llm-zoom-bootcamp",
  },
  {
    title: "LLaMA Text Summarizer",
    description:
      "Full-stack text summarization application using LLaMA2 model via Ollama with Streamlit interface.",
    tech: ["Python", "FastAPI", "LLaMA2", "Streamlit", "Ollama"],
    category: "AI/ML",
    link: "https://github.com/1mustyz/llama-text-summarizer",
  },
  {
    title: "N-gram Language Model",
    description:
      "Statistical language model for word autocompletion and text generation using Maximum Likelihood Estimation.",
    tech: ["Python", "NLP", "Statistical Modeling", "Text Processing"],
    category: "AI/ML",
    link: "https://github.com/1mustyz/Speech-and-Language-Processing/tree/main/chapter3",
  },
  {
    title: "Mistral Sentiment Analyzer",
    description:
      "Real-time sentiment analysis system using Mistral LLM with intuitive web interface.",
    tech: ["Python", "FastAPI", "Mistral", "Streamlit", "NLP"],
    category: "AI/ML",
    link: "https://github.com/1mustyz/sentiment-analyzer-mistral",
  },
  {
    title: "Shipex App",
    description:
      "Shpex is a simple shipment tracking app built with React Native. It allows drivers to manage their shipment status efficiently.",
    tech: ["React Native", "TypeScript", "Tailwind CSS", "SWR"],
    category: "Mobile App",
    link: "https://github.com/1mustyz/shipex-app",
  },

  {
    title: "Soft School Management System",
    description:
      "Comprehensive digital solution for secondary school operations with student, staff, and parent dashboards.",
    tech: ["React", "Zustand", "Tailwind CSS", "NestJS", "MongoDB"],
    category: "Web",
    demo: "https://www.softschool.ng/",
  },

  {
    title: "Sentiment Analysis",
    description:
      "The goal is to build, evaluate, and compare machine learning models for classifying text data into sentiment categories (e.g., Positive, Negative, Neutral). Each project focuses on a specific dataset, applying natural language processing (NLP) techniques and machine learning algorithms to analyze sentiment.",
    tech: ["Python", "NLP", "Classification Models", "Seaborn", "Matplotlib"],
    category: "AI/ML",
    link: "https://github.com/1mustyz/sentiment-analysis",
  },
];

export const researchPapers = [
  {
    title:
      "Statistical Language Modeling for Next-Word Prediction: N-gram Approaches and Optimization",
    description:
      "Exploring Maximum Likelihood Estimation techniques in statistical language models for improved text generation and autocompletion systems.",
    authors: "Almustapha Yusuf",
    year: "2025",
    status: "In Progress",
    link: "#",
    topics: ["NLP", "Statistical Modeling", "Text Generation"],
  },

  {
    title: "Technical Tutorial: From Mathematical Vectors to Semantic Search",
    description:
      "Exploring the journey from vectors to AI-driven semantic search, covering vector operations, similarity metrics, embeddings (GloVe, Sentence-BERT), and semantic search. Ideal for data science learners and NLP enthusiasts.",
    authors: "Almustapha Yusuf",
    year: "2025",
    status: "Published",
    link: "https://github.com/1mustyz/Mathematical-Vectors-to-Semantic-Search",
    topics: ["Vectors Embeddings", "BERT", "Vector Search", "Semantic Search"],
  },
];
