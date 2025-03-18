
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";
import SmoothScroll from "./components/SmoothScroll";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const userName = "Yajnesh Ponnappa"; // Updated name

  useEffect(() => {
    // Prevent scrolling during intro animation
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setContentVisible(true), 300);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <IntroAnimation 
            userName={userName} 
            onComplete={handleIntroComplete} 
          />
          
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <SmoothScroll>
                  <Navbar userName={userName} />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </SmoothScroll>
              </motion.div>
            )}
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
