import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic (API call, etc.)
    alert(`Thank you, ${formData.name}! We'll contact you soon.`);
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Get Started with Y
        </h1>
        <p className="text-muted-foreground mb-12 text-center text-lg leading-relaxed">
          Ready to accelerate your business with cutting-edge technology? Fill out the form below to get personalized solutions and support from our expert team.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="company"
            placeholder="Company Name (optional)"
            value={formData.company}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Tell us about your needs or project"
            value={formData.message}
            onChange={handleChange}
            className="min-h-32"
          />
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300"
            size="lg"
          >
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
};

export default GetStartedPage;
