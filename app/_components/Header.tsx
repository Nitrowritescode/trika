"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { LiaPhoneSquareSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="w-full">
      {/* Message bar */}
      <div className="bg-primary text-primary-foreground flex items-center justify-between">
        <div className="container flex px-2 md:px-4 lg:px-6 items-center space-x-2 lg:space-x-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <FaInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <FaFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <FaTwitter className="h-5 w-5" />
              <span className="sr-only">X (formerly Twitter)</span>
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center px-4">
          <span>
            <LiaPhoneSquareSolid size={30} />
          </span>
          <span className="">:18448287000</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-background border-b px-4">
        <div className="container flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-xl md:text-2xl lg:text-xl px-4"
          >
            Trika Financials
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link href="/about" passHref className="text-sm px-2 font-medium">
              About Us
            </Link>
            <Link href="/blog" passHref className="text-sm px-2 font-medium">
              Blog
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Personal Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                      {personalSolutions.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Business Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {businessSolutions.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Get a Quote</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 grid-cols-1">
                    {quoteOptions.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block py-2 hover:text-primary hover:bg-gray-800 hover:text-white hover:rounded-lg px-4"
                            target="_blank"
                          >
                            {item.title}
                            <div className="font-light text-sm "> 

                            {item.description}
                            </div>
                          </a>
                        ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/faq"
              passHref
              className="space-x-2 px-2 text-sm font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              passHref
              className="px-2 text-sm space-x-2 font-medium"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="about">
                      <AccordionTrigger>About Us</AccordionTrigger>
                      <AccordionContent>
                        <Link
                          href="/about"
                          className="block py-2 hover:text-primary"
                        >
                          About Trika Financials
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="personal">
                      <AccordionTrigger>Personal Solutions</AccordionTrigger>
                      <AccordionContent>
                        {personalSolutions.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="business">
                      <AccordionTrigger>Business Solutions</AccordionTrigger>
                      <AccordionContent>
                        {businessSolutions.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="quote">
                      <AccordionTrigger>Get a Quote</AccordionTrigger>
                      <AccordionContent>
                        {quoteOptions.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block py-2 hover:text-primary"
                            target="_blank"
                          >
                            {item.title}
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="mt-4 space-y-4">
                    <Link
                      href="/blog"
                      className="block py-2 hover:text-primary"
                    >
                      Blog
                    </Link>
                    <Link href="/faq" className="block py-2 hover:text-primary">
                      FAQ
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-2 hover:text-primary"
                    >
                      Let&apos;s Talk
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Navigation item data
const personalSolutions = [
  {
    title: "Personal Solutions",
    href: "/personal-solutions",
    description: "Customize your investment strategy for long-term growth.",
  },
  {
    title: "Life Insurance",
    href: "/personal-solutions/life-insurance",
    description: "Customize your investment strategy for long-term growth.",
  },
  {
    title: "Term Insurance",
    href: "/personal-solutions/term-insurance",
    description: "Affordable life insurance coverage for a set period.",
  },
  {
    title: "Universal Life",
    href: "/personal-solutions/universal-life",
    description: "Flexible life insurance with investment options.",
  },
  {
    title: "Whole Life",
    href: "/personal-solutions/whole-life",
    description: "Permanent life insurance with cash value benefits.",
  },
  {
    title: "Mortgage Insurance",
    href: "/personal-solutions/mortgage-insurance",
    description: "Protect your home and loved ones with mortgage coverage.",
  },
  {
    title: "Non Medical Insurance",
    href: "/personal-solutions/non-medical-insurance",
    description: "Life insurance coverage without medical exams.",
  },
  {
    title: "Disability Insurance",
    href: "/personal-solutions/disability-insurance",
    description: "Financial protection in case of disability or illness.",
  },
  {
    title: "Critical Illness Insurance",
    href: "/personal-solutions/critical-illness-insurance",
    description: "Lump sum payment for serious health conditions.",
  },
  {
    title: "Travel Insurance",
    href: "/personal-solutions/travel-insurance",
    description: "Comprehensive coverage for trips and vacations.",
  },
  {
    title: "Super Visa (Parents & Grand Parents) Visitor to Canada Insurance",
    href: "/personal-solutions/super-visa-insurance",
    description: "Insurance for parents and grandparents visiting Canada.",
  },
  {
    title: "Long Term Care",
    href: "/personal-solutions/long-term-care",
    description: "Support for long-term healthcare and assisted living.",
  },
  {
    title: "Health & Dental Benefits",
    href: "/personal-solutions/health-dental-benefits",
    description: "Coverage for medical and dental expenses.",
  },
  {
    title: "Investments",
    href: "/personal-solutions/investments",
    description: "Grow your wealth with smart investment strategies.",
  },
  {
    title: "Registered Education Savings Plan (RESP)",
    href: "/personal-solutions/resp",
    description: "Save for your child's education with government grants.",
  },
];

const businessSolutions = [
  {
    title: "Business Solutions",
    href: "/business-solutions",
    description: "Comprehensive insurance solutions to protect your business.",
  },
  {
    title: "Business Insurance",
    href: "/business-solutions/business-insurance",
    description: "Comprehensive insurance solutions to protect your business.",
  },
  {
    title: "Key Person Insurance",
    href: "/business-solutions/key-person-insurance",
    description: "Insurance coverage for key personnel in your company.",
  },
  {
    title: "Group Health Benefits",
    href: "/business-solutions/group-health-benefits",
    description: "Health and wellness benefits for your employees.",
  },
  {
    title: "Business Succession Planning",
    href: "/business-solutions/business-succession-planning",
    description: "Plan for the smooth transition of business ownership.",
  },
  {
    title: "Executive Retirement Planning",
    href: "/business-solutions/executive-retirement-planning",
    description: "Retirement solutions tailored for business executives.",
  },
];

const quoteOptions = [
  {
    title: "Health Insurance",
    href: "https://my.gms.ca/buyflow/health/quote?brokerid=593515",
    description: "Get a quote for comprehensive health coverage.",
  },
  {
    title: "Travel Insurance",
    href: "https://my.gms.ca/buyflow/travel/step1?brokerid=593515",
    description: "Protect your trips with travel insurance quotes.",
  },
  {
    title: "Visitors to Canada Insurance",
    href: "https://my.gms.ca/buyflow/vtc/step1?brokerid=593515",
    description: "Get coverage for visitors traveling to Canada.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
