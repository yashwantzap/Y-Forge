import { useEffect, useState } from "react";
import image1 from "@/assets/slideshow/image1.png";
import image2 from "@/assets/slideshow/image2.png";
import image3 from "@/assets/slideshow/image3.png";
import image4 from "@/assets/slideshow/image4.png";
import image5 from "@/assets/slideshow/image5.png";

const slides = [image1, image2, image3, image4, image5];

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Building Tomorrow's{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Digital World
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principle that technology should empower businesses to reach their full potential, Y combines cutting-edge innovation with practical solutions that deliver real results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of expert engineers, data scientists, and strategists work collaboratively to create transformative digital experiences that drive sustainable growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a commitment to continuous learning and adaptation, we stay ahead of industry trends and emerging technologies. This ensures our clients benefit from solutions that are both innovative and future-proof.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe success is achieved through strong partnerships. Our approach is highly collaborative, aligning closely with client goals to tailor strategies that maximize impact and ROI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Y, sustainability and social responsibility are deeply embedded in our culture. We strive to build not just profitable solutions, but ethical and inclusive technologies that contribute positively to society.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl p-8 h-96 shadow-elegant overflow-hidden flex items-center justify-center">
            {slides.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
