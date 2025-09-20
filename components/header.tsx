"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="#home" className="block">
            <img
              src="https://static.wixstatic.com/media/17b30c_dbde2f463c7c4f458435f8c914c8ceda~mv2.png/v1/fill/w_980,h_291,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RRealtors_logo%20(2).png"
              alt="R Realtors Logo"
              className="w-32 sm:w-40"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#why-choose"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Why Choose
          </a>
          <a
            href="#amenities"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Amenities
          </a>
          <a
            href="#location"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Location
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="#gallery"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Gallery
          </a>
        </nav>

        {/* Right actions (Desktop) */}
        <div className="hidden sm:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent hover:bg-primary hover:text-white"
          >
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+917211161521">Call Now</a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur px-4 py-4 space-y-4">
          <a
            href="#why-choose"
            className="block text-sm font-medium hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Why Choose
          </a>
          <a
            href="#amenities"
            className="block text-sm font-medium hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Amenities
          </a>
          <a
            href="#location"
            className="block text-sm font-medium hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Location
          </a>
          <a
            href="#pricing"
            className="block text-sm font-medium hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#gallery"
            className="block text-sm font-medium hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Gallery
          </a>

          <Button
            variant="outline"
            size="sm"
            className="w-full bg-transparent hover:bg-primary hover:text-white"
          >
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+917211161521">Call Now</a>
          </Button>
        </div>
      )}
    </header>
  );
}
