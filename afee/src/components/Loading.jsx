import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Loading({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          onComplete();
          return 100;
        }
      });
    }, 11); // Adjust the speed of the percentage increase

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed bottom-24  right-64  z-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1  }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="text-4xl font-bold mb-2"
      >
        {percent}<span className='text-5xl mt-2'>%</span>
      </motion.div>
      
    </div>
  );
}

export default Loading;
