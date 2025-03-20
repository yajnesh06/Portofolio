
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: boolean;
}

const AnimatedButton = ({
  children,
  variant = 'primary',
  className,
  onClick,
  href,
  icon = false,
}: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const offsetX = (x - centerX) / 10;
    const offsetY = (y - centerY) / 10;
    
    buttonRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };
  
  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0, 0)';
    setIsHovered(false);
  };
  
  const variantClasses = {
    primary: 'bg-[#005efe] text-white hover:bg-[#004bd9]',
    secondary: 'bg-[#ff3131] text-white hover:bg-[#e52e2e]',
    outline: 'bg-transparent border-2 border-[#005efe] text-[#005efe] hover:bg-[#005efe]/10',
  };
  
  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };
  
  return (
    <div 
      ref={buttonRef}
      className="inline-block overflow-hidden transition-all duration-300 ease-out"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Component
        {...props}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300",
          variantClasses[variant],
          className
        )}
      >
        <span className="z-10 flex items-center gap-2">
          {children}
          {icon && (
            <ArrowRight 
              className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            />
          )}
        </span>
        
        <span 
          className={`absolute bottom-0 left-0 w-full h-1 transform transition-all duration-300 ${
            isHovered 
              ? 'bg-white/20 translate-y-0' 
              : 'bg-transparent translate-y-full'
          }`} 
        />
      </Component>
    </div>
  );
};

export default AnimatedButton;
