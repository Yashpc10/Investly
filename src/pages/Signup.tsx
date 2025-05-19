// src/pages/Signup.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Signup = () => {
  const startupCategories = [
    "Cleantech",
    "Agtech",
    "Healthtech",
    "Fintech",
    "Edtech",
    "AI/ML",
    "SaaS",
    "E-commerce",
    "Other"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Investly Account</h2>
        
        <Tabs defaultValue="startup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="startup">Startup</TabsTrigger>
            <TabsTrigger value="investor">Investor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="startup">
            <form className="space-y-4">
              <Input type="text" placeholder="Full Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Input type="text" placeholder="Startup Name" required />
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Startup Category
                </label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {startupCategories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">Sign Up as Startup</Button>
            </form>
          </TabsContent>
          
          <TabsContent value="investor">
            <form className="space-y-4">
              <Input type="text" placeholder="Full Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" className="w-full">Sign Up as Investor</Button>
            </form>
          </TabsContent>
        </Tabs>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;