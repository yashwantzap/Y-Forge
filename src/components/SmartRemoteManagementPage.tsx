import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  "Easy, remote, and efficient management & maintenance of on-site devices",
  "Powerful combination of CCTV Router, Mobile App, and Central Management System",
  "Speedy on-site problem solving",
];

const endUserSteps = [
  "Connect router with Yashco network cameras and NVRs",
  "Add Yashco CCTV Router URS to Yashco Pro App",
  "Devices auto-listed in app",
  "Configure access permissions",
];

const installerTechnicianSteps = [
  "Add Router to Yashco CMS via serial number",
  "Devices with permissions list in CMS",
  "Enter credentials for batch config",
  "Retrieve permissions after maintenance",
];

const benefitsEnd = [
  "One-click device search",
  "Easy permission configuration",
];

const benefitsInstaller = [
  "Professional central management",
  "Remote bulk configuration",
  "Reduced site visits and costs",
];

const remoteConfig = [
  "Device maintenance: upgrade, reboot, sync",
  "Network config: activation, DDNS, UPnP",
  "Video/audio/image parameter controls",
  "NVR channel status monitoring",
];

const relatedProducts = [
  {
    name: "Yashco Pro Mobile App",
    description: "Manage devices on the go",
    image: "/assets/remote/app.png",
  },
  {
    name: "Yashco Router URS",
    description: "Enables remote device access",
    image: "/assets/remote/router.png",
  },
  {
    name: "Yashco CMS",
    description: "Cloud-based management platform",
    image: "/assets/remote/cms.png",
  },
  {
    name: "Yashco Network Cameras",
    description: "Reliable security hardware",
    image: "/assets/remote/nvr.png",
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

export default function SmartRemoteManagementPage() {
  return (
    <main className="relative min-h-screen py-20">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85 -z-10"
        style={{ backgroundImage: "url('/assets/remote/hero-image.png')" }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8 max-w-6xl space-y-20 text-white">
        {/* Hero */}
        <motion.section
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Yashco Solutions <br /> Smart Remote Management
          </motion.h1>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-lg"
            variants={itemVariants}
          >
            Designed for installers and security providers, enabling efficient remote management and maintenance.
          </motion.p>
        </motion.section>

        {/* Features */}
        <motion.section
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl mb-8 font-semibold text-black">Key Features</h2>
          <ul className="max-w-3xl mx-auto space-y-4 list-disc list-inside text-black">
            {features.map((f, i) => (
              <motion.li key={i} variants={itemVariants}>
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* How it works - End User */}
        <motion.section
          className="bg-card rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h3 className="text-2xl mb-6 font-semibold text-black">For End User</h3>
            <ol className="list-decimal list-inside space-y-3 text-black">
              {endUserSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </motion.div>
          <motion.img
            src="/assets/remote/user.jpg"
            alt="Person using remote app"
            className="md:w-1/2 rounded-lg object-cover"
            variants={itemVariants}
          />
        </motion.section>

        {/* How it works - Installer */}
        <motion.section
          className="bg-card rounded-xl shadow-lg p-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h3 className="text-2xl mb-6 font-semibold text-yellow-500">For Installers & Technicians</h3>
          <ol className="list-decimal list-inside space-y-3 text-black">
            {installerTechnicianSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </motion.section>

        {/* Benefits */}
        <motion.section
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="bg-card rounded-xl shadow-lg p-10" variants={itemVariants}>
            <h3 className="text-xl mb-4 font-semibold text-yellow-500">Benefits for End User</h3>
            <ul className="list-disc list-inside text-black space-y-2">
              {benefitsEnd.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="bg-card rounded-xl shadow-lg p-10" variants={itemVariants}>
            <h3 className="text-xl mb-4 font-semibold text-yellow-500">Benefits for Installer</h3>
            <ul className="list-disc list-inside text-black space-y-2">
              {benefitsInstaller.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* Remote Configuration */}
        <motion.section
          className="bg-card rounded-xl shadow-lg p-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h3 className="text-2xl mb-6 font-semibold text-yellow-500">Remote Configuration &amp; Maintenance</h3>
          <ul className="list-disc list-inside space-y-3 text-black">
            {remoteConfig.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.section>

        {/* Related Products */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-10"
        >
          <h2 className="text-3xl text-center font-semibold text-white">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {relatedProducts.map(({ name, description, image }, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-glow transition-transform duration-300"
                variants={itemVariants}
              >
                <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-5" />
                <h4 className="text-lg font-semibold text-black">{name}</h4>
                <p className="text-center text-black">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/get-started">
            <Button className="px-16 py-4 text-lg bg-black hover:from-purple-600 hover:to-blue-500 text-white shadow-lg transition-all duration-300">
              Contact Yashco Solutions
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
