import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import HomePage from "./components/HomePage";
import NotFound from "./pages/NotFound";
import CamerasPage from "./components/cameraSection";
import WebDevelopmentPage from "./components/WebDevelopmentPage";
import AISolutionsPage from "./components/AISolutionsPage";
import DataAnalyticsPage from "./components/DataAnalyticsPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection"; // main with 2 services
import ITServicesPage from "./components/ITServicesPage"; // new IT services listing page
import AboutPage from "./components/AboutPage";
import GetStartedPage from "./components/GetStartedPage"
import WebAppsDevelopmentPage from "./components/CustomWebAppsDev";
import EcommerceSolutionsPage from "./components/EcommerceSolutionsPage";
import AIChatbotsPage from "./components/AIChatbotsPage";
import PredictiveAnalysisPage from "./components/PredictiveAnalysisPage";
import AutomationToolsPage from "./components/AutomationToolsPage";
import DataVisualizationPage from "./components/DataVisualizationPage";
import BigDataProcessingPage from "./components/BigDataProcessingPage";
import CustomBISolutionsPage from "./components/CustomBISolutionsPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* Use simplified services section as home */}
          <Route path="/" element={<HomePage />} />
          
          {/* Service pages */}
          <Route path="/cameras" element={<CamerasPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/web-apps-development" element={<WebAppsDevelopmentPage />} />
          <Route path="/ecommerce-solutions" element={<EcommerceSolutionsPage />} />
          <Route path="/ai-chatbots" element={<AIChatbotsPage />} />
          <Route path="/predictive-analytics" element={<PredictiveAnalysisPage />} />
          <Route path="/automation-tools" element={<AutomationToolsPage />} />
          <Route path="/data-visualization" element={<DataVisualizationPage />} />
          <Route path="/big-data-processing" element={<BigDataProcessingPage />} />
          <Route path="/custom-bi-solutions" element={<CustomBISolutionsPage />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
