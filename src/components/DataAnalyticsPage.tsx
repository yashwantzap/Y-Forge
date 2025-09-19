import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const dataAnalyticsServices = [
  {
    title: "📈 Data Visualization",
    description: "Clear, interactive dashboards to track your KPIs and business insights.",
    path: "/data-visualization"
  },
  {
    title: "🗄️ Big Data Processing",
    description: "Efficient large-scale data pipelines for real-time analytics and reporting.",
    path: "/big-data-processing"
  },
  {
    title: "💼 Custom BI Solutions",
    description: "Tailored Business Intelligence tools to empower data-driven strategies.",
    path: "/custom-bi-solutions"
  }
];

const DataAnalyticsPage = () => (
  <section className="py-20 bg-gradient-subtle">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Unlock Insights with <span className="bg-gradient-primary bg-clip-text text-transparent">Data Analytics</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Turn your data into actionable intelligence that drives growth and innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dataAnalyticsServices.map((service, idx) => (
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

export default DataAnalyticsPage;
