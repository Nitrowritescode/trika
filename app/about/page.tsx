"use client";

import Image from "next/image";
import { motion } from "framer-motion";






export default function AboutUs() {
 

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-foreground mb-4">
            At TRIKA Financials, we understand your financial and protection
            needs and offer solutions such as life insurance, critical illness
            insurance, disability insurance, retirement savings(RRSP),
            investments (RESP/Annuities), health and drug benefit insurance,
            travel insurance and wealth management products. At TRIKA Financials
            we have tie ups with most of the major life insurance companies in
            Canada offering wide range of insurance products catering to the
            savings, investment, protection and retirement needs of our
            customers. These Canadian life insurance companies have strong
            presence in Canada and cater to needs of Canadians from coast to
            coast. While offering solution to client we do a complete need
            analysis and provide the best life insurance/wealth management
            solution available in Canadian insurance industry. Being an
            independent company we always take customer’s interest as our first
            and foremost priority. Based out of Mississauga TRIKA Financials
            caters to the insurance /financial needs of customer’s from Greater
            Toronto Area (Toronto, Scarborough, Markham, Mississauga, Brampton,
            Milton, Oakville). Other then Greater Toronto Area TRIKA Financials
            has clients from all over Ontario & Alberta. TRIKA Financials has
            plans to expand its operations in other Canadian provinces as well,
            at present we have our associates present in Main land British
            Columbia, Vancouver Island, Victoria, Manitoba, Saskatchewan and in
            future we will be extending our services to other Canadian provinces
            such as Quebec, Nova Scotia, Prince Edward Island, Yukon, North West
            Territories, New Brunswick, Newfoundland & Labrador, Nunavut to
            become a truly Canadian organization.
          </p>
          <p className="text-foreground font-medium mb-6">
            With a dedicated team of experts, we ensure that you get the right
            guidance and access to the best plans in the industry. Let us help
            you build a secure and prosperous tomorrow.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <Image
            src="/aboutgif.webp"
            alt="About Us"
            width={500}
            height={350}
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>
      <div className="container mx-auto py-16 px-6 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Our Values Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-foreground">
              &quot;Inspired by Life&quot; to be the most successful and admired
              financial management company in Canada; TRIKA Financials strives
              to provide the best available financial & insurance product suite
              to fellow Canadians.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/values.webp"
              alt="Our Values"
              width={400}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          {/* Vision Statements Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/visionstatements.webp"
              alt="Vision Statements"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Vision Statements
            </h2>
            <p className="text-foreground">
              TRIKA Financials is truly “Inspired by Life” and has a strong
              focus on five aspects of TRIKA. As competent and experienced
              insurance agents, our main priorities are respectability and
              reliability when it comes to advising our clients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section  */}
      
    
    </div>
  );
}
