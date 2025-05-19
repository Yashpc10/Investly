
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span className="font-medium">Revolutionizing Startup Funding</span>
          </div>
          
          <h1 className="mb-6 text-glow">
            <span className="gradient-text">Connect</span> Startups <br className="hidden md:block" />
            with <span className="gradient-text">Investors</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-700 max-w-lg">
            VentureVein makes it easy for founders to find the right investors
            and for investors to discover their next unicorn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/join-startup">
    <Button
      size="lg"
      className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white px-8 shadow-md shadow-primary/20"
    >
      Join as Startup
    </Button>
  </Link>
  <Link to="/join-investor">
    <Button
      size="lg"
      variant="outline"
      className="border-primary text-primary hover:bg-primary/10 px-8"
    >
      Join as Investor
    </Button>
  </Link>
</div>

          <div className="mt-10 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[
                { initials: 'JS', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&auto=format&fit=crop&q=60&crop=faces', color: 'bg-blue-500' },
                { initials: 'KL', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&auto=format&fit=crop&q=60&crop=faces', color: 'bg-purple-500' },
                { initials: 'MR', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&auto=format&fit=crop&q=60&crop=faces', color: 'bg-red-500' },
                { initials: 'TD', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&h=50&auto=format&fit=crop&q=60&crop=faces', color: 'bg-green-500' }
              ].map((user, i) => (
                <div key={i} className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white">
                  <img 
                    src={user.img} 
                    alt={`User ${user.initials}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold ring-2 ring-white">
                +43
              </div>
            </div>
            <p className="text-gray-700">
              <span className="font-bold">500+</span> startups already connected
            </p>
          </div>

          <button 
            onClick={scrollToFeatures} 
            className="mt-16 flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-white shadow-lg animate-pulse-slow"
          >
            <ChevronDown className="text-primary" />
          </button>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover-scale">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" 
              alt="Founders in a meeting" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-xl font-bold">Get your startup funded faster</p>
                <p className="text-white/80">Connect with investors who believe in your vision</p>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
