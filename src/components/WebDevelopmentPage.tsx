import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const webDevServices = [
  {
    title: "📱 Custom Web Apps",
    description: "Tailored applications with unique features to grow your business online.",
    path: "/web-apps-development"
  },
  {
    title: "🛒 E-Commerce Solutions",
    description: "Robust online stores with secure payment and inventory management.",
    path: "/ecommerce-solutions"
  }
];

const WebDevelopmentPage = () => (
  <section className="py-20 bg-gradient-subtle">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Build Your Presence with <span className="bg-gradient-primary bg-clip-text text-transparent">Web Development</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Create stunning, high-performance websites and applications designed by experts.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {webDevServices.map((service, idx) => (
          <Card key={idx} className="shadow-elegant h-full flex flex-col">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-muted-foreground">{service.description}</CardContent>
            <div className="p-6">
              <Link to={service.path}>
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

export default WebDevelopmentPage;
