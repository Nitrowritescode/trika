'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Investments() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Retirement Planning & Investments</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Secure your financial future with expert retirement planning and investment solutions.
        </p>
      </div>
      
      {/* Investment Solutions Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Comprehensive Investment Solutions</h2>
          <p className="mt-4">
            TRIKA Financials provides one-stop access to all the investment solutions you need throughout your life, including:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Segregated funds & investment management options</li>
            <li>Guaranteed interest terms & registered retirement savings plans (RRSPs)</li>
            <li>Retirement income solutions such as payout annuities & RRIFs</li>
          </ul>
        </div>
      </div>
      
      {/* Investment Benefits Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">How We Help You</h2>
          <p className="mt-4">
            TRIKA Financials can help you create an investment portfolio that supports your financial goals, whether it&apos;s:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Saving for your child&apos;s education</li>
            <li>Planning a vacation</li>
            <li>Building a nest egg for retirement</li>
            <li>Investing in a small business</li>
          </ul>
        </div>
      </div>
      
      {/* Investment Options Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Investment & Retirement Solutions</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li><strong>Segregated Fund Policies:</strong> Wealth-building potential with investment protection.</li>
            <li><strong>Payout Annuities:</strong> Provides income for specified periods or a lifetime.</li>
            <li><strong>Guaranteed Interest Terms:</strong> Fixed-interest rates with financial stability.</li>
            <li><strong>Savings Options:</strong> Multiple plans to help achieve your financial goals.</li>
            <li><strong>Retirement Income Options:</strong> Secure retirement income payments.</li>
          </ul>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-background text-foreground py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Plan for Your Future Today!</h2>
        <p className="mt-4">
          TRIKA Financials can make your financial life easier to manage. Get expert guidance on retirement planning and investments.
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
