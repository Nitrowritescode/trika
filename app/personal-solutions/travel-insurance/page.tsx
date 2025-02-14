'use client';


import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function TravelInsurancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Travel Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Protect yourself from unexpected medical expenses while traveling outside your home province or country.
        </p>
      </div>
      
      {/* Super Visa Insurance Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Super Visa (Parents & Grandparents) Insurance</h2>
          <p className="mt-4">
            Canada allows parents and grandparents of Canadian citizens or permanent residents to visit for up to two years without the need for visa renewal. However, private medical insurance is a mandatory requirement.
          </p>
          <h3 className="text-2xl font-semibold text-primary mt-6">Super Visa Requirements:</h3>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Be a parent or grandparent of a Canadian citizen or permanent resident.</li>
            <li>Meet Canada&apos;s admissibility requirements.</li>
            <li>Provide a financial support commitment from a child or grandchild in Canada.</li>
            <li>Have private medical insurance for at least one year with a minimum coverage of $100,000.</li>
            <li>Complete an immigration medical examination.</li>
          </ul>
        </div>
      </div>
      
      {/* Why Travel Insurance is Necessary */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Why Do You Need Travel Insurance?</h2>
          <p className="mt-4">
            Your Government Health Plan provides **limited coverage** when traveling outside your home province or country. Without travel insurance, you may be responsible for high medical expenses in case of sudden illness or injury.
          </p>
          <p className="mt-4">Travel medical insurance provides coverage for:</p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Emergency medical care</li>
            <li>Hospitalization and surgeries</li>
            <li>Prescription medications</li>
            <li>Emergency air ambulance services</li>
            <li>Dental accidents</li>
            <li>Family visitation benefits</li>
            <li>Accidental death and dismemberment</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Secure Your Travels Today!</h2>
        <p className="mt-4">
          TRIKA Financials offers a variety of travel insurance plans tailored to your needs. Don&apos;t let unexpected medical expenses ruin your trip—get covered today!
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
