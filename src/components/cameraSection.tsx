import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const cameraProducts = [
  {
    name: "SecureView HD PRO",
    description: "Crystal clear 1080p video, night vision up to 30m, weatherproof rating IP66.",
    price: "₹3,499",
    features: [
      "Motion Detection",
      "Mobile Alerts",
      "Easy Cloud Storage",
      "Plug & Play"
    ]
  },
  {
    name: "EagleEye 4K Ultra",
    description: "Advanced 4K video quality for larger premises. Color night-vision and wide-area coverage.",
    price: "₹7,999",
    features: [
      "Ultra HD Clarity",
      "Full-Color Night Vision",
      "Two-Way Audio",
      "Expandable Storage"
    ]
  },
  {
    name: "SimpleGuard Mini",
    description: "Compact Wi-Fi camera ideal for indoor rooms and retail shops.",
    price: "₹2,499",
    features: [
      "360° Pan & Tilt",
      "Wi-Fi Enabled",
      "Instant Alerts",
      "Simple App Control"
    ]
  }
];

const CamerasPage = () => {
  return (
    <section id="cameras" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Secure Your Space with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">CCTV Cameras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our range of advanced, reliable CCTV cameras—perfect for home, office, or businesses. Get free installation and 1-year onsite warranty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {cameraProducts.map((item, idx) => (
            <Card key={idx} className="shadow-elegant flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow justify-between">
                <ul className="mb-6 text-base pl-5 list-disc text-muted-foreground">
                  {item.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div>
                  <div className="text-2xl font-bold mb-4">{item.price}</div>
                  <Button className="w-full bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero p-8 rounded-xl max-w-3xl mx-auto text-center">
          <h3 className="font-semibold text-2xl mb-2">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-4">
            Not sure which camera is best for you? Send us your requirements and our experts will recommend a tailored security package.
          </p>
          {/* Simple Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Contact Number" />
          </div>
          <Input placeholder="Email Address" className="mb-4" />
          <Textarea placeholder="Describe your location or security needs..." className="min-h-24 mb-4" />
          <Button className="w-full bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CamerasPage;
