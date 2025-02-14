import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaShieldAlt, FaLifeRing, FaClipboardList, FaHome, FaHeartbeat } from "react-icons/fa";

export function TypesOfLifeInsurance() {
  const plans = [
    { title: "Term Insurance", description: "The most cost-effective life insurance is term insurance.", icon: <FaShieldAlt />, link: "/term-insurance" },
    { title: "Universal Life", description: "Universal life insurance is a type of flexible policy.", icon: <FaLifeRing />, link: "/universal-life" },
    { title: "Whole Life", description: "Whole life insurance remains active for your lifetime.", icon: <FaClipboardList />, link: "/whole-life" },
    { title: "Mortgage Insurance", description: "Protect your biggest investment with mortgage insurance.", icon: <FaHome />, link: "/mortgage-insurance" },
    { title: "Non-Medical Life Insurance", description: "Designed for individuals without medical underwriting.", icon: <FaHeartbeat />, link: "/non-medical-life-insurance" },
  ];

  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-primary text-center">Types of Life Insurance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {plans.map((plan, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl text-primary mb-3">{plan.icon}</div>
            <h3 className="text-xl font-semibold text-primary">{plan.title}</h3>
            <p className="mt-2 text-foreground">{plan.description}</p>
            <Link href={plan.link}>
              <Button className="mt-4 bg-primary hover:bg-opacity-80">Read More</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}