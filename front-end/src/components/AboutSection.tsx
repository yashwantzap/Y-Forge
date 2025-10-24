import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import bg1 from "@/assets/slideshow/image5.png";
import bg2 from "@/assets/slideshow/image2.png";
import bg3 from "@/assets/slideshow/image3.png";
import bg4 from "@/assets/slideshow/image4.png";


const backgrounds = [bg1, bg2, bg3, bg4];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10">
        {backgrounds.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Background ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Optional overlay to dim background */}
        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>
      </div>

      {/* Foreground content */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            Building Tomorrow&apos;s{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital World
            </span>
          </h2>
          <p className="text-lg leading-relaxed">
            Founded on the principle that technology should empower businesses to reach their full potential, Y combines cutting-edge innovation with practical solutions that deliver real results.
          </p>
          <p className="text-lg leading-relaxed">
            Our team of expert engineers, data scientists, and strategists work collaboratively to create transformative digital experiences that drive sustainable growth.
          </p>

          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>

          <Link to="/about">
            <Button className="bg-secondary hover:bg-secondary-hover shadow-elegant transition-all duration-300">
              Learn Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
