import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bigDataImage from "@/assets/bigdata-image.png";

const BigDataProcessingPage = () => (
  <main className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={bigDataImage}
            alt="Big data processing infrastructure illustration"
            className="rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500 w-full h-auto"
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Big Data <span className="bg-gradient-primary bg-clip-text text-transparent">Processing</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Efficiently process and analyze massive datasets with scalable big data pipelines and cloud infrastructure designed for real-time and batch processing.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10 text-muted-foreground">
            We help you unlock value from your data at scale while ensuring data quality, security, and performance. Our expert team builds robust architectures tailored to your industry’s needs.
          </p>

          <Link to="/get-started">
            <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
              Contact Us to Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </main>
);

export default BigDataProcessingPage;
