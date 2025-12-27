"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-lg supports-backdrop-filter:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex flex-col items-start space-y-1 transition-opacity hover:opacity-80">
          <img 
            src="/logo.png" 
            alt="1099 Radar Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tight">1099 Radar</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/tools/compliance-check"
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
          >
            Tools
          </Link>
          <Link
            href="/learn/hire-contractor"
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
          >
            Learn
          </Link>
          <Link
            href="/radar"
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
          >
            Radar
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="/tools/compliance-check"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/learn/hire-contractor"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/radar"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Radar
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

