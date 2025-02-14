import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is life insurance?",
    answer: "Life insurance is a contract between you and an insurance company. You pay premiums, and in exchange, the insurer provides a death benefit to your beneficiaries upon your passing."
  },
  {
    question: "What types of life insurance are available?",
    answer: "The main types are term life, whole life, and universal life insurance. Term life covers you for a set period, while whole and universal life provide lifetime coverage with cash value components."
  },
  {
    question: "How much life insurance do I need?",
    answer: "The amount depends on your financial obligations, debts, income replacement needs, and future expenses such as education or retirement for your dependents."
  },
  {
    question: "What affects life insurance premiums?",
    answer: "Factors include age, health, lifestyle, occupation, and the type and amount of coverage chosen. Smokers and those with pre-existing conditions may pay higher premiums."
  },
  {
    question: "Can I change my life insurance policy later?",
    answer: "Some policies offer conversion options, allowing you to switch from term to permanent coverage without a medical exam. Riders can also be added to customize coverage."
  }
];

export default function FAQ() {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Frequently Asked Questions</h1>
      <Carousel className="w-full max-w-lg p-4">
        <CarouselContent>
          {faqs.map((faq, index) => (
            <CarouselItem key={index}>
              <div className="p-4">
                <Card className="shadow-lg border p-6">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="text-xl font-semibold text-primary">{faq.question}</h2>
                    <p className="mt-4 text-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> 
<div>
  <h2 className="font-bold text-xl md:text-2xl py-4 md:py-6">Got More Questions?</h2>
      <Link href="/contact">
      <Button className="bg-primary py-3 w-full">Contact Us</Button>
      </Link>
</div>
    </div>
  );
}
