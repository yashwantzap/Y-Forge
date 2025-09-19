import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

import Index from "./pages/Index";
import HomePage from "./components/HomePage";
import NotFound from "./pages/NotFound";
import CamerasPage from "./components/cameraSection";
import WebDevelopmentPage from "./components/WebDevelopmentPage";
import AISolutionsPage from "./components/AISolutionsPage";
import DataAnalyticsPage from "./components/DataAnalyticsPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import ITServicesPage from "./components/ITServicesPage";
import AboutPage from "./components/AboutPage";
import GetStartedPage from "./components/GetStartedPage";
import WebAppsDevelopmentPage from "./components/CustomWebAppsDev";
import EcommerceSolutionsPage from "./components/EcommerceSolutionsPage";
import AIChatbotsPage from "./components/AIChatbotsPage";
import PredictiveAnalysisPage from "./components/PredictiveAnalysisPage";
import AutomationToolsPage from "./components/AutomationToolsPage";
import DataVisualizationPage from "./components/DataVisualizationPage";
import BigDataProcessingPage from "./components/BigDataProcessingPage";
import CustomBISolutionsPage from "./components/CustomBISolutionsPage";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -50 },
};

const pageTransition = { duration: 0.4 };

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  // Manage manual loading state on route change:
  const [loading, setLoading] = useState(false);
  const navigationType = useNavigationType();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400); // duration matches animation length
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingScreen />}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/cameras"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CamerasPage />
              </motion.div>
            }
          />
          <Route
            path="/it-services"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ITServicesPage />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AboutPage />
              </motion.div>
            }
          />
          <Route
            path="/web-development"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <WebDevelopmentPage />
              </motion.div>
            }
          />
          <Route
            path="/ai-solutions"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AISolutionsPage />
              </motion.div>
            }
          />
          <Route
            path="/data-analytics"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <DataAnalyticsPage />
              </motion.div>
            }
          />
          <Route
            path="/get-started"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <GetStartedPage />
              </motion.div>
            }
          />
          <Route
            path="/web-apps-development"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <WebAppsDevelopmentPage />
              </motion.div>
            }
          />
          <Route
            path="/ecommerce-solutions"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <EcommerceSolutionsPage />
              </motion.div>
            }
          />
          <Route
            path="/ai-chatbots"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AIChatbotsPage />
              </motion.div>
            }
          />
          <Route
            path="/predictive-analytics"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PredictiveAnalysisPage />
              </motion.div>
            }
          />
          <Route
            path="/automation-tools"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AutomationToolsPage />
              </motion.div>
            }
          />
          <Route
            path="/data-visualization"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <DataVisualizationPage />
              </motion.div>
            }
          />
          <Route
            path="/big-data-processing"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <BigDataProcessingPage />
              </motion.div>
            }
          />
          <Route
            path="/custom-bi-solutions"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CustomBISolutionsPage />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NotFound />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
