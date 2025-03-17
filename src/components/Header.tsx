
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-secondary">
            <span className="text-accent">Ups</span>AndGigs
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-secondary hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-secondary hover:text-accent font-medium transition-colors">
            Services
          </Link>
          <Link to="/case-studies" className="text-secondary hover:text-accent font-medium transition-colors">
            Case Studies
          </Link>
          <Link to="/about" className="text-secondary hover:text-accent font-medium transition-colors">
            About
          </Link>
          <Button className="bg-accent hover:bg-accent/90 text-secondary font-semibold">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-secondary hover:text-accent py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-secondary hover:text-accent py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/case-studies" 
                className="text-secondary hover:text-accent py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/about" 
                className="text-secondary hover:text-accent py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button 
                className="bg-accent hover:bg-accent/90 text-secondary font-semibold w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
