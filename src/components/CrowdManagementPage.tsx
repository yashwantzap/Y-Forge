import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Yashco Network Camera",
    description: "Smart camera compatible with crowd management systems.",
    image: "/assets/crowd/camera1.png",
  },
  {
    name: "Yashco Central Management System",
    description:
      "Platform to manage video analytics and reports from multiple cameras.",
    image: "/assets/crowd/camera2.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const CrowdManagementPage = () => (
  <main className="relative py-20">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: "url('/assets/crowd/gathering.png')" }}
      aria-hidden="true"
    />

    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-20">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center"
      >
        <motion.h1
          className="text-4xl sm:text-4xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-6"
          variants={itemVariants}
        >
          Yashco Solutions <br />
          Crowd Management Solution
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-black"
          variants={itemVariants}
        >
          Integrated surveillance combining smart cameras and central management to monitor real-time occupancy and optimize staff and resources.
        </motion.p>
      </motion.section>

      {/* Solution Features */}
      <motion.section
        className="grid md:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="bg-card rounded-lg shadow-elegant p-6 flex flex-col items-center text-center mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Real-time Occupancy</h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>People counting and accurate occupancy detection in high-density areas.</li>
            <li>Dashboard displays facility occupancy to indicate limits.</li>
            <li>Filters out misinformation of repeated entries/exits.</li>
            <li>Timely informs control measures at entry points.</li>
          </ul>
          <div className="bg-card rounded-lg shadow-elegant p-6 flex flex-col items-center text-center mt-6">
    <img
      src="/assets/crowd/camera.jpeg"
      alt="Central Management Dashboard"
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold mb-2"></h3>
    <p className="text-muted-foreground">Manage and analyze data from crowd management cameras with real-time insights.</p>
  </div>
        </motion.div>

  <motion.div variants={itemVariants} className="bg-card rounded-lg shadow-elegant p-6 flex flex-col items-center text-center mt-6">
  <h2 className="text-2xl font-semibold mb-4 text-foreground">Central Management System</h2>
  <ul className="list-disc list-inside space-y-2 text-black">
    <li>Manages large-scale data from multiple cameras in real time.</li>
    <li>Access reports daily, weekly, or monthly from anywhere.</li>
    <li>Audio alarm triggers when occupancy limits breach.</li>
  </ul>
  <div className="bg-card rounded-lg shadow-elegant p-6 flex flex-col items-center text-center mt-6">
    <img
      src="/assets/crowd/crowd-hero.jpg"
      alt="Central Management Dashboard"
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold mb-2"></h3>
    <p className="text-muted-foreground">Manage and analyze data from crowd management cameras with real-time insights.</p>
  </div>
</motion.div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-14"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-center text-foreground mb-8">Benefits</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 text-muted-foreground">
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-elegant">
            <h3 className="font-semibold text-xl mb-3 text-black">Staff Optimization</h3>
            <p>
              Effective resource allocation based on peak times improves revenue and operational efficiency. Reduces manual counting and physical contact.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-elegant">
            <h3 className="font-semibold text-xl mb-3 text-black">Big Data, Big Value</h3>
            <p>
              Video analytics combined with insightful reports empower strategic business decisions for marketing, sales, and operations.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-card p-6 rounded-lg shadow-elegant">
            <h3 className="font-semibold text-xl mb-3 text-black">Zero Hardware Cost</h3>
            <p>
              Easily upgrade existing supported hardware online without replacement, including both cameras and management system.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Application Sectors */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="bg-card p-8 rounded-xl shadow-elegant text-foreground"
      >
        <h2 className="text-3xl font-semibold mb-6">Applicable Sectors</h2>
        <div className="flex flex-wrap gap-4 text-lg">
          {["Retail", "Airport", "Hospital", "Warehouse", "Education", "Public Transport", "Events & Exhibition", "Manufacturing"].map((sector) => (
            <span key={sector} className="bg-primary/20 text-primary px-4 py-2 rounded-md font-medium">
              {sector}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Products */}
      <motion.section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center text-foreground">Products</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {products.map(({ name, description, image }) => (
            <motion.div
              key={name}
              className="bg-card rounded-lg p-6 shadow-elegant flex items-center space-x-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img src={image} alt={name} className="w-32 h-24 object-cover rounded-lg" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">{name}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div className="text-center mt-16">
        <Link to="/get-started">
                  <Button className="bg-primary hover:bg-primary-hover shadow-elegant hover:shadow-glow transition-all duration-300">
                    Learn More and Get Started
                  </Button>
                </Link>
      </motion.div>
    </div>
  </main>
);

export default CrowdManagementPage;
