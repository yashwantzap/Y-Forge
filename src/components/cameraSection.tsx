import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import img1 from "@/assets/cameraPageImages/image1.png";
import img2 from "@/assets/cameraPageImages/image2.png";

const videoSurveillanceInfo = {
  title: "Video Surveillance",
  description:
    "Advanced solutions for panoramic, PTZ, retail and crowd management surveillance.",
  features: [
    { label: "Panoramic Surveillance Solution", to: "/panoramic-surveillance" },
    { label: "Retail Video Surveillance Solution", to: "/retail-video-surveillance" },
    { label: "PTZ Surveillance Solution", to: "/ptz-surveillance" },
    { label: "Smart Crowd Management Solution", to: "/smart-crowd-management" },
    { label: "Smart Remote Management Solution", to: "/smart-remote-management" },
  ],
};

const intelligentTrafficInfo = {
  title: "Solar Surveillance",
  description:
    "AI-powered monitoring using solar.",
  features: [
    { label: "Traffic Surveillance Solution", to: "/traffic-surveillance" },
    { label: "Parking Management", to: "/parking-management" },
    { label: "Entrance & Exit Management", to: "/entrance-exit-management" },
  ],
};

const applications = [
  { label: "Retail and Shopping Malls", icon: "🏬" },
  { label: "Public Transportation Hubs", icon: "🚌" },
  { label: "City Traffic Management", icon: "🚦" },
  { label: "Office and Industrial Complexes", icon: "🏢" },
  { label: "Hospitals and Healthcare Facilities", icon: "🏩" },
  { label: "Parking Lots and Garages", icon: "🅿️" },
];

const heroImages = [
  { src: img1, alt: "Surveillance Camera View 1" },
  { src: img2, alt: "Surveillance Camera View 2" },
];

const CamerasPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto space-y-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:flex-1 space-y-6">
          <h1 className="text-5xl font-bold leading-tight max-w-lg">
            Secure Your Premises with Our Advanced <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              CCTV & Intelligent Traffic Solutions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Explore our cutting-edge surveillance technology and traffic
            management systems designed to keep your environment safe and
            efficient.
          </p>
          <Button className="bg-primary hover:bg-primary-hover max-w-xs">
            Get Started
          </Button>
        </div>
        <div className="md:flex-1 relative rounded-lg shadow-lg overflow-hidden h-96 w-full">
          {heroImages.map(({ src, alt }, idx) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Video Surveillance Card */}
        <Card className="shadow-elegant flex flex-col">
          <CardHeader>
            <CardTitle>{videoSurveillanceInfo.title}</CardTitle>
            <CardDescription>{videoSurveillanceInfo.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 pl-4">
            {videoSurveillanceInfo.features.map(({ label, to }) => (
              <Link
                to={to}
                key={to}
                className="block px-3 py-2 rounded hover:text-yellow-500 text-yellow transition-colors text-muted-foreground cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Intelligent Traffic Card */}
        <Card className="shadow-elegant flex flex-col">
          <CardHeader>
            <CardTitle>{intelligentTrafficInfo.title}</CardTitle>
            <CardDescription>{intelligentTrafficInfo.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 pl-4">
            {intelligentTrafficInfo.features.map(({ label, to }) => (
              <Link
                to={to}
                key={to}
                className="block px-3 py-2 rounded hover:text-yellow-500 transition-colors text-muted-foreground cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Applications Section */}
      <div className="bg-card max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold">Applications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {applications.map(({ label, icon }) => (
            <div
              key={label}
              className="p-6 bg-background-200 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-default flex flex-col items-center text-muted-foreground"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <div className="text-lg font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-card p-8 rounded-xl max-w-3xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-semibold">Contact Us</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Have questions or need a custom solution? Reach out to our experts today.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <Input placeholder="Your Name" required />
          <Input placeholder="Contact Number" required />
          <Input
            type="email"
            placeholder="Email Address"
            required
            className="md:col-span-2"
          />
          <Textarea
            placeholder="Your Message"
            required
            className="md:col-span-2 min-h-[120px]"
          />
          <Button
            type="submit"
            className="md:col-span-2 bg-primary hover:bg-primary-hover"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CamerasPage;
