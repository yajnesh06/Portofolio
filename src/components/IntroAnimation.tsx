
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  userName: string;
  duration?: number;
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ 
  userName, 
  duration = 5000,
  onComplete 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [typedText, setTypedText] = useState("");

  // Typing effect with smoother animation
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
    }, 80); // Faster typing for smoother effect

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
            backgroundColor: "#000000",
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
              className="text-4xl md:text-6xl lg:text-8xl font-bold font-gilroy"
              style={{
                background: "linear-gradient(135deg, #4CAF50 0%, #FFEB3B 50%, #FFA726 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent"
              }}
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
                className="inline-block ml-1 w-2 h-12 md:h-16 lg:h-20 bg-green-500"
              />
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
