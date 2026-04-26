import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/programs", label: "Programs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar — like MU's top strip */}
      <div className="bg-primary text-white text-center py-2 px-4 text-xs font-semibold tracking-wide">
        Applications for the Next Cohort Are Open —&nbsp;
        <Link href="/apply" className="underline underline-offset-2 hover:no-underline inline-flex items-center gap-1">
          Apply Now <ArrowRight className="h-3 w-3 inline" />
        </Link>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-border">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="font-black text-xl tracking-tighter text-foreground hover:text-primary transition-colors">
              <img src="/fcc3.png" alt="Founders' Circle Connect Logo" className="h-23 w-auto" />         
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    location === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA — pill style like MU */}
            <div className="hidden md:block">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-foreground text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Become a Member <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 py-6 space-y-4">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors hover:text-foreground ${
                    location === link.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 bg-foreground text-white text-sm font-semibold px-6 py-3 rounded-full w-fit hover:opacity-90 transition-opacity mt-2"
              >
                Become a Member <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
