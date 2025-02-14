'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function WholeLifeInsurancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Whole Life Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Secure lifetime protection with guaranteed benefits and stable premiums.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">What is Whole Life Insurance?</h2>
          <p className="mt-4">
            Whole life insurance is a policy that remains in force for the insured’s lifetime, with guaranteed premiums and a stable death benefit. It provides both life protection and a guaranteed rate of return on your cash value.
          </p>
        </div>
      </div>
      
      {/* Participating Whole Life Insurance */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Participating Whole Life Insurance</h2>
          <p className="mt-4">
            With a participating whole life insurance policy, policyholders have an opportunity to earn dividends. These dividends can increase the death benefit and cash value growth, helping offset inflation. However, dividends are not guaranteed as they depend on the performance of the funds they are invested in.
          </p>
        </div>
      </div>
      
      {/* Advantages Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Advantages of Whole Life Insurance</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Flexible premium payment options (pay in 10, 15, or 20 years).</li>
            <li>Guaranteed cash values that can be accessed if needed.</li>
            <li>Policyholders can surrender the policy and withdraw cash value.</li>
            <li>Provides financial security and estate planning benefits.</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Plan for Your Future Today!</h2>
        <p className="mt-4">
          TRIKA Financials offers a variety of whole life insurance plans tailored to your needs. Get expert guidance to secure lifetime protection for you and your loved ones.
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <Button className="ml-4 bg-primary text-foreground hover:bg-opacity-80">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
