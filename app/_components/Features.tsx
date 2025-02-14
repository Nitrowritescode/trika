'use client';

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

const features = [
  { title: "Life Insurance", link: "#", description: "Secure your future with our comprehensive life insurance plans.", icon: "😊" },
  { title: "Disability Insurance", link: "#", description: "Protect yourself financially in case of disability.", icon: "🧑‍🦽" },
  { title: "Critical Illness Insurance", link: "#", description: "Coverage for unexpected critical illnesses.", icon: "🚑" },
  { title: "Super Visa Insurance", link: "#", description: "Affordable insurance for Super Visa applicants.", icon: "✈️" },
  { title: "Travel Insurance", link: "#", description: "Stay covered during your travels worldwide.", icon: "🚗" },
  { title: "Long Term Care", link: "#", description: "Plan for long-term healthcare expenses.", icon: "📅" },
];

export default function FeaturesSection() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <Card key={index} className="p-6 shadow-lg bg-background text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl mb-4"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
            <a href={feature.link} className="text-blue-500 hover:underline text-sm">Learn More</a>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
