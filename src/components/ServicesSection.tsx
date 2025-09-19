import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const mainServices = [
  {
    title: "IT Services",
    description: "Comprehensive IT and digital transformation solutions.",
    icon: "💻",
    path: "/it-services"
  },
  {
    title: "CCTV - Solutions",
    description: "Secure camera solutions that grow with your business.",
    icon: "📹",
    path: "/cameras"
  }
  
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-gradient-subtle">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What <span className="bg-gradient-primary bg-clip-text text-transparent">we offer</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose from our specialized business solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {mainServices.map((service, idx) => (
          <Link key={idx} to={service.path} className="group">
            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/30 cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
