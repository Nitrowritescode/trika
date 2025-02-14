'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function MortgageInsurancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Mortgage Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Protect your home and family with mortgage insurance, offering financial security for your outstanding loans.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Understanding Mortgage Insurance</h2>
          <p className="mt-4">
            Mortgage insurance ensures that in the event of your passing, your loved ones are not burdened with outstanding mortgage payments. Unlike lender-provided mortgage insurance, personal life insurance offers flexibility and control over how benefits are used.
          </p>
        </div>
      </div>
      
      {/* Mortgage Insurance vs Life Insurance */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Mortgage Insurance vs. Personal Life Insurance</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li><strong>Coverage Control:</strong> With lender-provided mortgage insurance, the mortgage lender is the beneficiary. With personal life insurance, you decide who receives the benefit.</li>
            <li><strong>Coverage Amount:</strong> Mortgage insurance only covers the remaining balance of your mortgage, whereas personal life insurance allows flexibility in coverage.</li>
            <li><strong>Portability:</strong> If you switch mortgage lenders, your lender-provided mortgage insurance may not transfer. Personal life insurance stays with you regardless of lender changes.</li>
            <li><strong>Premium Stability:</strong> Personal life insurance premiums are guaranteed and remain the same, whereas lender-provided mortgage insurance premiums can change.</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Secure Your Mortgage Protection Today!</h2>
        <p className="mt-4">
          TRIKA Financials offers flexible mortgage insurance solutions to give you peace of mind. Ensure your family is protected from financial uncertainty.
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
