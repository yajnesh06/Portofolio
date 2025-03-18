
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
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
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Interactive analytics dashboard for monitoring financial metrics and performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A feature-rich social platform focusing on community engagement and content sharing.",
      image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-gilroy leading-tight">
              Hello, I'm <span className="text-accent">Yajnesh Ponnappa</span>
            </h1>
            <p className="text-lg text-gray-700 font-gilroy">
              A passionate developer focused on creating beautiful and functional web experiences that make a difference.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent hover:bg-accent-light text-white font-gilroy">
                Contact Me
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 font-gilroy">
                View Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* The background removed image of a person sitting */}
            <img 
              src="/public/lovable-uploads/eeeec372-eca7-4a6a-b981-f33be2ac09ae.png" 
              alt="Yajnesh Ponnappa" 
              className="w-full max-w-md object-contain z-10"
              style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.15))" }}
            />
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-orange-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center font-gilroy reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My <span className="text-accent">Skills</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "UI/UX Design"].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="font-medium font-gilroy">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-gilroy reveal">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl font-gilroy reveal">
            A showcase of my recent work, demonstrating my skills in design and development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-gilroy">{project.title}</h3>
                  <p className="text-gray-700 mb-4 font-gilroy">{project.description}</p>
                  <a 
                    href={`/projects/${project.id}`} 
                    className="text-accent font-medium hover:underline inline-flex items-center font-gilroy"
                  >
                    View Details
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
