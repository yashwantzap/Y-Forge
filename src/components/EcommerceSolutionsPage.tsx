import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ecommerceImage from "@/assets/e-commerce-image.png";

const EcommerceSolutionsPage = () => (
  <main className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            E-commerce <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Robust, secure online stores with integrated payment gateways, inventory management, and customer tracking. Our e-commerce platforms are designed for usability and sales growth.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Whether you need a small boutique site or an enterprise-level store, we have the expertise to build, launch, and maintain your ideal e-commerce platform.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10 text-muted-foreground">
            We focus on seamless user experiences, high performance, and easy administration, enabling you to manage products, orders, and customers with confidence and control.
          </p>

          <Link to="/get-started">
            <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
              Contact Us for a Free Demo
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src={ecommerceImage}
            alt="E-commerce platform illustration"
            className="rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500 w-full h-auto"
          />
        </div>
      </div>
    </div>
  </main>
);

export default EcommerceSolutionsPage;
