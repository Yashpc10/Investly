
import React from 'react';
import { Check, Users, Filter, Brain, Video, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-secondary" />,
    title: 'Startup Profiles',
    description: 'Showcase your pitch deck, traction metrics, and funding needs to the right investors.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300&auto=format&fit=crop'
  },
  {
    icon: <Filter className="w-8 h-8 text-secondary" />,
    title: 'Investor Dashboard',
    description: 'Filter startups by industry, stage, and risk level to find your perfect investment opportunity.',
    image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=300&auto=format&fit=crop'
  },
  {
    icon: <Brain className="w-8 h-8 text-secondary" />,
    title: 'AI-Based Matching',
    description: 'Our algorithm recommends startups aligned with investor interests and investment history.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&auto=format&fit=crop'
  },
  {
    icon: <Video className="w-8 h-8 text-secondary" />,
    title: 'Virtual Pitch Events',
    description: 'Host or join live Q&A sessions between founders and potential backers.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=300&auto=format&fit=crop'
  },
  {
    icon: <Shield className="w-8 h-8 text-secondary" />,
    title: 'Verification System',
    description: 'All users undergo a strict verification process to prevent scams and ensure quality.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop'
  },
  {
    icon: <Zap className="w-8 h-8 text-secondary" />,
    title: 'Focus on Early Stage',
    description: 'Specially designed for seed and early-stage startups looking for their first investments.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=300&auto=format&fit=crop'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-10 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="text-[#D4AF37]">Exceptional Features</span> for <span className="text-[#1C1C1E]">Discerning Investors</span>
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 max-w-2xl mx-auto leading-relaxed">
            Our platform is meticulously crafted to elevate the fundraising and investment process,
            providing an exclusive experience for both startups and investors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-[#9C9C9C]/20 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <div className="mb-4 p-3 bg-[#D4AF37]/10 inline-block rounded-lg">
                {React.cloneElement(feature.icon, { className: "w-8 h-8 text-[#D4AF37]" })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1E]">{feature.title}</h3>
              <p className="text-[#1A1A1A]/80 leading-relaxed">{feature.description}</p>
              <div className="mt-6 pt-4 border-t border-[#9C9C9C]/20">
                <div className="flex items-center text-sm text-[#9C9C9C]">
                  <Check size={16} className="mr-2 text-[#D4AF37]" />
                  <span>Premium feature</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
