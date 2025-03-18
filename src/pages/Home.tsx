
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroImage = heroImageRef.current;
    const heroContent = heroContentRef.current;

    if (heroImage && heroContent) {
      gsap.fromTo(
        heroImage,
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroImage,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(
        heroContent.children,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroContent,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
        <div 
          ref={heroContentRef}
          className="w-full lg:w-1/2 space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative. Innovative. <span className="text-accent">Precise.</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-700 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I turn ideas into elegant digital experiences, focusing on clean design and seamless interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/projects" className="button-accent inline-block">
              View Projects
            </a>
          </motion.div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img 
            ref={heroImageRef}
            src="/lovable-uploads/eeeec372-eca7-4a6a-b981-f33be2ac09ae.png" 
            alt="Polygonal illustration of person working on laptop" 
            className="hero-image w-full max-w-xl"
          />
        </div>
      </section>

      <section className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal">
            What I <span className="text-accent">Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Creating responsive web applications with modern frameworks and clean code."
              },
              {
                title: "UI/UX Design",
                description: "Designing intuitive interfaces that balance aesthetics and functionality."
              },
              {
                title: "Digital Strategy",
                description: "Developing comprehensive plans to achieve digital objectives."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg bg-white shadow-md reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
