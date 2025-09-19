import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import biSolutionsImage from "@/assets/customBI-image.png";

const CustomBISolutionsPage = () => (
  <main className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Custom <span className="bg-gradient-primary bg-clip-text text-transparent">Business Intelligence Solutions</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Tailored BI tools that empower your organization with comprehensive reporting, KPI tracking, and data-driven strategic planning.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10 text-muted-foreground">
            Our custom solutions integrate seamlessly with your existing systems to provide real-time insights and enhance decision-making capabilities.
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
            src={biSolutionsImage}
            alt="Custom Business Intelligence solutions illustration"
            className="rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500 w-full h-auto"
          />
        </div>
      </div>
    </div>
  </main>
);

export default CustomBISolutionsPage;
