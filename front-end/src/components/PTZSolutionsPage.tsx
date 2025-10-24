import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Powerful Performance",
    points: [
      "No blind spot. No boundary of distance. No barrier of vision.",
      "Provides overall protection from here to there.",
      "360° continuous rotation and up to 95° tilt for exceptional coverage.",
      "High resolution up to 4K and zooming capability up to 42X.",
    ],
  },
  {
    title: "Tactful Guardian",
    points: [
      "PTZ Auto Tracking to follow targets automatically.",
      "PTZ Privacy Mask for privacy protection.",
      "AI Deep Learning and 3D Positioning.",
    ],
  },
  {
    title: "Zeal for Details",
    points: [
      "See farther, see clearer with 0.001Lux Starlight sensor.",
      "Smart IR II technology for superior illumination.",
      "140dB Super WDR for sharpness in challenging lighting.",
    ],
  },
  {
    title: "Benefits",
    points: [
      "Expanded vision & greater visibility.",
      "Smarter system with enhanced safety.",
      "Round-the-clock operation and all-round protection.",
    ],
  },
];

const applications = [
  "Square",
  "Stadium",
  "School",
  "Harbor",
  "Airport",
  "Parking Lot",
  "Station",
  "City Surveillance",
];

const relatedProducts = [
  { name: "AI 12X PTZ Bullet Camera", image: "/assets/ptz/ptz-bullet.png" },
  { name: "AI 12X/20X/23X PTZ Dome Camera", image: "/assets/ptz/ptz-dome.png" },
  { name: "AI 23X/30X Speed Dome Camera", image: "/assets/ptz/ptz-speed-dome.png" },
  { name: "AI 36X/42X Speed Dome Camera", image: "/assets/ptz/ptz-speed-dome2.png" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0, transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PTZSolutionPage = () => (
  <main className="py-20 relative">
    {/* Hero with background image */}
    <section
      className="relative h-96 flex items-center justify-center text-center text-white bg-cover bg-center rounded-2xl shadow-lg"
      style={{ backgroundImage: "url('/assets/ptz/ptz-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl" />
      <motion.div
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Yashco Solutions <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            AI PTZ Camera Series
          </span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Pan, tilt and zoom freely with 4K clarity and intelligent video analysis to monitor large areas with a single camera.
        </p>
      </motion.div>
    </section>

    <div className="container max-w-7xl mx-auto mt-16 space-y-20 px-4 sm:px-6 lg:px-8">
      {/* Features Cards */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-8"
      >
        {features.map(({ title, points }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            className="bg-card p-6 shadow-elegant rounded-lg"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px hsl(45 100% 51%)" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {title}
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Application Scenarios */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="bg-card p-6 shadow-elegant rounded-xl text-foreground"
      >
        <h2 className="text-3xl font-semibold mb-6">Application Scenarios</h2>
        <div className="flex flex-wrap gap-4 text-lg">
          {applications.map((app) => (
            <span
              key={app}
              className="bg-primary/20 text-primary px-4 py-2 rounded-md font-medium"
            >
              {app}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Related Products */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
          Related Products
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {relatedProducts.map(({ name, image }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="bg-card shadow-elegant rounded-lg overflow-hidden cursor-pointer hover:shadow-glow transition-shadow duration-300"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-foreground font-semibold text-center">
                {name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Call-to-Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/get-started">
          <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
            Learn More and Get Started
          </Button>
        </Link>
      </motion.div>
    </div>
  </main>
);

export default PTZSolutionPage;
