import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Vibe Spaciee: AI-Driven Room Organizer",
      description: "An intelligent room organization application that uses computer vision to analyze space utilization and generate actionable recommendations for optimal furniture arrangements.",
      problem: "How can we leverage AI to help people organize their living spaces more efficiently?",
      tech: ["Data Analytics", "Python", "YOLOv8", "Computer Vision", "FastAPI", "REST APIs", "Image Processing"],
      features: [
        "Real-time furniture detection from image inputs",
        "Spatial data analytics and layout optimization",
        "Clutter detection and space utilization recommendations",
        "Structured coordinate mapping for furniture placement",
        "Scalable REST API for concurrent uploads"
      ],
      learnings: [
        "Advanced computer vision & spatial data analysis",
        "Building high-performance REST APIs with FastAPI",
        "Modular architecture design for scalability",
        "Integration of ML models in production systems"
      ],
      github: "https://github.com/nuhita-netizen/vibe-spaciee",
      demo: "#", // Add link when deployed
      status: "Currently Building (Ongoing)",
      primary: true
    },
    {
      title: "GrindRoom: Real-Time Collaborative Study Platform",
      description: "A real-time collaborative study platform enabling synchronized pomodoro focus sessions for up to 3 concurrent users with built-in resource sharing features.",
      problem: "How can we create a distraction-free collaborative study environment for remote learners?",
      tech: ["Data Analytics", "Node.js", "Express", "Socket.IO", "WebSocket", "JavaScript", "Railway", "HTML/CSS"],
      features: [
        "Synchronized pomodoro focus sessions (up to 3 users)",
        "Real-time room & timer synchronization",
        "Multi-room management with capacity limits",
        "Built-in resource sharing (PDFs, notes, playlists)",
        "Automatic cleanup on disconnection",
        "Distraction-free, highly responsive UI"
      ],
      learnings: [
        "Real-time event-driven architecture with WebSocket",
        "Multi-room state management and synchronization",
        "Full-stack deployment and production management",
        "Team collaboration and project leadership",
        "UX design for distraction-free interfaces"
      ],
      github: "https://github.com/nuhita-netizen",
      demo: "#", // Add link
      role: "Project Leader (Feb 2026 - June 2026)",
      primary: false
    },
    {
      title: "BenefitBuddy: AI-Powered Government Scheme Discovery & Eligibility Platform",
      description: "An AI-powered discovery platform designed to determine eligibility and match citizens with government welfare schemes and insurance programs using hybrid rule engines and machine learning.",
      problem: "How can we simplify complex government scheme criteria and instantly connect eligible citizens to the right benefits?",
      tech: ["Python", "FastAPI", "React", "XGBoost", "Gemini API", "SQLite", "PostgreSQL"],
      features: [
        "End-to-end data architecture with deterministic rules engine for hard eligibility filters",
        "XGBoost model ranking schemes by relevance, benefit value, and applicant profile",
        "Dynamic data layer with nightly automated jobs validating scheme rules against official sources",
        "Unified eligibility logic integrating scheme matching with insurance comparison in a single profile",
        "Tested against real applicant scenarios (farmer subsidies and student scholarships)"
      ],
      learnings: [
        "Hybrid rule-engine and Machine Learning recommendation pipelines",
        "Integrating LLM capabilities with Gemini API for contextual assistance",
        "Automated data pipelines and scheduled verification workflows",
        "Rapid prototyping and data modeling under hackathon conditions"
      ],
      github: "https://github.com/nuhita-netizen",
      demo: "#",
      role: "Team Project (UTKARSH 1.0 / IIT-B Honeywell Hackathon)",
      status: "2026 – Present",
      primary: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Visual Placeholder */}
                <div className="lg:w-2/5 relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-800/50 min-h-[300px] flex items-center justify-center p-8 group overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
                  <div className="text-center relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur flex items-center justify-center shadow-lg">
                      {project.primary ? (
                        <span className="text-4xl">🛋️</span>
                      ) : (
                        <span className="text-4xl">⏱️</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title.split(':')[0]}</h3>
                    <p className="text-sm font-medium text-primary mt-2">{project.status || project.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{project.description}</p>
                  
                  <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-1">Problem Statement:</p>
                    <p className="text-gray-600 dark:text-gray-400 italic">"{project.problem}"</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        What I Learned
                      </h4>
                      <ul className="space-y-3">
                        {project.learnings.map((learning, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm">
                      <Code size={18} />
                      View Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors text-sm">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
