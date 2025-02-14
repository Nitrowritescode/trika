import React from 'react';
import Hero from './_components/Hero';
import Features from './_components/Features';
import Info from './_components/Info';
import WhyUs from './_components/WhyUs';
import Testimonials from './_components/Testimonials';
// import { motion } from 'framer-motion';



export default function Home() {

  return (
    <div className='px-4'>
      <Hero/>
      <Features/>
      <WhyUs/>
      <Info/>
      <Testimonials/>

    </div>
  );
};


