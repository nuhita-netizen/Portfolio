import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Server, Layout, Wrench, Lightbulb } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={24} />,
      skills: "Python, C, C++",
      details: [
        "Strong foundation in object-oriented and procedural programming",
        "Proficient in data structures and algorithms"
      ]
    },
    {
      title: "AI/ML & Computer Vision",
      icon: <Cpu size={24} />,
      skills: "YOLOv8, Computer Vision, Object Detection",
      details: [
        "Custom ML model development",
        "Image processing and spatial analysis",
        "Model inference and optimization"
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: "Node.js, Express.js, FastAPI",
      details: [
        "REST API design and development",
        "System architecture and scalability",
        "High-performance API optimization"
      ]
    },
    {
      title: "Frontend & Real-Time",
      icon: <Layout size={24} />,
      skills: "HTML/CSS/JavaScript, Socket.IO, WebSocket",
      details: [
        "Responsive UI/UX design",
        "Real-time event-driven systems",
        "Frontend frameworks and libraries"
      ]
    },
    {
      title: "Tools & Deployment",
      icon: <Wrench size={24} />,
      skills: "Git, Railway, Tableau",
      details: [
        "Version control and collaboration",
        "Cloud deployment and DevOps basics",
        "Data visualization"
      ]
    },
    {
      title: "Core Competencies",
      icon: <Lightbulb size={24} />,
      skills: "Problem Solving, Analytical Thinking",
      details: [
        "Algorithm design and optimization",
        "System architecture thinking",
        "Leadership and project management"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 text-primary flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
              <p className="text-sm font-semibold text-accent mb-4">{category.skills}</p>
              
              <ul className="space-y-2">
                {category.details.map((detail, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mt-1.5 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
