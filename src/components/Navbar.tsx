
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" 
          className="text-xl font-medium font-gilroy"
          style={{
            background: "linear-gradient(135deg, #4CAF50 0%, #FFEB3B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {userName}
        </Link>
        
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-white hover:text-green-500 transition-colors font-gilroy">
                Home
              </Link>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-green-500 transition-colors font-gilroy">
                Projects
              </a>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-green-500 transition-colors font-gilroy">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
