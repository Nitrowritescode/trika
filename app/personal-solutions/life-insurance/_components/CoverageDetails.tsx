import { Button } from "@/components/ui/button";

export function CoverageDetails() {
    return (
      <div className="bg-background text-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">How Much Do I Need?</h2>
          <p className="mt-4 py-2">
            Different people have different needs and responsibilities in different phases of life, making it important to analyze your financial situation.
          </p>
          <p className="py-2 font-semibold">Inspired by life – get a free no obligation quote in greater Toronto area</p>
          <Button className="mt-4 bg-primary hover:bg-opacity-80">Contact Us</Button>
        </div>
      </div>
    );
  }