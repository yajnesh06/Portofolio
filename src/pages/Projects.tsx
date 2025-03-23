
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    // Animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Globe Trek AI",
      description: "Craft your Dream getaways with this AI powered Travel Planner.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      
    },
    {
      id: 2,
      title: "Photography Portfolio",
      description: "Explore my collection of stunning photographs, showcasing my creative talents.",
      
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      
    },
    {
      id: 3,
      title: "React to Angular Convertor",
      description: "Experience the seamless conversion of React components to Angular.",
      
      image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      
    },
    {
      id: 4,
      title: "Health Tracking App",
      description: "Mobile application for monitoring health metrics and wellness activities.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    
    },
    {
      id: 5,
      title: "AI Assistant",
      description: "Intelligent virtual assistant powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1677442135096-fa1d8ef54f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#ebe9e1]">
      <section className="py-16 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-lg text-gray-700 mb-16 max-w-2xl">
            A showcase of my recent work, demonstrating my skills in design and development.
          </p>
          
          {/* Diagonal staggered layout with smaller cards */}
          <div className="relative">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-card mb-16 ${
                  index % 2 === 0 
                    ? 'ml-0 mr-auto md:mr-[15%] lg:mr-[20%]' 
                    : 'ml-auto mr-0 md:ml-[15%] lg:ml-[20%]'
                }`}
                style={{
                  width: '100%',
                  maxWidth: '700px',
                }}
              >
                <a 
                  href={`/projects/${project.id}`} 
                  className="block group hover:opacity-95 transition-opacity duration-300"
                >
                  <div className="overflow-hidden rounded-lg shadow-md bg-white">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Left side: Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Overlay color tag */}
                        
                     
                      
                     
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#005efe] transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center text-[#005efe] font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                          <span className="mr-1">View project</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <AnimatedButton 
              variant="primary" 
              icon
              href="/contact"
            >
              Contact Me
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
