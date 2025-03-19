
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

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
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with intuitive navigation and seamless checkout.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      date: "2025.02.21",
      category: "Career"
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Interactive analytics dashboard for monitoring financial metrics and performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "2025.01.24",
      category: "Trend & Vision"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A feature-rich social platform focusing on community engagement and content sharing.",
      image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "2024.08.04",
      category: "Press Release"
    },
    {
      id: 4,
      title: "Health Tracking App",
      description: "Mobile application for monitoring health metrics and wellness activities.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "2024.07.15",
      category: "Career"
    },
    {
      id: 5,
      title: "AI Assistant",
      description: "Intelligent virtual assistant powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1677442135096-fa1d8ef54f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "2024.06.30",
      category: "Trend & Vision"
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
          
          {/* Diagonal staggered layout */}
          <div className="relative">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-card mb-32 ${
                  index % 2 === 0 
                    ? 'ml-0 mr-auto md:mr-[5%] lg:mr-[10%]' 
                    : 'ml-auto mr-0 md:ml-[5%] lg:ml-[10%]'
                }`}
                style={{
                  width: '100%',
                  maxWidth: '1000px',
                }}
              >
                <a 
                  href={`/projects/${project.id}`} 
                  className="block group hover:opacity-95 transition-opacity duration-300"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Overlay color tag */}
                      <div className="absolute top-0 left-0 bg-[#ff3131] text-white px-4 py-2 z-10">
                        <span className="font-semibold">{project.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-center text-sm mb-3">
                        <span className="text-gray-600">{project.date}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#005efe] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center text-[#005efe] font-medium group-hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-1">View project</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
