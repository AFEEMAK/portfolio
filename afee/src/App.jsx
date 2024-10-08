import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Loading from './components/Loading';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './components/Footer/Footer';
import Lenis from 'lenis';
import Project from './components/Project/Project';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
   
  useEffect( () => {

    const lenis = new Lenis()

    function raf(time) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }
    requestAnimationFrame(raf)
 
    window.history.scrollRestoration = 'manual'
 

  }, [])

  return (
    <div className="w-full h-screen text-bg-zinc-900  relative">
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
        initial={{ x: '-100%', scale: 0.6  }}
        animate={{ x: '280%'}}
        exit={{ x: '-100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className={`absolute top-0 left-0 w-1/4 h-full bg-zinc-500 opacity-70 rounded-3xl z-7 ${isLoading ? 'opacity-1' : 'opacity-0 transition-all duration-[1500ms] ease-out'}`}
        style={{ boxShadow: '0 4px 8px rgba(82, 82, 91, 0.8)' }} // Optional: for better visibility
      >
        {/* Content for the left side element */}
      </motion.div>
      
      <motion.div
        initial={{ x: '100%',scale: 0.65}}
        animate={{ x: '-30%'}}
        exit={{ x: '100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className={`absolute top-0 right-0 w-1/4 h-full rounded-3xl bg-zinc-500 opacity-40 z- ${isLoading ? 'opacity-1' : 'opacity-0 transition-all duration-[1500ms] ease-out'}`}
        style={{ boxShadow: '0 4px 8px rgba(82, 82, 91, 0.8)' }} // Optional: for better visibility
      >
        {/* Content for the right side element */}
      </motion.div>
        <motion.div
          initial={{ scale: isLoading ? 0.7 : 1 }}
          animate={{ scale: isLoading ? 0.7 : 1, opacity: 1}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className={`w-full h-full absolute rounded-xl top-0 left-0 ${isLoading ? "transition-transform duration-1000 ease-in-out" : ""}`}
        >
          <Navbar />
          <Landing loading={isLoading} />
        </motion.div>
          
      </div>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;