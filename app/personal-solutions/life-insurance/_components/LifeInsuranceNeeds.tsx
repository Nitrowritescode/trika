import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function LifeInsuranceNeeds() {
    return (
      <div className="py-12 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary">Need for Life Insurance</h2>
          <p className="mt-4 text-foreground">
          Today, there is no shortage of investment options for a person to choose from. Modern day investments include gold, property, fixed income instruments, mutual funds and of course, life insurance. Given the plethora of choices, it becomes imperative to make the right choice when investing your hard-earned money. Life insurance is a unique investment that helps you to meet your dual needs – saving for life’s important goals, and protecting your assets.
          Let us look at these unique benefits of life insurance in detail.
          </p>
          <h2 className="text-3xl font-bold text-primary pt-4 mt-4">Goal Based Savings</h2>
          <p className="mt-4 text-foreground">
          Each of us has some goals in life for which we need to save. For a young, newly married couple, it could be buying a house. Once, they decide to start a family, the goal changes to planning for the education or marriage of their children. As one grows older, planning for one’s retirement will begin to take precedence.
Clearly, as your life stage and therefore your financial goals change, the instrument in which you invest should offer corresponding benefits pertinent to the new life stage.
Life insurance is the only investment option that offers specific products tailor-made for different life stages. It thus ensures that the benefits offered to the customer reflect the needs of the customer at that particular life stage, and hence ensures that the financial goals of that life stage are met.
          </p>
        </div>

        <div>
        <div className="px-4 py-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl  font-bold text-center text-primary py-4 md:py-12">
          THE TABLE BELOW GIVES A GENERAL GUIDE FOR PLANS 
          THAT ARE APPROPRIATE FOR DIFFERENT 
          LIFE STAGES.
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary">
            <TableHead className="text-foreground font-bold">LIFE STAGE</TableHead>
            <TableHead className="text-white font-bold">PRIMARY NEED</TableHead>
            <TableHead className="text-white font-bold">LIFE INSURANCE PRODUCTS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Young & Single</TableCell>
            <TableCell>Asset Creation</TableCell>
            <TableCell>Wealth Creation Plans</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Young & Just Married
              <br />
              Married with Kids
            </TableCell>
            <TableCell>Asset Creation & Protection Children&apos;s educations, Asset Creation and Protection</TableCell>
            <TableCell>
              Wealth Creation and mortgage protection plans
              <br />
              Education insurance, mortgage protection & Wealth creation plans
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Middle aged with grown up kids</TableCell>
            <TableCell>Planning for retirement & asset creation</TableCell>
            <TableCell>Retirement solutions & mortgage protection</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Across all life-stage</TableCell>
            <TableCell>Health Plans</TableCell>
            <TableCell>Health Insurance</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="space-y-4 text-center py-4">
        <p className="text-sm">
          To find out, what TRIKA Financials plan will best suit your requirements, check the product recommendation
          tool by
        </p>

        <p className="text-sm">
          Life Insurance is an effective tool to save tax, to know more here
         
        </p>
        <div className="space-y-2">
          <p className="text-primary font-medium">TRIKA Financials is Fast & Efficient</p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-primary">
              TRIKA financials – inspired by life – get a free no obligation life insurance quote in Scarborough -&gt;
            </p>
            <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    );
  }
  