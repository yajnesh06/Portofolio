
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import InfiniteSkillsSlider from '@/components/InfiniteSkillsSlider';
import { ArrowRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
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
          duration: 1.2, 
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });

    // Animation for section headings
    gsap.utils.toArray('.gradient-heading').forEach((heading: any) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: heading,
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
      date: "2025.02.21",
      category: "Career",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Interactive analytics dashboard for monitoring financial metrics and performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "2025.01.24",
      category: "Trend & Vision",
      technologies: ["React", "D3.js", "Firebase", "TailwindCSS"]
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A feature-rich social platform focusing on community engagement and content sharing.",
      image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "2024.08.04",
      category: "Press Release",
      technologies: ["Next.js", "GraphQL", "Auth0", "Cloudinary"]
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 -z-10"
          style={{ y: backgroundY }}
        >
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 blob"></div>
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-gradient-to-tr from-pink-300/30 to-purple-300/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 blob"></div>
          <div className="absolute top-1/2 left-1/2 w-[35vw] h-[35vw] bg-gradient-to-r from-blue-300/20 to-green-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 blob"></div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="pt-10 pb-20 px-4 md:px-12 lg:px-24 relative">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm text-purple-700 font-medium mb-2 border border-purple-200/50">
              <Sparkles size={16} className="mr-2 text-purple-600" />
              <span>Full-Stack Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Hello, I'm{" "}
              <span className="gradient-heading">
                Yajnesh Ponnappa
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              A passionate developer crafting immersive digital experiences with modern technologies. I build applications that make a difference.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <AnimatedButton 
                variant="primary" 
                icon
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </AnimatedButton>
              <AnimatedButton 
                variant="outline"
              >
                View Resume
              </AnimatedButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#8B5CF6]/20 via-[#6366F1]/10 to-[#8B5CF6]/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              <img 
                src="/lovable-uploads/2ad7618b-9c74-475b-a660-d365d34d6d83.png" 
                alt="Yajnesh Ponnappa" 
                className="w-full max-w-md object-contain z-10 hero-image animate-float"
              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-10 bg-black/10 blur-xl rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 overflow-hidden relative">
        <div className="container mx-auto mb-12 px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Skills
          </motion.h2>
          
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            I specialize in these technologies to build modern, responsive, and user-friendly applications.
          </p>
        </div>
        
        {/* Infinite horizontal skills slider */}
        <InfiniteSkillsSlider skills={skills} />
      </section>

      {/* Projects Section - Modern cards with hover effects */}
      <section className="py-20 px-4 md:px-12 lg:px-24 relative" id="projects">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-700 mb-20 max-w-2xl mx-auto text-center">
            A showcase of my recent work, demonstrating my expertise in modern web development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-card card-3d h-full"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  
                  {/* Overlay color tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full z-10 font-medium text-sm">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-gray-500">{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-medium px-3 py-1 bg-purple-100 text-purple-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a href={`/projects/${project.id}`} className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                      <span className="mr-1">View project</span>
                      <ArrowRight size={16} />
                    </a>
                    
                    <div className="flex gap-3">
                      <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <Github size={16} className="text-gray-700" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <ExternalLink size={16} className="text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <AnimatedButton
              variant="primary"
              icon
              onClick={() => navigate('/projects')}
            >
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
