import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const itServices = [
  {
    title: "🌐 Web Development",
    description: "Custom websites and apps to grow your digital presence.",
    path: "/web-development"
  },
  {
    title: "🤖 AI Solutions",
    description: "Tailored AI-powered tools and automation for your business.",
    path: "/ai-solutions"
  },
  {
    title: "📊 Data Analytics",
    description: "Data visualization and business intelligence insights.",
    path: "/data-analytics"
  }
];

const ITServicesPage = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-6">
      {/* Introduction */}
      <div className="text-center mb-16 max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          IT <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          At Y, we offer specialized IT solutions designed to accelerate your business success by harnessing the latest technologies and industry best practices.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          From crafting bespoke websites and powerful AI tools to unlocking insightful data analytics, our services empower your digital growth and enhance operational efficiency.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Each service is tailored to your unique requirements with robust support and scalable architectures to meet future challenges.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {itServices.map((service, idx) => (
          <Link key={idx} to={service.path} className="group">
            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/30 cursor-pointer">
              <CardHeader className="text-center">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
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

export default ITServicesPage;
