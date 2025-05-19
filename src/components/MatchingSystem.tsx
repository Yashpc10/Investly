
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Target, 
  ArrowRight, 
  Check 
} from 'lucide-react';

const MatchingSystem = () => {
  const [aiEnabled, setAiEnabled] = useState(true);
  const [riskLevel, setRiskLevel] = useState([50]);
  const [fundingStage, setFundingStage] = useState("seed");
  
  const stages = [
    { id: "pre-seed", label: "Pre-Seed" },
    { id: "seed", label: "Seed" },
    { id: "series-a", label: "Series A" },
    { id: "series-b", label: "Series B" },
    { id: "later", label: "Later Stage" }
  ];
  
  return (
    <section id="startups" className="py-20 px-6 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-venturevein-100 text-venturevein-800 px-4 py-2 rounded-full mb-6">
              <Brain size={18} />
              <span className="font-medium">AI-Powered Matching</span>
            </div>
            
            <h2 className="mb-6">
              Find Your Perfect <span className="gradient-text">Investment Match</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Our sophisticated algorithm analyzes investor preferences, 
              historical investments, and startup data to create perfect matches.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <Zap className="text-venturevein-600" size={24} />
                  <h3 className="text-lg font-medium">AI Match Settings</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Switch 
                    id="ai-toggle" 
                    checked={aiEnabled}
                    onCheckedChange={setAiEnabled}
                  />
                  <Label htmlFor="ai-toggle">Enabled</Label>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Risk Tolerance</Label>
                    <span className="text-sm font-medium text-gray-900">
                      {riskLevel[0] < 30 ? 'Conservative' : riskLevel[0] < 70 ? 'Moderate' : 'Aggressive'}
                    </span>
                  </div>
                  <Slider
                    value={riskLevel}
                    onValueChange={setRiskLevel}
                    min={0}
                    max={100}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Conservative</span>
                    <span>Moderate</span>
                    <span>Aggressive</span>
                  </div>
                </div>
                
                <div>
                  <Label className="mb-2 block">Preferred Funding Stage</Label>
                  <div className="flex flex-wrap gap-2">
                    {stages.map((stage) => (
                      <Button
                        key={stage.id}
                        variant={fundingStage === stage.id ? "default" : "outline"}
                        className={fundingStage === stage.id 
                          ? "bg-venturevein-600 hover:bg-venturevein-700 text-white" 
                          : "border-gray-200 text-gray-700"}
                        onClick={() => setFundingStage(stage.id)}
                      >
                        {stage.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-venturevein-600 to-investblue-600 hover:from-venturevein-700 hover:to-investblue-700 text-white px-8">
                Update Preferences
              </Button>
              <Button size="lg" variant="outline" className="border-venturevein-600 text-venturevein-600 hover:bg-venturevein-50">
                View Matches
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xl">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Match Analytics</h3>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-venturevein-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-venturevein-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">3x Better Results</h4>
                    <p className="text-gray-600">Investors using AI matching have 3x better investment outcomes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-investblue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-investblue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">92% Match Accuracy</h4>
                    <p className="text-gray-600">Our algorithm predicts successful matches with 92% accuracy</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50">
                <h4 className="font-bold mb-4">Top Matching Criteria</h4>
                <div className="space-y-3">
                  {[
                    "Industry expertise alignment",
                    "Growth potential indicators",
                    "Team composition and experience",
                    "Traction metrics and validation",
                    "Market size and competition"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-venturevein-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-investblue-600/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchingSystem;
