import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg"; // make sure the logo is in src/assets/logo.png

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
          <img
  src={logo}
  alt="Investly Logo"
  className="w-10 h-10 object-contain rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
/>

            <span className="text-2xl font-bold text-gray-800">Investly</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li><a href="#features" className="text-gray-700 hover:text-investly-600 transition-colors">Features</a></li>
            <li><a href="#startups" className="text-gray-700 hover:text-investly-600 transition-colors">Startups</a></li>
            <li><a href="#investors" className="text-gray-700 hover:text-investly-600 transition-colors">Investors</a></li>
            <li><a href="#events" className="text-gray-700 hover:text-investly-600 transition-colors">Pitch Events</a></li>
          </ul>

          <div className="flex gap-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-investly-600 text-investly-600 hover:bg-investly-50"
              >
                Log In
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                className="bg-gradient-to-r from-investly-600 to-investblue-600 hover:from-investly-700 hover:to-investblue-700 text-white"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="flex flex-col p-5 space-y-4">
            <ul className="flex flex-col gap-4">
              <li><a href="#features" className="text-gray-700 hover:text-investly-600 transition-colors">Features</a></li>
              <li><a href="#startups" className="text-gray-700 hover:text-investly-600 transition-colors">Startups</a></li>
              <li><a href="#investors" className="text-gray-700 hover:text-investly-600 transition-colors">Investors</a></li>
              <li><a href="#events" className="text-gray-700 hover:text-investly-600 transition-colors">Pitch Events</a></li>
            </ul>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-investly-600 text-investly-600 hover:bg-investly-50 w-full"
                >
                  Log In
                </Button>
              </Link>

              <Link to="/signup">
                <Button
                  className="bg-gradient-to-r from-investly-600 to-investblue-600 hover:from-investly-700 hover:to-investblue-700 text-white w-full"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
