
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: string;
}

interface InfiniteSkillsSliderProps {
  skills: Skill[];
}

const InfiniteSkillsSlider: React.FC<InfiniteSkillsSliderProps> = ({ skills }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current && trackRef.current) {
      const track = trackRef.current;
      
      // Clone the content to ensure seamless looping
      if (track.children.length > 0) {
        const childrenWidth = Array.from(track.children).reduce((acc, child) => {
          return acc + child.clientWidth;
        }, 0);
        
        // Create a full animation sequence
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: 'none' }
        });
        
        tl.to(track, {
          x: -childrenWidth,
          duration: skills.length * 5,
          ease: 'none'
        });

        // Add scroll-based speed control
        ScrollTrigger.create({
          trigger: sliderRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            // Change speed based on scroll direction
            const scrollDirection = self.getVelocity() > 0 ? 1 : -1;
            const currentTime = tl.time();
            const adjustedSpeed = scrollDirection * 0.5;
            tl.timeScale(1 + adjustedSpeed);
          }
        });
      }
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [skills.length]);

  return (
    <div 
      ref={sliderRef} 
      className="overflow-hidden w-full relative py-10 bg-[#ebe9e1]"
    >
      <div 
        ref={trackRef} 
        className="flex items-center space-x-12 py-4 will-change-transform"
      >
        {/* Duplicate the skills array to create a seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <div 
            key={`skill-${index}`} 
            className="flex flex-col items-center justify-center px-6 min-w-[150px]"
          >
            <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-2xl">{skill.icon}</span>
            </div>
            <span className="text-gray-800 font-medium whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSkillsSlider;
