import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.div
      className='fixed z-50 w-full px-20 py-8 flex justify-between items-center'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2, ease: 'easeOut' }}
    >
      <div className="logo">
      <svg width="150" height="40" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="20" fontSize="30" fontFamily="Arial, sans-serif" fill="currentColor">am.</text>
        </svg>
      </div>
      <div className="links flex gap-10">
        {['Home', 'About', 'Contact', 'Projects'].map((item, index) => (
          <motion.a
            key={index}
            className={`text-sm font-regular capitalize`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default Navbar
