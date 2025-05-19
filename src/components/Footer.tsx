
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-Investly-600 to-investblue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Investly</span>
            </div>
            
            <p className="text-gray-700 mb-6">
              Connecting innovative startups with the right investors through our AI-powered matching platform.
            </p>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin size={18} />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "#" },
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 hover:text-Investly-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* For Startups/Investors */}
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { label: "For Startups", href: "#startups" },
                { label: "For Investors", href: "#investors" },
                { label: "Virtual Events", href: "#events" },
                { label: "Blog", href: "#" },
                { label: "Success Stories", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 hover:text-Investly-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-700 mb-4">
              Subscribe to stay updated with the latest investment opportunities and startup news.
            </p>
            
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-venturevein-500"
                />
              </div>
              <Button className="bg-Investly-600 hover:bg-Investly-700 text-white">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Investly. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Cookie Policy", href: "#" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-Investly-600 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
