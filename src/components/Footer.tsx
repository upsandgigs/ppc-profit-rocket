
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-accent">Ups</span>AndGigs
            </Link>
            <p className="mt-4 text-gray-400">
              Amazon PPC & Marketing Services that drive sales and profitability.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Amazon PPC</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Listing Optimization</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Product Photography</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Inventory Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Email: info@upsandgigs.com</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
            </address>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent">
                <span className="sr-only">Facebook</span>
                FB
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <span className="sr-only">Twitter</span>
                TW
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <span className="sr-only">LinkedIn</span>
                LI
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} UpsAndGigs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
