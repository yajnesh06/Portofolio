
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  userName: string;
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ userName, onComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100; // Adjust for typing speed (lower = faster)
    
    // Typing animation
    const typingInterval = setInterval(() => {
      if (index < userName.length) {
        setDisplayedName(userName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        
        // After typing is complete, wait before starting exit animation
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(onComplete, 500);
        }, 1000);
      }
    }, typingSpeed);
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      if (!typingComplete) {
        setShowCursor(prev => !prev);
      }
    }, 530);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [userName, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      animate={typingComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-gilroy flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #005efe 0%, #001FAA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {displayedName}
          </span>
          {showCursor && (
            <span className="animate-pulse ml-1 border-r-4 border-blue-500 h-16"></span>
          )}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
