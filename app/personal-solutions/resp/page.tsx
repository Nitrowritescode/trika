'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function RESPPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Registered Education Savings Plan (RESP)</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          A tax-efficient way to save for your child’s post-secondary education while benefiting from government grants.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">What is a Registered Education Savings Plan (RESP)?</h2>
          <p className="mt-4">
            An RESP is a savings plan registered under Canada’s Income Tax Act that provides financial assistance to a Beneficiary (usually a child) for post-secondary education. Earnings within an RESP grow tax-free, and withdrawals are taxed in the hands of the student, who typically pays little to no tax.
          </p>
          <p className="mt-4">
            RESPs may also qualify for various government incentives, helping parents, relatives, and friends contribute to a child&apos;s education.
          </p>
        </div>
      </div>
      
      {/* Government Grants Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Government Grants Available</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li><strong>Canada Education Savings Grant (CESG):</strong> Up to $7,200 per child. Adds 20% on the first $2,500 contributed annually.</li>
            <li><strong>Additional CESG (A-CESG):</strong> Extra 10% or 20% for families with modest incomes.</li>
            <li><strong>Canada Learning Bond (CLB):</strong> For low-income families, providing up to $2,000 in grants.</li>
            <li><strong>Alberta Centennial Education Savings Plan (ACES):</strong> $500 grant for newborns in Alberta, with additional grants at ages 8, 11, and 14.</li>
            <li><strong>Quebec Education Savings Incentive (QESI):</strong> Up to $3,600 available for Quebec residents.</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Start Saving for Your Child’s Future!</h2>
        <p className="mt-4">
          TRIKA Financials makes it easy to set up an RESP and take advantage of government grants. Get started today!
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
