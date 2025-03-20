
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const navRef = useRef<HTMLDivElement>(null);

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

  // Create animated navigation items with staggered delay
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <motion.header 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#ebe9e1]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" 
          className="text-xl font-medium flex items-center"
        >
          <motion.span 
            style={{
              background: "linear-gradient(135deg, #005efe 0%, #003cb6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {userName}
          </motion.span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
              >
                {link.isAnchor ? (
                  <a 
                    href={link.path} 
                    className="relative font-medium text-gray-800 hover:text-[#005efe] transition-colors duration-300"
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#005efe] transition-all duration-300 ease-out ${
                        hoveredLink === link.id ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        transformOrigin: hoveredLink === link.id ? 'left' : 'right',
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </a>
                ) : (
                  <Link 
                    to={link.path} 
                    className="relative font-medium text-gray-800 hover:text-[#005efe] transition-colors duration-300"
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#005efe] transition-all duration-300 ease-out ${
                        hoveredLink === link.id ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        transformOrigin: hoveredLink === link.id ? 'left' : 'right',
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </Link>
                )}
              </motion.li>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#ebe9e1] z-50 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-10">
                <motion.span 
                  className="text-xl font-medium"
                  style={{
                    background: "linear-gradient(135deg, #005efe 0%, #003cb6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {userName}
                </motion.span>
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
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      {link.isAnchor ? (
                        <a
                          href={link.path}
                          className="flex items-center justify-between text-gray-800 hover:text-[#005efe] transition-colors duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <ChevronRight className="h-5 w-5" />
                          </motion.div>
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="flex items-center justify-between text-gray-800 hover:text-[#005efe] transition-colors duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <ChevronRight className="h-5 w-5" />
                          </motion.div>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
