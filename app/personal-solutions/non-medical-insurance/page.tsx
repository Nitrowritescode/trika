'use client';


import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function NonMedicalInsurancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Non-Medical Life Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Get coverage without medical exams—ideal for individuals who have been declined or prefer a simpler application process.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">What is Non-Medical Insurance?</h2>
          <p className="mt-4">
            Non-medical insurance is designed for individuals who have been declined in the past or are hard to insure. Most policies do not require medical exams—only a simple yes/no health questionnaire.
          </p>
          <p className="mt-4">
            Individuals aged 20 to 80 can apply for up to $225,000 in coverage, with guaranteed premiums. Our goal is to make insurance simple so you can purchase with ease.
          </p>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Benefits of Non-Medical Life Insurance</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Guaranteed acceptance for eligible applicants</li>
            <li>Coverage up to $225,000 with no medical exams</li>
            <li>Fixed premiums that will never increase</li>
            <li>Death benefits are tax-free</li>
            <li>Funds can be used to cover loans, medical expenses, education, or living costs</li>
          </ul>
        </div>
      </div>
      
      {/* Who Should Consider This Insurance? */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Who Should Apply?</h2>
          <p className="mt-4">This insurance is ideal for individuals who:</p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Have been turned down by an insurance company</li>
            <li>Are hard to insure due to health conditions</li>
            <li>Smoke or have a higher BMI</li>
            <li>Prefer to skip medical exams</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Get Insured Without Medical Exams!</h2>
        <p className="mt-4">
          TRIKA Financials makes it easy to get covered. No medical exams, no needles—just simple and fast approval.
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