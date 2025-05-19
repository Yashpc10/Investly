import { motion } from "framer-motion";
import { useState } from "react";

const JoinAsInvestor = () => {
  const [submitted, setSubmitted] = useState(false);

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
        Join as an Investor 💼
      </h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 space-y-6 border"
        >
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="E.g. John Doe"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="E.g. investor@example.com"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">LinkedIn Profile</label>
            <input
              type="url"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="https://linkedin.com/in/yourname"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Investment Focus</label>
            <textarea
              required
              rows={3}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="What kind of startups do you invest in?"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Typical Investment Size</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="E.g. $10,000 - $100,000"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Portfolio Website (Optional)</label>
            <input
              type="url"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="https://yourportfolio.com"
            />
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
          className="text-center p-10 bg-blue-50 border border-blue-200 rounded-2xl shadow-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🎉 Thanks for joining us!
          </h2>
          <p className="mt-4 text-gray-600">
            We'll reach out once we’ve reviewed your investor profile.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default JoinAsInvestor;