import { motion } from 'framer-motion'
import React from 'react'

const IntroAnima = () => {
  return (
    <div>
                <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.2,
              transition: { duration: 0.5 }
            }}
            className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: 1,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              className="text-center"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2 }
                }}
              >
                African Metrics
              </motion.h1>
              <motion.div
                className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: 1,
                  transition: { delay: 0.5, duration: 0.8 }
                }}
              />
            </motion.div>
          </motion.div>
    </div>
  )
}

export default IntroAnima;
