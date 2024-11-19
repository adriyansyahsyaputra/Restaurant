import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Alert = ({ isOpen, title, description }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white p-8 rounded-2xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.2)] max-w-sm mx-4">
            <div className="text-center">
              {/* Success Icon Container */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6">
                <div className="h-20 w-20 mx-auto relative">
                  {/* Outer Ring Animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-tr from-green-400 to-green-500 rounded-full opacity-20"
                  />
                  {/* Inner Ring */}
                  <div className="absolute inset-1 bg-gradient-to-tr from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="h-10 w-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          delay: 0.5,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {description}
                </p>
              </motion.div>

              {/* Optional: Loading Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "linear" }}
                className="h-1 bg-gradient-to-r from-green-400 to-green-500 mt-6 rounded-full origin-left"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;