import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                The Future of{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Innovation
                </span>{" "}
                Starts Here
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Y is pioneering the next generation of innovative solutions that transform businesses and accelerate growth in the digital age.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started" className="text-muted-foreground hover:text-foreground transition-colors">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
              </Button>
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
            <img 
              src={heroImage} 
              alt="Innovative technology visualization representing Y startup's cutting-edge solutions" 
              className="relative z-10 rounded-2xl shadow-elegant w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;