import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Cpu, Calendar, Code } from 'lucide-react';

export default function About() {
  const quickFacts = [
    { icon: <GraduationCap size={20} />, label: "College", value: "JNTU Hyderabad (3rd Year)" },
    { icon: <Cpu size={20} />, label: "Primary Focus", value: "Data Analytics, AI/ML, Computer Vision" },
    { icon: <Calendar size={20} />, label: "Expected Graduation", value: "Sep 2029" },
    { icon: <Code size={20} />, label: "GitHub Repos", value: "2+ active projects" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p>
              I'm a 3rd-year CSE student at JNTU Hyderabad with a strong focus on Data Analytics & AI-driven applications. My passion lies in building intelligent systems that solve real-world problems, combining exploratory data analysis, spatial telemetry, and machine learning.
            </p>
            <p>
              Currently, I'm working on Vibe Spaciee, an AI-powered room organiser that uses YOLOv8 computer vision for detecting furniture and optimising space layouts and plan a budget according to the users need. I've also led the development of GrindRoom, a real-time collaborative study platform with synchronized pomodoro sessions and telemetry tracking.
            </p>
            <p>
              Certified by NASSCOM in AI & Data Analytics, I am deeply interested in research opportunities in data-driven optimization, predictive analytics, and Quantum Computing research. When I'm not coding, you'll find me analyzing complex datasets, solving algorithmic problems, or exploring emerging tech.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-96"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Quick Facts</h3>

              <ul className="space-y-4 relative z-10">
                {quickFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white dark:bg-gray-900 text-primary shadow-sm">
                      {fact.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{fact.label}</p>
                      <p className="text-base font-medium text-gray-900 dark:text-gray-200">{fact.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
