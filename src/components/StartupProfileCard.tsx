
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  DollarSign, 
  Users, 
  Rocket, 
  Globe, 
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  Star,
  Calendar
} from "lucide-react";

interface StartupProfileCardProps {
  name: string;
  logo: string;
  industry: string;
  description: string;
  funding: string;
  traction: string;
  location: string;
  matchPercentage: number;
  teamSize: number;
  foundedYear: number;
  pitchDate?: string;
}

const StartupProfileCard: React.FC<StartupProfileCardProps> = ({
  name,
  logo,
  industry,
  description,
  funding,
  traction,
  location,
  matchPercentage,
  teamSize,
  foundedYear,
  pitchDate
}) => {
  const [saved, setSaved] = useState(false);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 card-shadow">
      <div className="relative h-32 bg-gradient-to-r from-venturevein-600 to-investblue-600">
        <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-xl bg-white p-1 shadow-lg">
          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
            {logo ? (
              <img src={logo} alt={`${name} logo`} className="w-14 h-14 object-contain" />
            ) : (
              <span className="text-2xl font-bold gradient-text">{name.charAt(0)}</span>
            )}
          </div>
        </div>
        
        {matchPercentage > 0 && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-gray-800">{matchPercentage}% Match</span>
          </div>
        )}
      </div>
      
      <div className="pt-12 pb-6 px-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-gray-500">{industry}</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSaved(!saved)}
            className={saved ? "text-venturevein-600" : "text-gray-400"}
          >
            {saved ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
          </Button>
        </div>
        
        <p className="text-gray-700 mb-6 line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-700">{funding}</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-700">{traction}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-700">{teamSize} team members</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-700">Founded {foundedYear}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-700">{location}</span>
          </div>
          {pitchDate && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-700">Pitch: {pitchDate}</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-3">
          <Button className="flex-1 bg-venturevein-600 hover:bg-venturevein-700 text-white">
            View Profile
          </Button>
          <Button variant="outline" className="border-venturevein-600 text-venturevein-600 hover:bg-venturevein-50">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartupProfileCard;
