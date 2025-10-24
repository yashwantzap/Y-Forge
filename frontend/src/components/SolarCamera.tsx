import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import panoramicImage from "@/assets/solar-background.png";

const features = [
  "4G + Solar-powered for Quick Installation",
  "4MP High-Quality Images with 120dB Super WDR",
  "Object Classification & AI Video Analytics",
  "Built-in High-Accuracy GPS Module",
  "Up to 6×90Wh Battery & 2×90W Solar Panel",
  "9-Day Battery Life with Continuous Recording",
  "Flexible Working Modes for Enhanced Efficiency",
  "Eco-Friendly, Ultra-Low Power Consumption (2W Average)",
];

const workingModes = [
  {
    name: "Performance Mode",
    description:
      "Delivers full functionality for high-demand security scenarios; ideal for critical sites needing continuous, detailed coverage.",
  },
  {
    name: "Eco Mode",
    description:
      "Balances AI detection and power efficiency, providing dynamic frame rate recording that extends battery life.",
  },
  {
    name: "Sleep Mode",
    description:
      "Enables periodic image capture and ultra-low power use, perfect for long-term monitoring of low-activity areas.",
  },
];

const scenarios = [
  {
    title: "Construction Sites",
    description:
      "Enhance job site security, prevent theft, and monitor project progress with remote visual access.",
    image: "/assets/solar/costruction-site.png",
  },
  {
    title: "Illegal Dumping Prevention",
    description:
      "Use AI analytics to identify and record unauthorized dumping activities in remote areas.",
    image: "/assets/solar/dumping.png",
  },
  {
    title: "Community Safety",
    description:
      "Deploy the system in neighborhood areas to deter vandalism and enhance public safety.",
    image: "/assets/solar/community.png",
  },
  {
    title: "Remote Security",
    description:
      "Perfect for farmlands, energy facilities, and off-grid zones requiring always-on monitoring.",
    image: "/assets/solar/remote-security.png",
  },
];

const relatedProducts = [
  {
    name: "4G Solar-powered Traffic Sensing Camera",
    description: "AI and radar technology enable precise event triggering and evidence capture.",
    image: "/assets/solar/4glpr.png",
  },
  {
    name: "4G Solar-powered ANPR Camera",
    description: "Intelligent license plate recognition with edge AI for parking and access control.",
    image: "/assets/solar/4g-solar-powered-anpr.png",
  },
  {
    name: "AI Dual-sensor 180° Panoramic Camera",
    description: "Provides a seamless 180° stitched view for detailed scene awareness.",
    image: "/assets/solar/4g-product.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const panoramicImageUrl = "/assets/bg.jpg";

export default function SolarPoweredCameraPage() {
  return (
    <main className="relative py-20">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
      style={{ backgroundImage: `url(${panoramicImage})` }}
      aria-hidden="true"
    />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl space-y-16">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-green-500 bg-clip-text text-transparent">
                4G Solar-powered Security Camera
              </span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700">
              All-in-one Security Kit — Green, Intelligent, and Efficient. Secure your assets off-grid using AI-powered analytics, solar energy, and 4G connectivity for anywhere-anytime protection.
            </p>
            <Link to="/get-started">
              <Button className="bg-primary hover:bg-primary-hover shadow-lg transition-all">
                Get Started with Yashco Solutions
              </Button>
            </Link>
          </div>
          <div>
            <img
              src="/assets/solar/hero.png"
              alt="4G Solar-powered Camera"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </section>

        {/* Features */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl mb-6 font-semibold text-gray-800">Key Features</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
            {features.map((feat) => (
              <motion.li key={feat} variants={itemVariants}>
                {feat}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Working Modes */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-card p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Flexible Working Modes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workingModes.map(({ name, description }) => (
              <motion.div
                key={name}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform duration-300"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{name}</h3>
                <p className="text-gray-700">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Scenario Cards */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-10"
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
            Enhancing Security Across Scenarios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenarios.map(({ title, description, image }) => (
              <motion.div
                key={title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
              >
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Related Products */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-10"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map(({ name, description, image }) => (
              <motion.div
                key={name}
                className="bg-card border border-border shadow-md rounded-lg overflow-hidden hover:shadow-glow transition-shadow text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img src={image} alt={name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{name}</h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/contact">
            <Button className="px-10 py-4 text-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-600 text-white shadow-lg rounded-full transition-all duration-300">
              Order Now!
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
