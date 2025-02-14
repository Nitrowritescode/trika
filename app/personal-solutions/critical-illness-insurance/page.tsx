import { Button } from '@/components/ui/button'
import React from 'react'

function critical() {
  return (
    <div>
       <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Critical Illness Insurance</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Critical illness insurance provides a lump sum payment if you suffer from a covered critical illness and survive the required period.
        </p>
      </div>
      
      {/* Description Section */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="mt-4">
            Critical illness insurance can help cover lost income, medical treatment, private nursing, or mortgage payments, so you can focus on recovery.
          </p>
          <h3 className="text-2xl font-semibold text-primary mt-6">A critical illness can happen to anyone:</h3>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Over 70,000 heart attacks occur in Canada each year.</li>
            <li>40,000 to 50,000 strokes happen annually.</li>
            <li>Approximately 3,075 Canadians are diagnosed with cancer every week.</li>
          </ul>
        </div>
      </div>
      
      {/* What is Critical Illness Insurance? */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">What is Critical Illness Insurance?</h2>
          <p className="mt-4">
            Critical illness insurance helps cover costs associated with life-altering illnesses. If you become critically ill and survive the waiting period, you receive a lump sum cash payment.
          </p>
        </div>
      </div>
      
      {/* What is Covered? */}
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">What is Covered?</h2>
          <p className="mt-4">
            Major illnesses covered under most Canadian critical illness policies include:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            {["Alzheimer’s Disease", "Aortic Surgery", "Benign Brain Tumor", "Cancer", "Coma", "Coronary Artery Bypass Surgery", "Deafness", "Heart Attack", "Kidney Failure", "Loss of Speech", "Major Organ Transplant", "Motor Neuron Disease", "Multiple Sclerosis", "Paralysis", "Parkinson’s Disease"].map((illness, index) => (
              <li key={index}>{illness}</li>
            ))}
          </ul>
          <p className="mt-4">
            Clients can choose to cover all or selected major illnesses such as <span className="text-primary">cancer, coronary artery bypass surgery, heart attack, stroke</span>.
          </p>
          <div className="mt-6 text-center">
            <Button className="bg-primary hover:bg-opacity-80">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
        <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Should I Go for Critical Illness Insurance?</h2>
          <p className="mt-4">
            The question of need can only be answered by you. Being fully informed is the best tool you can have as you make your decision.
          </p>
          <p className="mt-4">Ask yourself a few questions:</p>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            <li>Can you afford to shoulder the costs associated with becoming critically ill?</li>
            <li>Take a look at some of the possible costs and imagine the impact to your savings. What would the impact be over the long term?</li>
            <li>Would your retirement goals be met if you were to remove, say, $50,000, from your savings plan?</li>
            <li>Would you have to postpone your retirement by a few years?</li>
          </ul>
          <p className="mt-4">
            Probably. Consider the effects of financial stress at a time when you should be 100% devoted to recovering from your illness. Do you think removing this stress would be a good thing?
          </p>
        </div>
      </div>
    </div>
  )
}

export default critical
