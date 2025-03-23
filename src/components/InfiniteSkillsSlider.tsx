import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';

interface Skill {
  name: string;
  icon: string;
}

interface InfiniteSkillsSliderProps {
  skills: Skill[];
}

// Memoize the skill item to prevent unnecessary re-renders
const SkillItem = memo(({ skill }: { skill: Skill }) => (
  <div className="flex items-center justify-center px-6">
    <span className="text-blue-700 hover:text-blue-900 text-lg font-medium transition-colors duration-300 flex items-center">
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-8 h-8 mr-2 object-contain" 
        loading="lazy"
        width="32"
        height="32"
      />
      {skill.name}
    </span>
  </div>
));

SkillItem.displayName = 'SkillItem';

const InfiniteSkillsSlider: React.FC<InfiniteSkillsSliderProps> = ({ skills }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!trackRef.current || skills.length === 0) return;
    
    const track = trackRef.current;
    
    // Clean up previous animation
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    // Clone items for true infinite effect
    const cloneItems = () => {
      // Get the width of the track
      const trackWidth = track.offsetWidth;
      const containerWidth = sliderRef.current?.offsetWidth || 0;
      
      // If track width is less than 3x container, add more clones
      if (trackWidth < containerWidth * 3 && track.children.length > 0) {
        const originalItems = Array.from(track.children).slice(0, skills.length);
        originalItems.forEach(item => {
          const clone = item.cloneNode(true);
          track.appendChild(clone);
        });
        
        // Recursively add more if needed
        cloneItems();
      }
    };
    
    // Initial setup
    requestAnimationFrame(() => {
      cloneItems();
      
      // Set initial position
      gsap.set(track, { x: 0 });
      
      // Create the infinite animation
      const pixelsPerSecond = 200; // Speed control
      const trackWidth = track.scrollWidth / 2;
      const duration = trackWidth / pixelsPerSecond;
      
      function createAnimation() {
        return gsap.to(track, {
          x: `-=${trackWidth}`,
          duration: duration,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            // Reset position when halfway through for seamless loop
            gsap.set(track, { x: 0 });
          }
        });
      }
      
      animationRef.current = createAnimation();
      
      // Hover controls
      const handleMouseEnter = () => {
        if (animationRef.current) {
          animationRef.current.timeScale(0.2);
        }
      };
      
      const handleMouseLeave = () => {
        if (animationRef.current) {
          animationRef.current.timeScale(1);
        }
      };
      
      sliderRef.current?.addEventListener('mouseenter', handleMouseEnter);
      sliderRef.current?.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        sliderRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        sliderRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
    
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [skills]);

  return (
    <div 
      ref={sliderRef} 
      className="overflow-hidden w-full relative py-10"
    >
      <div className="relative">
        <div 
          ref={trackRef} 
          className="flex items-center space-x-16 py-4 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {skills.map((skill, index) => (
            <SkillItem key={`skill-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(InfiniteSkillsSlider);
