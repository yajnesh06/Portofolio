
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  userName: string;
  duration?: number;
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ 
  userName, 
  duration = 5000,  // Increased duration for typing effect
  onComplete 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [typedText, setTypedText] = useState("");

  // Typing effect
  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < userName.length) {
        setTypedText(prev => prev + userName.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Speed of typing

    return () => clearInterval(typingInterval);
  }, [userName, isVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Allow exit animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #9AE6B4 0%, #FEFACD 50%, #FEC6A1 100%)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-800 font-gilroy"
              initial={{ y: 100, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3
                }
              }}
            >
              {typedText}
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1 w-1 h-10 bg-accent"
              />
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
