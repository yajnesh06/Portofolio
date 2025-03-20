
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
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCursorPosition({ x, y });
    
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
    primary: 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white hover:shadow-lg',
    secondary: 'bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white hover:shadow-lg',
    outline: 'bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/5',
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
          "relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-md",
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
        
        {/* Magnetic Circle Effect */}
        {isHovered && (
          <span 
            className="absolute w-20 h-20 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20"
            style={{ 
              background: 'radial-gradient(circle, white 0%, transparent 70%)',
              left: `${cursorPosition.x}px`, 
              top: `${cursorPosition.y}px`,
            }}
          />
        )}
        
        {/* Shine effect */}
        <span 
          className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-out ${
            isHovered ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transformOrigin: 'left'
          }}
        />
      </Component>
    </div>
  );
};

export default AnimatedButton;
