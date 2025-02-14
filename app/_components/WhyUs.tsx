'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const whyUsContent = [
  {
    title: "Best Life Insurance Coverage In Canada",
    heading: "Free Life Insurance Comparison",
    description:
      "We are life insurance specialists, this is all we do. We guide you through the range of policies on offer to find your ideal match.",
    highlight:
      "TRIKA Financials compares all leading life insurance companies in Canada to find you the right coverage and right price. With instant coverage options, extended operating hours, and simple processes. Access to life insurance has never been so easy or efficient.",
    image: "/herolife.webp",
    imagePosition: "left",
  },
  {
    title: "Why TRIKA Financials",
    heading:
      "Secure your Family’s future and give them the protection they need with adequate life insurance coverage...",
    description:
      "TRIKA Financials provides you with the best options for life insurance, critical illness insurance, disability insurance, mortgage insurance, and investment options such as RRSP/RESP/Annuities from Canada’s leading life insurance companies.",
    highlight:
      "Our experienced advisors guide you through the complexities of life insurance with trusted and friendly service, helping you make the right decision for you and your family.",
    image: "/herofamily.webp",
    imagePosition: "right",
  },
];

export default function WhyUs() {
  return (
    <div className="container mx-auto py-12 px-6 text-gray-800">
      {whyUsContent.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
            section.imagePosition === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: section.imagePosition === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
            <h3 className="text-xl font-semibold text-gray-500 mb-2">{section.heading}</h3>
            <p className="text-foreground mb-4">{section.description}</p>
            <p className="text-foreground font-medium">{section.highlight}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <Image
              src={section.image}
              alt={section.title}
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
