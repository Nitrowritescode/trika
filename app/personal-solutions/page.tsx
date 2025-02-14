'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const insurancePlans = [
  { title: "Life Insurance", description: "Life insurance policies give your family the promise of protection, securing their future even when you're not around.", image: "/lifeinsurance.jpg", link: "/personal-solutions/life-insurance" },
  { title: "Critical Illness Insurance", description: "Provides a lump sum payment if you suffer from a covered critical illness and meet the survival period.", image: "/critical.webp", link: "/personal-solutions/critical-illness-insurance" },
  { title: "Disability Insurance", description: "Financial security by replacing a portion of your earnings if an accident or illness prevents you from working.", image: "/disable.webp", link: "/personal-solutions/disability-insurance" },
  { title: "Travel Insurance", description: "Covers medical expenses and travel risks while you're visiting Canada or traveling abroad.", image: "/travel.webp", link: "/personal-solutions/travel-insurance" },
  { title: "Long Term Care", description: "Ensures financial support for long-term care services as you age.", image: "/longtermcare.webp", link: "/personal-solutions/long-term-care" },
  { title: "Health & Dental Benefits", description: "Flexible and affordable health and dental plans tailored to your needs.", image: "/healthdental.webp", link: "/personal-solutions/health-dental-benefits" },
  { title: "Investments", description: "Comprehensive investment solutions including RRSPs, segregated funds, and wealth-building options.", image: "/investments.jpg", link: "/personal-solutions/investments" },
  { title: "Registered Education Savings Plan (RESP)", description: "A tax-efficient way to save for your child’s post-secondary education.", image: "/kids.webp", link: "/personal-solutions/resp" },
];

export default function InsurancePlansPage() {
  return (
    <div className="bg-background text-foreground py-12 px-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Explore Our Insurance & Investment Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insurancePlans.map((plan, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={plan.image} alt={plan.title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary">{plan.title}</h2>
              <p className="mt-2 text-foreground">{plan.description}</p>
              <Link href={plan.link}>
                <Button className="mt-4 bg-primary text-foreground hover:bg-opacity-80">Read More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
