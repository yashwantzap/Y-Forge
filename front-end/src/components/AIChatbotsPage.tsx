import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import chatbotImage from "@/assets/chatbot-image.png"; // Replace with actual image path

const AIChatbotsPage = () => (
  <main className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            AI <span className="bg-gradient-primary bg-clip-text text-transparent">Chatbots</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            Intelligent AI-powered chatbots designed to provide 24/7 customer support, automate inquiries, and boost engagement. Our chatbots learn continuously to improve customer interactions.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground">
            We customize chatbot solutions for websites, social media, and messaging platforms to fit your brand voice and service requirements.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10 text-muted-foreground">
            With natural language understanding and machine learning, our chatbots can handle FAQs, schedule appointments, process orders, and escalate complex cases seamlessly.
          </p>

          <Link to="/get-started">
            <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
              Contact Us to Get Started
            </Button>
          </Link>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src={chatbotImage}
            alt="AI-powered chatbot interaction illustration"
            className="rounded-2xl shadow-elegant hover:shadow-glow transition-shadow duration-500 w-full h-auto"
          />
        </div>
      </div>
    </div>
  </main>
);

export default AIChatbotsPage;
