import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trika Financials",
  description: "Insurance Company Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body className={inter.className}>
      <Providers>
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>
        <Footer/>
      </Providers>
        </body>
    </html>
  );
}
