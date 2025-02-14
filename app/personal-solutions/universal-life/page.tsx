'use client';

import { Button } from "@/components/ui/button";
import { FaCheckCircle } from 'react-icons/fa';


export default function UniversalLifePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Universal Life</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Universal life insurance is a type of permanent life insurance that provides flexible coverage and investment options.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="mt-4">
            Universal life insurance offers a wide range of options for clients, including financial protection, wealth accumulation, estate preservation, and tax advantages. Policyholders can adjust the insurance amount, premium payments, and savings components to suit their needs.
          </p>
        </div>
      </div>
      
      {/* Advantages Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Advantages of Universal Life Insurance</h2>
          <ul className="mt-4 space-y-3 list-none">
            {[ 
              "Affordable permanent life insurance protection",
              "Attractive investment options with tax-sheltered growth",
              "Flexible insurance amount and premium payment options",
              "Ability to withdraw partial amounts from cash value",
              "Wide variety of riders and investment choices for policyholders"
            ].map((advantage, index) => (
              <li key={index} className="flex items-center space-x-2">
                <FaCheckCircle className="text-primary" />
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Button className="bg-primary hover:bg-opacity-80">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
