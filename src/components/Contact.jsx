import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Code, Phone, Send } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    { icon: <Mail size={20} />, label: "Email", value: "nuhitag6@gmail.com", href: "mailto:nuhitag6@gmail.com", color: "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20" },
    { icon: <Briefcase size={20} />, label: "LinkedIn", value: "G Nuhita", href: "https://www.linkedin.com/in/g-nuhita-89653633a/", color: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20" },
    { icon: <Code size={20} />, label: "GitHub", value: "nuhita-netizen", href: "https://github.com/nuhita-netizen", color: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white" },
    { icon: <Phone size={20} />, label: "Phone", value: "Available upon request", href: "mailto:nuhitag6@gmail.com?subject=Phone%20Number%20Request", color: "hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-900/20" },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect & Collaborate</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Open to internship opportunities, collaborations, and discussions about AI-driven systems</p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          
          {/* Contact Methods */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
            {contactMethods.map((method, idx) => (
              <a 
                key={idx} 
                href={method.href}
                target={method.label !== 'Email' && method.label !== 'Phone' ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 ${method.color}`}
              >
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{method.label}</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">{method.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Collaboration Opportunity" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Hello, I'd like to discuss..."></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-primary/25 mt-2">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
