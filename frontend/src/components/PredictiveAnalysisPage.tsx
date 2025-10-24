import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import predictiveImage from "@/assets/predictive-analysis.png"; // Use your actual image path

const PredictiveAnalysisPage = () => (
  <main className="py-20">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Predictive <span className="bg-gradient-primary bg-clip-text text-transparent">Analysis</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Harness your data using AI-driven predictive analysis to forecast trends, customer behavior, and business outcomes. Make smarter, data-backed decisions to stay ahead of the competition.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Our experts build custom models tailored to your industry and datasets, ensuring exceptional accuracy and actionable insights you can trust.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            From demand forecasting and risk assessment to personalized recommendations and churn prediction, our solutions empower you to anticipate key business challenges and opportunities before they arise.
          </p>
          <Link to="/get-started">
            <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
              Contact Us to Learn More
            </Button>
          </Link>
        </div>
        {/* Right: Image */}
        <div>
          <img
            src={predictiveImage}
            alt="Predictive analysis illustration"
            className="rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500 w-full h-auto"
          />
        </div>
      </div>
    </div>
  </main>
);

export default PredictiveAnalysisPage;
