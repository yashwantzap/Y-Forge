import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dataVizImage from "@/assets/data-visualization.png";

const DataVisualizationPage = () => (
  <main className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Data <span className="bg-gradient-primary bg-clip-text text-transparent">Visualization</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Transform complex data into clear, interactive charts and dashboards. Our data visualization solutions make insights accessible and actionable for your entire team.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            We leverage modern visualization libraries tailored to your data and goals, empowering faster and more confident decision-making throughout your organization.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10 text-muted-foreground">
            Get beautifully designed dashboards that help align all stakeholders, reveal business trends, and highlight key performance indicators in real time.
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
            src={dataVizImage}
            alt="Data visualization dashboard illustration"
            className="rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500 w-full h-auto"
          />
        </div>
      </div>
    </div>
  </main>
);

export default DataVisualizationPage;
