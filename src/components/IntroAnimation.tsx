
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
    const typingSpeed = 220; // Slower typing speed
    
    // Typing animation
    const typingInterval = setInterval(() => {
      if (index < userName.length) {
        setDisplayedName(userName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        
        // Longer wait time (3 seconds) before exit
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(onComplete, 400);
        }, 3000);
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

  // Particles configuration
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    delay: Math.random() * 0.5,
  }));

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}
    >
      {/* Animated particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            background: `linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)`,
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0], 
            scale: [0, 1, 0],
            x: [0, Math.random() * 120 - 60],
            y: [0, Math.random() * 120 - 60],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3 + Math.random() * 3,
            delay: particle.delay,
            ease: "easeInOut" 
          }}
        />
      ))}
      
      {/* Logo reveal animation */}
      <motion.div 
        className="text-center relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="absolute -z-10 w-40 h-40 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1]"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-sans flex items-center justify-center relative"
        >
          <span
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 12px rgba(139, 92, 246, 0.6))"
            }}
          >
            {displayedName}
          </span>
          {showCursor && (
            <motion.span 
              className="border-r-4 border-[#8B5CF6] h-14 md:h-16 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.h1>
        
        {/* Subtitle that appears after typing */}
        <motion.p
          className="text-[#8B5CF6]/90 mt-4 text-lg md:text-xl font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Frontend Developer
        </motion.p>
      </motion.div>
      
      {/* Bottom loader animation */}
      <motion.div 
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 3,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
