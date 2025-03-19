
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        scrolled ? 'bg-[#ebe9e1]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" 
          className="text-xl font-medium font-gilroy flex items-center"
        >
          <span style={{
            background: "linear-gradient(135deg, #005efe 0%, #003cb6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {userName}
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-800 hover:text-[#005efe] transition-colors font-gilroy">
                Home
              </Link>
            </li>
            <li>
              <a href="#projects" className="text-gray-800 hover:text-[#005efe] transition-colors font-gilroy">
                Projects
              </a>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-[#005efe] transition-colors font-gilroy">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-800"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-[#ebe9e1] z-50 md:hidden"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
              <span 
                className="text-xl font-medium font-gilroy"
                style={{
                  background: "linear-gradient(135deg, #005efe 0%, #003cb6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {userName}
              </span>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex-1">
              <ul className="space-y-6 text-xl">
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center justify-between text-gray-800 hover:text-[#005efe] transition-colors font-gilroy"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="flex items-center justify-between text-gray-800 hover:text-[#005efe] transition-colors font-gilroy"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-between text-gray-800 hover:text-[#005efe] transition-colors font-gilroy"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
