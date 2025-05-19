import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Pitch {
  id: number;
  startupName: string;
  date: string;
  time: string;
  description: string;
  attendees: number;
  category: string;
  recording?: boolean;
}

const upcomingPitches: Pitch[] = [
  {
    id: 1,
    startupName: "EcoTech Solutions",
    date: "2025-04-20",
    time: "11:00 AM",
    description: "Pitching sustainable waste management technology.",
    attendees: 25,
    category: "Sustainability",
  },
  {
    id: 2,
    startupName: "MediBridge",
    date: "2025-04-22",
    time: "3:00 PM",
    description: "Telemedicine services for rural communities.",
    attendees: 40,
    category: "Healthcare",
  },
];

const pastPitches: Pitch[] = [
  {
    id: 3,
    startupName: "FinBuddy",
    date: "2025-03-15",
    time: "2:00 PM",
    description: "Personal finance and budgeting app.",
    attendees: 30,
    category: "Finance",
    recording: true,
  },
  {
    id: 4,
    startupName: "FoodLoop",
    date: "2025-03-10",
    time: "12:00 PM",
    description: "Zero-waste food delivery platform.",
    attendees: 18,
    category: "FoodTech",
    recording: false,
  },
];

const VirtualPitch = () => {
  const [selectedPitch, setSelectedPitch] = useState<Pitch | null>(null);

  const handleOpenModal = (pitch: Pitch) => {
    setSelectedPitch(pitch);
  };

  const handleCloseModal = () => {
    setSelectedPitch(null);
  };

  return (
    <div className="p-6 space-y-10">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Upcoming Pitches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingPitches.map((pitch) => (
            <motion.div
              key={pitch.id}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => handleOpenModal(pitch)}
            >
              <Card className="shadow-lg border border-primary/20">
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">{pitch.startupName}</h3>
                  <p className="text-muted-foreground">{pitch.date} | {pitch.time}</p>
                  <p>{pitch.description}</p>
                  <p className="text-sm text-primary font-medium">Category: {pitch.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Past Pitches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pastPitches.map((pitch) => (
            <motion.div
              key={pitch.id}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => handleOpenModal(pitch)}
            >
              <Card className="shadow-md border border-border">
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{pitch.startupName}</h3>
                  <p className="text-sm text-muted-foreground">{pitch.date} | {pitch.time}</p>
                  <p>{pitch.description}</p>
                  <p className="text-sm text-primary font-medium">Category: {pitch.category}</p>
                  {pitch.recording !== undefined && (
                    <p className="text-sm">
                      Recording:{" "}
                      <span className={pitch.recording ? "text-green-600" : "text-red-600"}>
                        {pitch.recording ? "Available" : "Not Available"}
                      </span>
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPitch} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-lg">
          {selectedPitch && (
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{selectedPitch.startupName}</h3>
              <p className="text-muted-foreground">{selectedPitch.date} | {selectedPitch.time}</p>
              <p>{selectedPitch.description}</p>
              <p className="text-sm font-medium text-primary">Category: {selectedPitch.category}</p>
              <p className="text-sm">Attendees: {selectedPitch.attendees}</p>
              {selectedPitch.recording !== undefined && (
                <p className="text-sm">
                  Recording:{" "}
                  <span className={selectedPitch.recording ? "text-green-600" : "text-red-600"}>
                    {selectedPitch.recording ? "Available" : "Not Available"}
                  </span>
                </p>
              )}
              <div className="pt-2">
                <Button onClick={handleCloseModal} className="w-full">
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VirtualPitch;
