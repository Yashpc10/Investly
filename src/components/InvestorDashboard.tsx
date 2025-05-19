
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Filter, Users, BookOpen, PieChart, TrendingUp, BrainCog } from "lucide-react";
import StartupProfileCard from "@/components/StartupProfileCard";

// Mock data for startups
const startupsMock = [
  {
    name: "EcoTech Solutions",
    logo: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=50&h=50&auto=format&fit=crop&q=60&crop=faces",
    industry: "CleanTech",
    description: "Developing affordable solar panels with 34% higher efficiency using new materials.",
    funding: "Seeking $1.2M",
    traction: "16% MoM growth",
    location: "San Francisco, CA",
    matchPercentage: 92,
    teamSize: 7,
    foundedYear: 2022
  },
  {
    name: "MediSync",
    logo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=50&h=50&auto=format&fit=crop&q=60&crop=faces",
    industry: "HealthTech",
    description: "AI-powered platform that predicts medication side effects for patients with multiple conditions.",
    funding: "Seeking $800K",
    traction: "3 hospital partnerships",
    location: "Boston, MA",
    matchPercentage: 87,
    teamSize: 5,
    foundedYear: 2021
  },
  {
    name: "UrbanFarmers",
    logo: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=50&h=50&auto=format&fit=crop&q=60&crop=faces",
    industry: "AgTech",
    description: "Vertical farming solution for urban environments with 60% less water consumption.",
    funding: "Seeking $1.5M",
    traction: "2 commercial pilots",
    location: "Chicago, IL",
    matchPercentage: 78,
    teamSize: 9,
    foundedYear: 2020,
    pitchDate: "April 18, 2025"
  }
];

// Mock data for portfolio
const portfolioMock = [
  {
    name: "DataSift AI",
    logo: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=50&h=50&auto=format&fit=crop&q=60&crop=faces",
    industry: "Enterprise SaaS",
    description: "Data processing platform that automatically cleans and prepares datasets for ML models.",
    funding: "$2.1M invested",
    traction: "42% YoY revenue growth",
    location: "Austin, TX",
    matchPercentage: 0,
    teamSize: 12,
    foundedYear: 2019
  },
  {
    name: "SecureChain",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=50&h=50&auto=format&fit=crop&q=60&crop=faces",
    industry: "Cybersecurity",
    description: "Blockchain-based authentication system for enterprise security applications.",
    funding: "$750K invested",
    traction: "18 enterprise clients",
    location: "Seattle, WA",
    matchPercentage: 0,
    teamSize: 8,
    foundedYear: 2020
  }
];

const InvestorDashboard = () => {
  const [activeTab, setActiveTab] = useState("discover");
  const [industryFilter, setIndustryFilter] = useState("all");
  
  const filteredStartups = startupsMock.filter(startup => {
    if (industryFilter === "all") return true;
    return startup.industry.toLowerCase() === industryFilter.toLowerCase();
  });
  
  return (
    <section id="investors" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">Investor Dashboard</span> for Smart Capital Allocation
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Filter, discover, and track startups that match your investment criteria and portfolio strategy.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="discover" className="text-lg py-3">Discover Startups</TabsTrigger>
            <TabsTrigger value="portfolio" className="text-lg py-3">Your Portfolio</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover" className="space-y-6 animate-fade-in">
            <Card className="shadow-md">
              <CardHeader className="bg-white">
                <CardTitle>Startup Discovery</CardTitle>
                <CardDescription>Find startups that match your investment criteria.</CardDescription>
              </CardHeader>
              <CardContent className="bg-white pt-6">
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button 
                    variant={industryFilter === "all" ? "default" : "outline"} 
                    onClick={() => setIndustryFilter("all")}
                    className="flex gap-2 items-center"
                  >
                    <Filter size={16} />
                    All Industries
                  </Button>
                  <Button 
                    variant={industryFilter === "cleantech" ? "default" : "outline"} 
                    onClick={() => setIndustryFilter("cleantech")}
                    className="flex gap-2 items-center"
                  >
                    <BrainCog size={16} />
                    CleanTech
                  </Button>
                  <Button 
                    variant={industryFilter === "healthtech" ? "default" : "outline"} 
                    onClick={() => setIndustryFilter("healthtech")}
                    className="flex gap-2 items-center"
                  >
                    <Users size={16} />
                    HealthTech
                  </Button>
                  <Button 
                    variant={industryFilter === "agtech" ? "default" : "outline"} 
                    onClick={() => setIndustryFilter("agtech")}
                    className="flex gap-2 items-center"
                  >
                    <BookOpen size={16} />
                    AgTech
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredStartups.map((startup, index) => (
                    <StartupProfileCard key={index} {...startup} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="portfolio" className="space-y-6 animate-fade-in">
            <Card className="shadow-md">
              <CardHeader className="bg-white">
                <CardTitle>Your Investment Portfolio</CardTitle>
                <CardDescription>Track and manage your startup investments.</CardDescription>
              </CardHeader>
              <CardContent className="bg-white pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md glass-card">
                    <h3 className="text-lg font-bold mb-4">Portfolio Performance</h3>
                    <div className="flex justify-center py-4">
                      <PieChart size={120} className="text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Total Invested</p>
                        <p className="text-xl font-bold">$2.85M</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Avg. Growth</p>
                        <p className="text-xl font-bold text-green-600">+24.5%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md glass-card">
                    <h3 className="text-lg font-bold mb-4">Investment Metrics</h3>
                    <div className="flex justify-center py-4">
                      <TrendingUp size={120} className="text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Active Investments</p>
                        <p className="text-xl font-bold">5</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Projected ROI</p>
                        <p className="text-xl font-bold text-primary">3.2x</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-6">Your Portfolio Companies</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioMock.map((startup, index) => (
                    <StartupProfileCard key={index} {...startup} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InvestorDashboard;
