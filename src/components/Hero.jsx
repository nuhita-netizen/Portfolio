import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-primary/10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-accent/10"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-purple-900/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Internships
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Gajula Nuhita</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-4">
              3rd year CSE Student | JNTU Hyderabad
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Building intelligent systems at the intersection of computer vision and real-time systems. Passionate about solving real-world problems with technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/25"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#resume" 
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all shadow-sm"
              >
                Download Resume
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200 dark:border-gray-800 pt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">8.32</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">CGPA</p>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">3rd</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Year Student</p>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">JNTU</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Hyderabad</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-2 bg-gradient-to-tr from-primary to-accent">
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-full m-1"></div>
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 relative z-10 overflow-hidden flex items-center justify-center text-6xl font-bold text-gray-400 dark:text-gray-600">
                GN
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
