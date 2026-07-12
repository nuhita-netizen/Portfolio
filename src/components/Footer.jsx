import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Gajula Nuhita. All rights reserved.
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
          Designed & Built with <Heart size={14} className="text-red-500 mx-1 animate-pulse" /> by Gajula Nuhita
        </div>
      </div>
    </footer>
  );
}
