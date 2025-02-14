'use client';


import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function HealthDentalInsurancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Health & Dental Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Ensure you have affordable protection against unexpected medical expenses with flexible health and dental plans.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="mt-4">
            Whether you’re self-employed, between jobs, or retired, there is a perfect healthcare package available for you and your family. Provincial health care plans are changing, and many services are not covered. Choosing the right plan ensures access to health and dental protection.
          </p>
        </div>
      </div>
      
      {/* Coverage Details Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Flexible and Affordable Coverage</h2>
          <p className="mt-4">
            The Health and Dental benefit plan offers comprehensive coverage, including:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Prescription Drugs</li>
            <li>Dental Services</li>
            <li>Vision Care and Hospital Benefits</li>
            <li>Blue Cross Supplement Plans</li>
            <li>Additional coverage for medical expenses not covered by provincial plans</li>
          </ul>
          <p className="mt-4">
            Did you know that the premiums for your individual health plan are eligible medical expenses under the Canadian Federal Income Tax Act?
          </p>
        </div>
      </div>
      
      {/* Why You Need Coverage */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Do You Have the Coverage You Need?</h2>
          <p className="mt-4">
            Provincial government health plans only cover basic medical needs like physician visits and hospital care. Supplementary health coverage includes additional medical services, prescription drugs, medical equipment, vision care, dental care, chiropractic care, and more.
          </p>
        </div>
      </div>
      
      {/* Importance of Early Coverage */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Why Get Coverage Even If You&apos;re Healthy?</h2>
          <p className="mt-4">
            The best time to purchase individual health coverage is when you and your family are healthy. Coverage should be obtained before an unforeseen accident or illness occurs since most individual health plans do not cover pre-existing conditions.
          </p>
        </div>
      </div>
      
      {/* Alternative Coverage Options */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">What If Coverage Is Not Available Through Your Employer?</h2>
          <p className="mt-4">
            Many individuals don’t have employer-provided benefits. If you&apos;re between jobs or ineligible for workplace benefits, an individual health plan offers an affordable way to ensure your protection.
          </p>
          <div className="mt-6 text-center">
          
            <Link href="/contact">
              <Button className="ml-4 bg-primary text-foreground hover:bg-opacity-80">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}