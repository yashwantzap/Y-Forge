import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const aiSolutions = [
  {
    title: " AI Chatbots",
    description: "24/7 customer support chatbots that enhance user engagement and satisfaction.",
    path: "/ai-chatbots"
  },
  {
    title: " Predictive Analytics",
    description: "Data-driven AI to forecast trends and optimize decision-making.",
    path: "/predictive-analytics"
  },
  {
    title: " Automation Tools",
    description: "Custom AI-powered automation to improve efficiency across business processes.",
    path: "/automation-tools"
  }
];

const AISolutionsPage = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Business with <span className="bg-gradient-primary bg-clip-text text-transparent">AI Solutions</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Leverage cutting-edge Artificial Intelligence technology tailored to your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {aiSolutions.map((solution, idx) => (
          <Card key={idx} className="shadow-elegant h-full flex flex-col">
            <CardHeader>
              <CardTitle>{solution.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-muted-foreground">{solution.description}</CardContent>
            <div className="p-6">
              <Link to={solution.path}>
                <Button className="w-full bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AISolutionsPage;
