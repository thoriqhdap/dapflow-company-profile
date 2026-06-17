import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "DapFlow - Digital Innovation & Development Agency",
    template: "%s | DapFlow",
  },
  description: "DapFlow is a modern agency delivering premium design and software solutions for business transformation.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "DapFlow - Digital Innovation Agency",
    description: "DapFlow delivers premium design and engineering solutions.",
    url: "https://dapflow.co.id",
    siteName: "DapFlow",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-[70px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
