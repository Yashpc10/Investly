
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MatchingSystem from '@/components/MatchingSystem';
import InvestorDashboard from '@/components/InvestorDashboard';
import VirtualPitch from '@/components/VirtualPitch';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MatchingSystem />
        <InvestorDashboard />
        <VirtualPitch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
