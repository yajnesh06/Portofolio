
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedButton from './AnimatedButton';

interface NavbarProps {
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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

  const navLinks = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'projects', path: '#projects', label: 'Projects', isAnchor: true },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#ebe9e1]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" 
          className="text-xl font-medium flex items-center"
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
            {navLinks.map(link => (
              <li key={link.id}>
                {link.isAnchor ? (
                  <a 
                    href={link.path} 
                    className="relative font-medium text-gray-800 hover:text-[#005efe] transition-colors"
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#005efe] transition-all duration-300 ease-out ${
                        hoveredLink === link.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                ) : (
                  <Link 
                    to={link.path} 
                    className="relative font-medium text-gray-800 hover:text-[#005efe] transition-colors"
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#005efe] transition-all duration-300 ease-out ${
                        hoveredLink === link.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </Link>
                )}
              </li>
            ))}
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
                className="text-xl font-medium"
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
                {navLinks.map(link => (
                  <li key={link.id}>
                    {link.isAnchor ? (
                      <a
                        href={link.path}
                        className="flex items-center justify-between text-gray-800 hover:text-[#005efe] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                        <ChevronRight className="h-5 w-5" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="flex items-center justify-between text-gray-800 hover:text-[#005efe] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
