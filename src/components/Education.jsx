import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star } from 'lucide-react';

export default function Education() {
  const achievements = [
    "Built 2 substantial projects with production deployment",
    "Project Leader for GrindRoom (team collaboration)",
    "Currently developing Vibe Spaciee (solo full-stack project)",
    "Strong foundation in algorithms and data structures",
    "Working at intersection of AI/ML and real-time systems"
  ];

  const courses = [
    "Discrete Mathematics",
    "Data Structures & Algorithms",
    "Probability & Statistics",
    "Computer Networks"
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Achievements</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Formal Education</h3>
              </div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Technology</h4>
                <p className="text-lg text-primary font-medium mb-1">Computer Science Engineering</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Jawaharlal Nehru Technological University, Hyderabad</p>
                <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 mb-6">
                  AUG 2024 - SEP 2029
                </div>

                <div className="mb-6">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Current Standing</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">8.32 <span className="text-lg text-gray-400 font-normal">/ 10 CGPA</span></p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Achievements</h3>
              </div>

              <ul className="space-y-6 relative z-10">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/20 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Certifications Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full -mr-20 -mt-20"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            
            <div className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                I've completed 6 professional certifications from industry-leading organizations. The NASSCOM certifications from Skill India Digital Hub demonstrate expertise in cloud computing and DevOps for AI applications. The Forage job simulations provided practical experience in data analytics with modern AI tools. Coursera certifications validate foundational programming skills in Python and C.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
