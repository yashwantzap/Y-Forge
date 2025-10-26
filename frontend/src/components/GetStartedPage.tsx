import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MessageSquare, Clock, Rocket, ArrowRight, Phone, Mail, Calendar } from "lucide-react";

const GetStartedSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "IT Services",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = `${formData.firstName} ${formData.lastName}`.trim();

    const body = {
      name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || "N/A",
      serviceType: formData.serviceType,
      message: formData.message,
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      console.log('🔄 Sending to:', `${API_URL}/api/contact`);
      console.log('📦 Body:', body);
      
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log('📡 Response status:', res.status);

      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await res.text();
        console.error('❌ Non-JSON response:', textResponse);
        throw new Error(`Server returned non-JSON response. Status: ${res.status}`);
      }

      const data = await res.json();
      console.log('📨 Response data:', data);
      
      if (res.ok) {
        alert("✅ Message sent successfully! We'll get back to you within 24 hours.");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "IT Services",
          message: "",
        });
      } else {
        alert("❌ Error: " + (data.error || "Failed to send message"));
      }
    } catch (error) {
      console.error("❌ Full error:", error);
      
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        alert("❌ Cannot reach server. Please check if the API is running.");
      } else if (error instanceof Error) {
        alert("❌ Error: " + error.message);
      } else {
        alert("❌ An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      icon: MessageSquare,
      title: "1. Fill Out the Form",
      description: "Tell us about your project, goals, and requirements. The more details you provide, the better we can help you."
    },
    {
      icon: Phone,
      title: "2. We Contact You",
      description: "Our team will reach out within 24 hours to discuss your project in detail and answer any questions."
    },
    {
      icon: Rocket,
      title: "3. Start Building",
      description: "Once we understand your needs, we'll create a custom solution and begin transforming your vision into reality."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24-Hour Response",
      description: "Get a response from our team within one business day"
    },
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "No-obligation discussion about your project"
    },
    {
      icon: CheckCircle2,
      title: "Custom Solutions",
      description: "Tailored approach for your unique needs"
    }
  ];

  return (
    <section id="get-started" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Fill out the form below and we'll contact you within 24 hours.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 border-card-border">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="shadow-elegant h-full hover:shadow-glow transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-4">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form - Same as ContactSection */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Start Your Project Today</CardTitle>
              <CardDescription className="text-lg">
                Fill out the form below and our team will reach out within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <Input
                  placeholder="Company (optional)"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  disabled={isSubmitting}
                >
                  <option value="IT Services">IT Services</option>
                  <option value="CCTV Solutions">CCTV Solutions</option>
                </select>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-32"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info Section */}
        <div className="text-center">
          <Card className="shadow-elegant bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4">
                Have Questions Before Getting Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Feel free to reach out directly to our team. We're available Monday-Friday, 9 AM - 6 PM IST.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2"
                  onClick={() => window.location.href = 'tel:+91 9581802345'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us: +91 95818 02345
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2"
                  onClick={() => window.location.href = 'mailto:contact@yashcosolutions.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ⭐⭐⭐⭐⭐ Rated 5.0 by our clients
          </p>
          <p className="text-muted-foreground">
            Join hundreds of satisfied customers who trust us with their technology needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
