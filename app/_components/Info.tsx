'use client';

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

const features = [
  { title: "Find Your Best Cover", description: "We identify your best options from a huge range of Canadian life insurance plans.", icon: "🩺" },
  { title: "Best Customer Service", description: "Contact our team of local consultants and discover the best policies.", icon: "📞" },
  { title: "No Additional Cost", description: "Free service; all you pay is your standard insurance premium.", icon: "🛡️" },
  { title: "Request a Call", description: "Share your quotes and we will contact you with more details.", icon: "🔍" },
];

export default function HeroFinancials() {
  return (
    <div className="container mx-auto py-12 text-center text-foreground">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-primary"
      >
        TRIKA Financials – Inspired By Life
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-3xl mx-auto text-foreground"
      >
        At TRIKA Financials, we understand your financial and protection needs, offering solutions such as life insurance, critical illness insurance, disability insurance, retirement savings (RRSP), investments (RESP/Annuities), and more.
      </motion.p>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 shadow-lg bg-background text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl mb-4"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
            <p className="text-foreground text-sm">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
