
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const secondGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current && firstGroupRef.current && secondGroupRef.current) {
      let ctx = gsap.context(() => {
        const xPercent = -100;
        const duration = skills.length * 5; // Adjust based on number of skills
        const animation = gsap.timeline({
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          }
        });

        animation.to(firstGroupRef.current, { xPercent, duration, ease: "none" }, 0);
        animation.to(secondGroupRef.current, { xPercent, duration, ease: "none" }, 0);
      });

      return () => ctx.revert();
    }
  }, [skills.length]);

  return (
    <div className="overflow-hidden w-full relative" ref={sliderRef}>
      <div className="flex whitespace-nowrap">
        <div ref={firstGroupRef} className="flex items-center space-x-10 py-8">
          {skills.map((skill, index) => (
            <div key={`skill-1-${index}`} className="flex flex-col items-center justify-center px-4">
              <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-xl shadow-md">
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <span className="text-gray-800 font-medium font-gilroy whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
        <div ref={secondGroupRef} className="flex items-center space-x-10 py-8">
          {skills.map((skill, index) => (
            <div key={`skill-2-${index}`} className="flex flex-col items-center justify-center px-4">
              <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-xl shadow-md">
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <span className="text-gray-800 font-medium font-gilroy whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSkillsSlider;
