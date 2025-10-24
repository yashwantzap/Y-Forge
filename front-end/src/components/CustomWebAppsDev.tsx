import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import webAppsImage from "@/assets/responsive-web-image.png";

const CustomWebAppsDev = () => (
  <main className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Custom <span className="bg-gradient-primary bg-clip-text text-transparent">Web Applications Development</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Tailored web applications designed to automate processes, enhance user engagement, and scale with your business. We develop secure, scalable, and feature-rich apps using modern frameworks.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            From real-time dashboard apps to content management systems, our solutions improve workflow efficiency and customer satisfaction.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10 text-muted-foreground">
            Whether you need an internal business tool or a public-facing platform, our team ensures a seamless experience from ideation through deployment and ongoing support.
          </p>

          <Link to="/get-started">
            <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
              Contact Us to Get Started
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src={webAppsImage}
            alt="Modern web applications development illustration"
            className="rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500 w-full h-auto"
          />
        </div>
      </div>
    </div>
  </main>
);

export default CustomWebAppsDev;
