import React, { useState } from 'react';
import { Bell, X, Megaphone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AggieAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-[#FDB927] border-b border-[#004684]/10 sticky top-0 z-[10000] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-[#004684] text-white">
                  <Megaphone size={18} aria-hidden="true" />
                </span>
                <p className="ml-3 font-black text-[#004684] text-xs sm:text-sm uppercase tracking-tight truncate">
                  <span className="md:hidden font-black">Priority FAFSA Deadline: Feb 15!</span>
                  <span className="hidden md:inline font-black">
                    Priority FAFSA Deadline is February 15, 2027! Submit early to maximize your aid.
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#/fafsa"
                  className="flex items-center justify-center px-4 py-1.5 border border-transparent rounded-lg shadow-sm text-[10px] font-black text-white bg-[#004684] hover:bg-[#003566] transition-all uppercase tracking-widest"
                >
                  Apply Now <ArrowRight size={14} className="ml-1.5" />
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <button
                  onClick={() => setIsVisible(false)}
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-[#004684]/10 focus:outline-none transition-colors"
                >
                  <span className="sr-only">Dismiss</span>
                  <X size={18} className="text-[#004684]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AggieAlert;