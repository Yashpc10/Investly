import { motion } from "framer-motion";
import { useState } from "react";

const JoinAsStartup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Join as a Startup 🚀
      </h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 space-y-6 border"
        >
          <div>
            <label className="block font-medium mb-1">Startup Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="E.g. InnovateX"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Founder Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="E.g. Jane Doe"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="E.g. contact@startup.com"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Website</label>
            <input
              type="url"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="https://yourstartup.com"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    selectedCategory === category
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <input
              type="hidden"
              name="category"
              value={selectedCategory || ""}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Brief Description</label>
            <textarea
              required
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="What does your startup do?"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Funding Stage</label>
            <select
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="">Select stage</option>
              <option value="bootstrapped">Bootstrapped</option>
              <option value="pre-seed">Pre-Seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
              <option value="series-b">Series B+</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-accent to-primary text-white px-6 py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition-all"
          >
            Submit Application
          </motion.button>
        </form>
      ) : (
        <motion.div
          className="text-center p-10 bg-green-50 border border-green-200 rounded-2xl shadow-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <h2 className="text-2xl font-semibold text-green-700">
            🎉 Thank you for registering your startup!
          </h2>
          <p className="mt-4 text-gray-600">
            We'll review your submission and get in touch shortly.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default JoinAsStartup;