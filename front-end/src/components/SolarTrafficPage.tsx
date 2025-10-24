import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  "Radar Triggered Vehicle Capture",
  "AI Algorithm for Accurate Focus",
  "Low Consumption Technology",
  "Solar-powered for Constant Use",
  "4G LTE for Wireless Data Transmission",
  "MQTT & HTTP Protocol for Seamless Integration",
];

const capabilities = [
  "Capture Rate: Up to 98%",
  "Optimal Capture Distance: 6m (6mm lens), 15-20m (16mm lens)",
  "Coverage: 2 lanes (8m)",
  "Nighttime Illumination: Up to 25m",
  "Wireless Network: 4G LTE with multiple bands",
  "GPS: Built-in High-accuracy GPS Module",
  "Storage: Support up to 256G microSD/SDHC/SDXC",
  "Weatherproof: IP66 Certified",
];

const applications = [
  { title: "Traffic Flow Collection", description: "24/7 traffic flow monitoring and management using wireless deployment." ,image: "/assets/solar/traffic-flow.png"},
  { title: "Parking Lot Entry/Exit Capture", description: "Vehicle time records for efficient parking fee collection.",image: "/assets/solar/parking-lot-e.png" },
  { title: "Illegal Parking Capture", description: "Monitor and record illegal parking and load zones occupancy.",image: "/assets/solar/illegal-parking.png" },
  { title: "Safer Neighborhoods", description: "Reduce crime rate with continuous evidence capture day and night.",image: "/assets/solar/neighbourhood.png" },
  { title: "Specific Lane Capture", description: "Detect unauthorized use of non-motorized or bus lanes.",image: "/assets/solar/specific-lane.png" },
];

const relatedProducts = [
  {
    name: "4G Solar-powered Security Camera",
    description: "All-in-one security kit with AI video analytics and solar power.",
    image: "/assets/solar/4g-product.png",
  },
  {
    name: "AI Dual-sensor 180° Panoramic Camera",
    description: "Wide-angle surveillance with AI-powered analytics and seamless stitching.",
    image: "/assets/solar/4g-solar-powered-anpr.png",
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

export default function SolarTrafficSensingCameraPage() {
  return (
    <main className="relative py-20 bg-gray-50 min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/assets/solar/solar-bg.jpg')" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl space-y-20 text-gray-800">
        {/* Hero Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              4G Solar-powered Traffic Sensing Camera
            </h1>
            <p className="mb-6">
              Easily deploy, sharply detect traffic events with wireless 4G LTE connectivity, powered by solar energy for reliable off-grid use.
            </p>
            <Link to="/get-started">
              <Button className="bg-primary hover:bg-primary-dark transition duration-300 shadow-lg">
                Get Started with Yashco Solutions
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <img src="/assets/solar/4glpr.png" alt="4G Solar-powered Traffic Sensing Camera" className="rounded-lg shadow-lg object-cover w-full" />
          </motion.div>
        </motion.section>

        {/* Features */}
        <motion.section
          className="bg-white p-8 rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 list-disc list-inside text-gray-700">
            {features.map((feature) => (
              <motion.li key={feature} variants={itemVariants}>{feature}</motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Technical Capabilities */}
        <motion.section
          className="bg-white p-6 rounded-md shadow-md"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-semibold mb-4">Specifications & Capabilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {capabilities.map((item, idx) => (
              <motion.li key={idx} variants={itemVariants}>{item}</motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Applications */}
        <motion.section
          className="space-y-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">
            Applications and Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {applications.map(({ title, description, image }, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
                {image && (
                  <img src={image} alt={title} className="w-full h-40 object-cover" />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
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
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedProducts.map(({ name, description, image }, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <img src={image} alt={name} className="w-full h-36 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{name}</h3>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/get-started">
            <Button className="px-16 py-4 text-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 shadow-lg rounded-full transition-all duration-300">
              Contact Yashco Solutions
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
