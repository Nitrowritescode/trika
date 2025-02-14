'use client';


import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function LongTermCarePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Long Term Care Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Protect your future with long-term care insurance, ensuring financial security when you need assistance.
        </p>
      </div>
      
      {/* Understanding Long Term Care */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">What Does Long-Term Care Mean?</h2>
          <p className="mt-4">
            Long-term care services may include:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Nursing care</li>
            <li>Rehabilitation and therapy</li>
            <li>Personal care (dressing, eating, bathing)</li>
            <li>Homemaking services (cleaning, laundry, meal preparation)</li>
            <li>Supervision and assistance as needed</li>
          </ul>
        </div>
      </div>
      
      {/* Care Locations Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Where Can You Receive Care?</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>In your home</li>
            <li>In the community (e.g., adult day centers)</li>
            <li>In a long-term care facility</li>
          </ul>
        </div>
      </div>
      
      {/* Claiming Benefits */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">When Can You Claim Benefits?</h2>
          <p className="mt-4">
            You may be eligible for benefits if:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>You require supervision due to mental deterioration.</li>
            <li>You need substantial or stand-by assistance with at least two daily activities (e.g., bathing, dressing, toileting, transferring, continence, feeding).</li>
          </ul>
        </div>
      </div>
      
      {/* Daily Living Activities Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Understanding Activities of Daily Living</h2>
          <p className="mt-4">
            Here’s what it could look like if you&apos;re unable to perform an activity of daily living:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li><strong>Bathing:</strong> You always need help getting in and out of the bathtub.</li>
            <li><strong>Dressing:</strong> You always need help putting on and removing clothes.</li>
            <li><strong>Toileting:</strong> You always need help getting on/off the toilet and managing hygiene.</li>
            <li><strong>Transferring:</strong> You always need help moving in and out of bed or a chair.</li>
            <li><strong>Continence:</strong> You need assistance managing bowel or bladder control.</li>
            <li><strong>Feeding:</strong> You always need help bringing food to your mouth or through a feeding tube.</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center w-full mx-auto">
        <h2 className="text-3xl font-bold text-primary">Protect Your Future Today!</h2>
        <p className="mt-4">
          TRIKA Financials offers long-term care insurance solutions tailored to your needs. Secure your financial future and maintain your quality of life.
        </p>
        <div className="mt-6 mx-auto w-full">
         
          <Link href="/contact">
            <Button className="ml-4 bg-primary text-foreground hover:bg-opacity-80">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
