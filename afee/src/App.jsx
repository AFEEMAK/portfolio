import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Loading from './components/Loading';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full h-screen text-bg-zinc-900 overflow-hidden relative">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <Loading onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Side Elements */}

      {/* Main Screen */}
      <div className="bg-zinc-800 w-full h-full relative z-100">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-1/4 h-full bg-transparent z-0"
        style={{ boxShadow: '0 4px 8px rgba(82, 82, 91, 0.8)' }} // Optional: for better visibility
      >
        {/* Content for the left side element */}
      </motion.div>
      
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 right-0 w-1/4 h-full bg-transparent z-0"
        style={{ boxShadow: '0 4px 8px rgba(82, 82, 91, 0.8)' }} // Optional: for better visibility
      >
        {/* Content for the right side element */}
      </motion.div>
        <motion.div
          initial={{ scale: isLoading ? 0.7 : 1, borderRadius: 20 }}
          animate={{ scale: isLoading ? 0.7 : 1, opacity: 1, borderRadius: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className={`w-full h-full absolute top-0 left-0 ${isLoading ? "transition-transform duration-1000 ease-in-out" : ""}`}
        >
          <Navbar />
          <Landing />
        </motion.div>
      </div>
    </div>
  );
}

export default App;