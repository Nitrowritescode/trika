'use client';


import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function SuperVisaInsurancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Super Visa & Visitor to Canada Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Get private health insurance coverage that meets the Super Visa requirements for parents and grandparents visiting Canada.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">What is Super Visa Insurance?</h2>
          <p className="mt-4">
            The Super Visa allows parents and grandparents of Canadian citizens and permanent residents to stay in Canada for up to two years without the need for renewal. To qualify, visitors must provide proof of private medical insurance.
          </p>
        </div>
      </div>
      
      {/* Eligibility Requirements */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Who Can Apply?</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Parents or grandparents of Canadian citizens or permanent residents</li>
            <li>Applicants must be admissible to Canada</li>
            <li>Must meet financial and insurance requirements</li>
          </ul>
        </div>
      </div>
      
      {/* Insurance Requirements */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Super Visa Insurance Requirements</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Private medical insurance valid for at least one year</li>
            <li>Covers healthcare, hospitalization, and repatriation</li>
            <li>Minimum coverage of $100,000</li>
            <li>Valid for each entry to Canada</li>
            <li>Available for review by immigration officials</li>
          </ul>
        </div>
      </div>
      
      {/* Why Get Super Visa Insurance? */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Why Do You Need Super Visa Insurance?</h2>
          <p className="mt-4">
            Visitors to Canada are not covered by provincial health insurance, meaning they could face high medical costs if an accident or illness occurs. Private health insurance ensures they are protected from unexpected medical expenses.
          </p>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Get Covered Today!</h2>
        <p className="mt-4">
          TRIKA Financials offers a wide range of visitor insurance plans that meet Super Visa requirements. Ensure your loved ones have the protection they need.
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
