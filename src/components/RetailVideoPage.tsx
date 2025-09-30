import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const cameras = [
  {
    name: "Bullet Cameras",
    description:
      "Robust and visible deterrents for entrances and perimeters, with IP67 and IK10 protection plus proactive response.",
    image: "/assets/retail/pro-bullet-plus.png",
  },
  {
    name: "Dome Cameras",
    description:
      "Discreet and versatile for indoor applications including checkout and aisles.",
    image: "/assets/ptz/ptz-dome.png",
  },
  {
    name: "PTZ Cameras",
    description:
      "Flexible pan-tilt-zoom functionality with high-res detail for large areas.",
    image: "/assets/retail/pan-tilt.png",
  },
  {
    name: "360° Fisheye Cameras",
    description:
      "Ultra-wide coverage with 360° view, people counting, and heatmap analytics.",
    image: "/assets/retail/360.png",
  },
  {
    name: "180° Panoramic Cameras",
    description:
      "Seamless 180° panoramic view with distortion-free stitching and monitoring.",
    image: "/assets/retail/panoromic.png",
  },
];

const features = [
  "AI-powered video analytics",
  "Crystal clear detail with advanced sensors",
  "24/7 TrueColor imaging",
  "Wide compatibility with major VMS",
  "Robust, weatherproof & vandal resistant designs",
];

const successStories = [
  {
    title: "6-Month ROI at Pet Store Chain",
    summary:
      "Boosted sales by 10% and customer satisfaction by 15% through heatmap-driven layout optimization.",
  },
  {
    title: "Comprehensive Security with 571 Cameras",
    summary:
      "Achieved broad coverage with advanced tech, enabling real-time response across multiple sites.",
  },
  {
    title: "Discreet Security in Luxury Retail",
    summary:
      "Maintained aesthetics with flush-mount design while reducing theft and liability.",
  },
  {
    title: "Smart Operation of Unmanned Stores",
    summary:
      "Reduced labor costs by 60% and increased sales significantly with round-the-clock AI monitoring.",
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

export default function RetailCamerasPage() {
  return (
    <main className="relative py-20 min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/assets/retail/hero.png')" }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl space-y-20">
        {/* Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h1
            className="bg-gradient-primary bg-clip-text text-transparent text-4xl sm:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Yashco Solutions <br /> Comprehensive AI-Powered Cameras
          </motion.h1>
          <motion.p className="text-lg max-w-3xl mx-auto text-gray-700" variants={itemVariants}>
            Cutting-edge surveillance technology tailored to modern retail needs.
          </motion.p>
        </motion.section>

        {/* Features */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.ul className="list-disc list-inside space-y-3 text-black" variants={itemVariants}>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Cameras Grid */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cameras.map(({ name, description, image }) => (
            <motion.div
              key={name}
              className="bg-card rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image} alt={name} className="w-full h-58 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map(({ title, summary }) => (
              <motion.div
                key={title}
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-700">{summary}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/get-started">
            <Button className="px-16 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transition duration-300">
              Contact Yashco Solutions
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
