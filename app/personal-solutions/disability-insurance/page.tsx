'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function DisabilityInsurancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Disability Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Disability insurance provides financial security by replacing a portion of your earnings if an accident or illness prevents you from working.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="mt-4">
            Accidents and illnesses are a fact of life. They can happen to anyone at any time, and disability insurance ensures you&apos;re financially prepared.
          </p>
          <h3 className="text-2xl font-semibold text-primary mt-6">Why Should You Consider a Personal Disability Insurance Plan?</h3>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Worker’s Compensation only covers work-related accidents.</li>
            <li>Unemployment insurance covers only 15 weeks.</li>
            <li>Government benefits are subject to change.</li>
            <li>Group coverage may be limited by the definition of disability and coverage amount.</li>
            <li>Custom-designed individual disability insurance provides guaranteed coverage and premiums.</li>
          </ul>
        </div>
      </div>
      
      {/* Employer Coverage Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">I Am Covered by My Employer-Provided Group Benefits...</h2>
          <p className="mt-4">
            Group insurance coverage through work has limitations:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Most plans only pay 60-70% of your income.</li>
            <li>100% of your monthly expenses still need to be paid.</li>
            <li>Your expenses may increase while recovering.</li>
            <li>Your spouse may need to take a leave from work to care for you.</li>
          </ul>
        </div>
      </div>
      
      {/* What to Do Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">So What Do I Do?</h2>
          <p className="mt-4">
            First, check your coverage. If you have long-term disability or supplemental health insurance at work, understand what you&apos;re covered for and how much. Then, assess if you need additional coverage.
          </p>
          <p className="mt-4 my-6">
            A disability can change your life. But being prepared means you can focus on recovery instead of worrying about finances.
          </p>
          <Link href="/contact">
              <Button className="ml-4 py-4 mx-auto font-bold bg-primary hover:bg-opacity-80 text-foreground">Contact Us</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
