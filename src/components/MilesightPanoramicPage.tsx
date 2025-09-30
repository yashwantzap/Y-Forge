import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import panoramicImage from "@/assets/bg.jpg";


const cameras = [
  {
    name: "AI 360° Panoramic Fisheye Camera",
    description: "12MP Ultra High Definition, Fisheye Auto Tracking, People Counting & Heat Map",
  },
  {
    name: "AI 180° Panoramic Mini Bullet Network Camera",
    description: "180° Panoramic View, Up to 4K Ultra High Definition, People Counting & Heat Map",
  },
  {
    name: "AI 180° Panoramic Mini Dome Network Camera",
    description: "180° Panoramic View, Up to 4K Ultra High Definition, People Counting & Heat Map",
  },
  {
    name: "AI Dual-sensor 180° Panoramic Network Camera",
    description: "Seamless Stitched 180° Panoramic View, AI ISP & 1/1.8\" Sensor, 1TB SD Storage",
  },
  {
    name: "AI TrueColor Dual-sensor 180° Panoramic Camera",
    description: "180° Dynamic Stitched Panoramic View, F1.0 Super Aperture & TrueColor Technology",
  },
];


const panoramicImageUrl = "/assets/bg.jpg"; // Make sure this path is correct or use import for static assets

const MilesightPanoramicPage = () => (
  <main className="relative py-20">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
      style={{ backgroundImage: `url(${panoramicImage})` }}
      aria-hidden="true"
    />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16">

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Panoramic Camera Solution</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-black/85">
            More than a wider view — a wiser one. Ultra-wide 180° & 360° AI surveillance with built-in analytics for smarter security.
          </p>
        </div>
        {/* Empty or optional hero side content */}
        <div></div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-foreground">Key Features and Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Ultra-wide coverage with single, dual, or multiple sensors including fisheye and mini dome cameras.</li>
          <li>Built-in AI analytics: people counting, heat maps, queue management, and risk prevention.</li>
          <li>12MP TrueColor imaging with superior clarity day or night.</li>
          <li>MSense AI for real-time behavior detection with very low false alarm rates (VCA 2.0).</li>
          <li>Durable IP67 weatherproof and IK10 vandal-resistant design.</li>
          <li>Seamless integration with major VMS platforms and ONVIF compatibility.</li>
        </ul>
      </section>

      {/* Applications */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-foreground">Applications and Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Instant unauthorized access detection for asset protection.</li>
          <li>Retail optimization via smart shelf strategy and foot traffic analytics.</li>
          <li>Queue and traffic flow management to enhance customer experience.</li>
          <li>Comprehensive security monitoring with zero blind spots.</li>
          <li>Healthcare: patient flow, medicine safety, and area optimization.</li>
          <li>Public safety via crowd monitoring and proactive threat response.</li>
          <li>Marketing via panoramic live streaming to attract virtual tourists.</li>
        </ul>
      </section>

      {/* Customer Impact */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-foreground">Customer Impact Stories</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Retail Chain:</strong> +10% sales and +15% customer satisfaction with heat map data and optimized layouts.</li>
          <li><strong>Hospital:</strong> 25% fewer cameras with zero coverage compromise and 13% cost reductions.</li>
          <li><strong>Tourism:</strong> Millions of online views and real-world visitor conversions through panoramic live streams.</li>
        </ul>
      </section>

      {/* Cameras Available Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-foreground">Available Cameras</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cameras.map(({ name, description }) => (
            <div key={name} className="bg-card border border-border rounded-lg p-6 shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section>
        <Link to="/get-started">
          <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
            Learn More and Get Started
          </Button>
        </Link>
      </section>
    </div>
  </main>
);

export default MilesightPanoramicPage;
