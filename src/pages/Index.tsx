
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import InfiniteSkillsSlider from '@/components/InfiniteSkillsSlider';

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
    <div className="min-h-screen pt-24 bg-[#ebe9e1]">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-gilroy leading-tight text-black">
              Hello, I'm{" "}
              <span 
                className="font-gilroy"
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
            <p className="text-lg text-gray-700 font-gilroy">
              A passionate developer focused on creating beautiful and functional web experiences that make a difference.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-[#005efe] hover:bg-[#0050e0] text-white font-gilroy" 
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-[#005efe] text-[#005efe] hover:bg-[#005efe]/10 font-gilroy"
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
            {/* The image of person sitting with laptop */}
            <img 
              src="/lovable-uploads/2ad7618b-9c74-475b-a660-d365d34d6d83.png" 
              alt="Yajnesh Ponnappa" 
              className="w-full max-w-md object-contain z-10"
              style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.15))" }}
            />
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#005efe]/20 via-[#0046d5]/10 to-[#003cb6]/20 rounded-full blur-3xl opacity-30 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 overflow-hidden bg-[#ebe9e1]">
        <div className="container mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center font-gilroy reveal"
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
          
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 font-gilroy">
            I specialize in these technologies to build modern, responsive, and user-friendly applications.
          </p>
        </div>
        
        {/* Infinite horizontal skills slider */}
        <InfiniteSkillsSlider skills={skills} />
      </section>

      {/* Projects Section */}
      <section className="section-padding" id="projects">
        <div className="container mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-gilroy reveal"
            style={{
              background: "linear-gradient(135deg, #005efe 0%, #003cb6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Projects
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl font-gilroy reveal">
            A showcase of my recent work, demonstrating my skills in design and development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card bg-white rounded-lg overflow-hidden shadow-md border border-[#005efe]/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-gilroy text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 font-gilroy">{project.description}</p>
                  <a 
                    href={`/projects/${project.id}`} 
                    className="text-[#005efe] font-medium hover:underline inline-flex items-center font-gilroy"
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
