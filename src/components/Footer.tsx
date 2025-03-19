
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#001f3f] py-20 mt-16 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute -top-60 -right-60 w-[500px] h-[500px] rounded-full bg-[#005efe]/20 blur-[100px] -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#005efe]/20 blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* About Column */}
          <div className="space-y-6 md:col-span-5">
            <h2 className="text-3xl font-bold text-white mb-4 font-gilroy">Yajnesh Ponnappa</h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              A passionate developer focused on creating beautiful and functional web experiences that make a difference. Let's create something amazing together.
            </p>
            
            <div className="flex space-x-5 pt-4">
              {/* Social Icons */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#005efe] hover:scale-110 transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#005efe] hover:scale-110 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#005efe] hover:scale-110 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#005efe] hover:scale-110 transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6 font-gilroy">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Projects</span>
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6 font-gilroy">Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-300 hover:text-white transition-colors">Web Development</li>
              <li className="text-gray-300 hover:text-white transition-colors">UI/UX Design</li>
              <li className="text-gray-300 hover:text-white transition-colors">Mobile Development</li>
              <li className="text-gray-300 hover:text-white transition-colors">Consulting</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold text-white mb-6 font-gilroy">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 group">
                <Mail className="mr-3 text-[#005efe]" size={18} />
                <span className="group-hover:text-white transition-colors">contact@yajnesh.com</span>
              </li>
              <li className="flex items-center text-gray-300 group">
                <Phone className="mr-3 text-[#005efe]" size={18} />
                <span className="group-hover:text-white transition-colors">+1 123 456 7890</span>
              </li>
              <li className="flex items-start text-gray-300 group">
                <MapPin className="mr-3 text-[#005efe] mt-1" size={18} />
                <span className="group-hover:text-white transition-colors">123 Innovation Street,<br />San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Yajnesh Ponnappa. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
