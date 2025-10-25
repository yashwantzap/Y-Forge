import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Y - Pioneering Technology Solutions" className="h-8 w-auto" />
        <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          YASHCO SOLUTIONS
        </span>
      </Link>
            <p className="text-background/80 mb-6 max-w-sm">
              Pioneering the future of technology with innovative solutions that transform businesses and accelerate growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Twitter
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link to="/ai-solutions" className="hover:text-background transition-colors">
                  AI solutions
                </Link>
              </li>
              <li>
                <Link to="/cameras" className="hover:text-background transition-colors">
                  Camera Solutions
                </Link>
              </li>
              <li>
                <Link to="/data-analytics" className="hover:text-background transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="hover:text-background transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/about" className="hover:text-background transition-colors">
                  About
                </Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">
                  Carrers
                </Link></li>
              <li><Link to="/get-started" className="hover:text-background transition-colors">
                  Contact
                </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2025 Yashco Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
