import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import InfiniteSkillsSlider from '@/components/InfiniteSkillsSlider';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 50, 
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
            start: "top 85%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "𝕋" },
    { name: "Node.js", icon: "🟢" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "GSAP", icon: "🔄" },
    { name: "Framer Motion", icon: "🎞️" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "GraphQL", icon: "◯" },
    { name: "Firebase", icon: "🔥" },
    { name: "AWS", icon: "☁️" },
    { name: "MongoDB", icon: "🍃" },
  ];

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
  ];

  return (
    <div className="min-h-screen bg-[#ebe9e1]">
      {/* Hero Section - Reduced top margin */}
      <section className="pt-10 pb-24 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Hello, I'm{" "}
              <span 
                style={{
                  background: "linear-gradient(135deg, #005efe 0%, #003cb6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Yajnesh Ponnappa
              </span>
            </h1>
            <p className="text-lg text-gray-700">
              A passionate developer focused on creating beautiful and functional web experiences that make a difference.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-[#005efe] hover:bg-[#0050e0] text-white" 
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-[#005efe] text-[#005efe] hover:bg-[#005efe]/10"
              >
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
            <img 
              src="/lovable-uploads/2ad7618b-9c74-475b-a660-d365d34d6d83.png" 
              alt="Yajnesh Ponnappa" 
              className="w-full max-w-md object-contain z-10"
              style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.15))" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#005efe]/20 via-[#0046d5]/10 to-[#003cb6]/20 rounded-full blur-3xl opacity-30 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 overflow-hidden bg-[#ebe9e1]">
        <div className="container mx-auto mb-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            style={{
              background: "linear-gradient(135deg, #005efe 0%, #003cb6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Skills
          </motion.h2>
          
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
            I specialize in these technologies to build modern, responsive, and user-friendly applications.
          </p>
        </div>
        
        {/* Infinite horizontal skills slider */}
        <InfiniteSkillsSlider skills={skills} />
      </section>

      {/* Projects Section - Redesigned to match the award-style format */}
      <section className="py-16 px-4 md:px-12 lg:px-24 bg-[#ebe9e1]" id="projects">
        <div className="container mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #005efe 0%, #003cb6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Projects
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl">
            A showcase of my recent work, demonstrating my skills in design and development.
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card border-t border-gray-300 pt-8 pb-10 group hover:border-[#005efe] transition-colors duration-300"
              >
                <a href={`/projects/${project.id}`} className="block">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Left side - project info */}
                    <div className="md:col-span-7 flex flex-col">
                      <div className="flex justify-between items-center text-sm mb-4">
                        <span className="text-[#005efe] font-medium">{project.category}</span>
                        <span className="text-gray-600">{project.date}</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-[#005efe] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-6 text-lg">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center text-[#005efe] font-medium mt-auto group-hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-1">View project</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                    
                    {/* Right side - project image */}
                    <div className="md:col-span-5 overflow-hidden rounded-lg">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

export default Index;
