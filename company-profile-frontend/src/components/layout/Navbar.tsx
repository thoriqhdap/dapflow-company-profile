"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-border/40 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-primary text-primary-foreground rounded-lg transition-transform group-hover:scale-105">
            <Building2 className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            DAPFLOW
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-primary",
                  isActive
                    ? "bg-secondary text-primary font-semibold"
                    : "text-muted-foreground hover:bg-muted/50"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA or Secondary Action */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full shadow-lg hover:shadow-primary/20 transition-all">
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] bottom-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border/40 transition-transform duration-300 ease-in-out md:hidden flex flex-col px-6 py-8 space-y-6 shadow-xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2 border-b border-border/20 transition-colors",
                  isActive ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          <Button className="w-full py-6 text-lg rounded-xl">
            Get in Touch
          </Button>
        </Link>
      </div>
    </header>
  );
}
