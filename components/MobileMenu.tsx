"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-gray-900/95 backdrop-blur-md border-l border-gray-800/50">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col space-y-4 mt-8">
          <Link 
            href="/" 
            className="text-lg font-medium text-white hover:text-pastel-blue transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-medium text-white hover:text-pastel-blue transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/#services" 
            className="text-lg font-medium text-white hover:text-pastel-blue transition-colors"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/find-tutor"
            className="text-lg font-medium text-white hover:text-pastel-blue transition-colors"
            onClick={() => setOpen(false)}
          >
            Find a tutor
          </Link>
          <Link 
            href="/#pricing" 
            className="text-lg font-medium text-white hover:text-pastel-blue transition-colors"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/#contact" 
            className="text-lg font-medium text-white hover:text-pastel-blue transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/#waitlist" 
            className="text-lg font-medium text-white border border-yellow-500 p-2 rounded-lg hover:text-pastel-blue transition-colors"
            onClick={() => setOpen(false)}
          >
            Register Interest
          </Link>
          <Separator className="bg-gray-800/50" />
          <div className="flex flex-col space-y-2">
            <Link 
              href="mailto:team@aceeducate.co.uk" 
              className="text-sm text-gray-500 hover:text-pastel-blue transition-colors"
              onClick={() => setOpen(false)}
            >
              team@aceeducate.co.uk
            </Link>
            <Link 
              href="https://wa.me/447459627884" 
              className="text-sm text-gray-500 hover:text-pastel-blue transition-colors"
              onClick={() => setOpen(false)}
            >
              +44 7459 627884
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 