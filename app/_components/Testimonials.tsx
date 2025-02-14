'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const testimonials = [
  {
    text: "Extremely professional service as always. Saved us more than $500 on our mortgage and Auto insurance.",
    author: "Jatin M"
  },
  {
    text: "Fantastic experience! The team was very helpful in getting the right insurance plan for me.",
    author: "Anita S"
  },
  {
    text: "Great customer service and very competitive rates. Highly recommended!",
    author: "Rohit K"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto py-12 text-center bg-background text-foreground">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Testimonials</h2>
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-foreground mb-6 max-w-2xl mx-auto"
      >
        &quot;{testimonials[index].text}&quot;
      </motion.p>
      <p className="font-semibold text-foreground">{testimonials[index].author}</p>
      
      <div className="flex justify-center items-center gap-6 mt-6">
        <Button variant="ghost" size="icon" onClick={prevTestimonial}>
          <FaChevronLeft size={20} />
        </Button>
        <Button variant="ghost" size="icon" onClick={nextTestimonial}>
          <FaChevronRight size={20} />
        </Button>
      </div>
      
      <div className="bg-blue-500 text-white py-6 mt-12 flex flex-col md:flex-row justify-between items-center px-6 rounded-lg">
        <p className="text-lg font-semibold">Get Insured Today!</p>
        <div className="text-center">
          <p className="text-sm">Starting At Only</p>
          <p className="text-3xl font-bold">$11.50</p>
        </div>
        <Link href='/contact' className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 mt-4 md:mt-0">GET INSURED!</Link>
      </div>
    </div>
  );
}
