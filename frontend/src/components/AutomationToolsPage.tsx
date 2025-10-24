import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import automationImage from "@/assets/automation-image.png";

const AutomationToolsPage = () => (
  <main className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Automation <span className="bg-gradient-primary bg-clip-text text-transparent">Tools</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Custom AI-powered automation tools to streamline repetitive tasks, improve accuracy, and reduce manual labor across your business operations.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Boost productivity and scale efficiently with intelligent workflows and process automation designed specifically for your needs.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Our automation solutions integrate with your existing systems, empowering teams to focus on strategic initiatives instead of manual work. We prioritize security, scalability, and ease of use in every tool we develop.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10 text-muted-foreground">
            Whether you want to automate data entry, communication workflows, or complex multi-step processes, our AI-driven tools deliver measurable improvements.
          </p>

          <Link to="/get-started">
            <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
              Contact Us for a Free Consultation
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src={automationImage}
            alt="AI powered automation tools illustration"
            className="rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500 w-full h-auto"
          />
        </div>
      </div>
    </div>
  </main>
);

export default AutomationToolsPage;
