
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Pages
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";
import SmoothScroll from "./components/SmoothScroll";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const userName = "Yajnesh Ponnappa";

  useEffect(() => {
    // Prevent scrolling during intro animation
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      // Small delay before enabling scroll to prevent jarring transition
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 300);
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Increased delay to ensure smoother transition
    setTimeout(() => setContentVisible(true), 500);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {showIntro && (
            <IntroAnimation 
              userName={userName} 
              onComplete={handleIntroComplete} 
            />
          )}
          
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <SmoothScroll>
                  <Navbar userName={userName} />
                  <main className="pt-20"> {/* Added padding-top to account for navbar */}
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
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
