
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#001f3f] py-10 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#005efe]/20 blur-[80px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Column */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold text-white mb-3 tracking-wider">Yajnesh Ponnappa</h2>
            <p className="text-gray-300 text-xl max-w-md mb-4 tracking-wider leading-6">
              A passionate developer focused on creating beautiful web experiences.
            </p>
            
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="https://github.com/yajnesh06" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#005efe] hover:scale-110 transition-all duration-300">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/yajnesh-at" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#005efe] hover:scale-110 transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#005efe] hover:scale-110 transition-all duration-300">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#005efe] hover:scale-110 transition-all duration-300">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links and Services combined in one column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wider">Links</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 text-lg hover:text-white transition-colors flex items-center group tracking-wider">
                    <span className="group-hover:translate-x-1 transition-transform">Home</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-300 text-lg hover:text-white transition-colors flex items-center group tracking-wider">
                    <span className="group-hover:translate-x-1 transition-transform">Projects</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 text-lg hover:text-white transition-colors flex items-center group tracking-wider">
                    <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
              
              <ul className="space-y-2">
                <li className="text-gray-300 text-lg hover:text-white transition-colors tracking-wider">Web Development</li>
                <li className="text-gray-300 text-lg hover:text-white transition-colors tracking-wider">UI/UX Design</li>
                <li className="text-gray-300 text-lg hover:text-white transition-colors tracking-wider">Consulting</li>
              </ul>
            </div>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wider">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:yajnuponnappa@gmail.com" className="text-gray-300 text-lg block hover:text-white transition-colors tracking-wider leading-6">
                yajnuponnappa@gmail.com
              </a>
              <a href="tel:+919113286294" className="text-gray-300 text-lg block hover:text-white transition-colors tracking-wider leading-6">
                +91 9113286294
              </a>
              <p className="text-gray-300 text-lg tracking-wider leading-6">
                Bengaluru, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs tracking-wide">
            © {currentYear} Yajnesh Ponnappa. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-xs transition-colors tracking-wide">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs transition-colors tracking-wide">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
