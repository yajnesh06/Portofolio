
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import InfiniteSkillsSlider from '@/components/InfiniteSkillsSlider';
import { ArrowRight, ExternalLink, Github, Sparkles, Download, Code } from 'lucide-react';
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
  
  // Function to handle navigation with scroll reset
  const handleNavigation = (path: string) => {
    // First navigate to the path
    navigate(path);
    // Then manually scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

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
    gsap.utils.toArray('.gradient-heading').forEach((heading: HTMLElement) => {
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
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
    { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
    { name: "UI/UX Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Supabase", icon: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}
  ];
  
  
  
  
  
  const projects = [
    {
      id: 1,
      title: "Globe Trek AI",
      description: "Craft your Dream getaways with this AI powered Travel Planner.",
      image: "/pic1.png",
      link: "https://globetrekai.vercel.app/"
    },
    {
      id: 2,
      title: "Photography Portfolio",
      description: "Explore my collection of stunning photographs, showcasing my creative talents.",
      image: "/pic3.png",
      link: "https://ypphotography.vercel.app/"
    },
    {
      id: 3,
      title: "React to Angular Convertor",
      description: "Experience the seamless conversion of React components to Angular.",
      image: "/pic2.png",
      link: "https://reacttoangualar.vercel.app/"
    },
    // {
    //   id: 4,
    //   title: "Health Tracking App",
    //   description: "Mobile application for monitoring health metrics and wellness activities.",
    //   image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //   link: "https://health-tracker.example.com"
    // },
    // {
    //   id: 5,
    //   title: "AI Assistant",
    //   description: "Intelligent virtual assistant powered by machine learning algorithms.",
    //   image: "https://images.unsplash.com/photo-1677442135096-fa1d8ef54f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //   link: "https://ai-assistant.example.com"
    // },
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
      <section className="pt-0 pb-15 px-4 md:px-12 lg:px-24 relative">
        <div className="container  m-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm text-purple-700 font-medium mb-2 border border-purple-200/50">
              <Sparkles size={16} className="mr-2 text-purple-600" />
              <span>Frontend Developer</span>
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
                className='text-xl'
                variant="primary" 
                icon
                onClick={() => handleNavigation('/contact')}
              >
                Contact Me
              </AnimatedButton>
              <AnimatedButton 
                              className='text-xl'

                variant="outline"
                onClick={() => window.open('/f1.pdf', '_blank')}
              >
                <Download size={16} className="mr-2" />
                Download Resume
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
                src="/pic1.webp" 
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
            className="text-3xl md:text-3xl lg:text-6xl font-bold text-center gradient-heading leading-relaxed py-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Skills
          </motion.h2>
          
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-xl">
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
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-purple-600">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    {project.description}
                  </p>
                  
                
                  
                  <div className="flex justify-between items-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                      <span className="mr-1">View project</span>
                      <ArrowRight size={16} />
                    </a>
                    
                    <div className="flex gap-3">
                      <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <Github size={16} className="text-gray-700" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <Code size={16} className="text-gray-700" />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
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
              onClick={() => handleNavigation('/projects')}
            >
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm p-12 rounded-3xl border border-purple-200/30 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Ready to <span className="gradient-heading">Collaborate</span>?
            </h2>
            <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center">
              <AnimatedButton
                variant="primary"
                icon
                onClick={() => {
                  window.scrollTo(0, 0);
                  setTimeout(() => {
                    navigate('/contact');
                  }, 100);
                }}
              >
                Let's Connect
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
