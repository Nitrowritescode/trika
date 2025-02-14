'use client';


import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function TermInsurancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Term Life Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          The most cost-effective life insurance, providing coverage at a fixed rate for a specified period.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">What is Term Insurance?</h2>
          <p className="mt-4">
            Term insurance provides coverage at a fixed premium for a specific period, such as 10, 20 years, or even lifelong coverage with Term 100. If the insured passes away during the term, the death benefit is paid to the beneficiary. However, once the term expires, renewal may come with different premiums or conditions.
          </p>
        </div>
      </div>
      
      {/* Advantages Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Advantages of Term Insurance</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Low-cost insurance coverage to start with flexible renewal options.</li>
            <li>Suitable for short-term financial needs like mortgage or loan protection.</li>
            <li>Convertible options available to switch to permanent insurance without medical exams.</li>
            <li>Renewable policies allow continuation of coverage at higher premiums without requiring proof of insurability.</li>
            <li>Provides financial security for young individuals and new immigrants.</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Protect Your Future Today!</h2>
        <p className="mt-4">
          TRIKA Financials offers a variety of term life insurance plans to fit your needs. Get expert guidance and find the right policy for you.
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
