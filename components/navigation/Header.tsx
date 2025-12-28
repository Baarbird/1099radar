"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign in - just close the popover for now
    setSignInOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-lg supports-backdrop-filter:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex flex-col items-start space-y-1 transition-opacity hover:opacity-80">
          <img 
            src="/logo-radar.svg" 
            alt="1099 Radar Logo" 
            className="h-16 w-16 object-contain"
          />
          <span className="text-2xl font-bold tracking-tight font-display">1099 Radar</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/tools/compliance-check"
            className="text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            Tools
          </Link>
          <Link
            href="/learn/hire-contractor"
            className="text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            Learn
          </Link>
          <Link
            href="/learn/federal-focus"
            className="text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            Updates
          </Link>
          <Link
            href="/learn/deadlines"
            className="text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            Deadlines
          </Link>
          <Link
            href="/radar"
            className="text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            Radar
          </Link>
          <Link
            href="/tools/calculator"
            className="text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            Calculator
          </Link>
          <Link
            href="/about"
            className="text-base font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Popover open={signInOpen} onOpenChange={setSignInOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="text-base font-semibold tracking-tight">
                Sign in
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Sign in</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter your credentials to access your account
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email or Username</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email or username"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    type="button"
                    variant="link"
                    className="h-auto p-0 text-xs text-muted-foreground"
                  >
                    Forgot password?
                  </Button>
                </div>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-popover px-2 text-muted-foreground">Or</span>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setSignInOpen(false)}
                >
                  Register new account
                </Button>
              </form>
            </PopoverContent>
          </Popover>
          <Link href="/tools/compliance-check">
            <Button className="text-base font-semibold tracking-tight px-6">
              Get Started It's Free
            </Button>
          </Link>
        </div>

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
                className="text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/learn/hire-contractor"
                className="text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/radar"
                className="text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Radar
              </Link>
              <div className="pt-4 border-t border-border">
                <Popover open={signInOpen} onOpenChange={setSignInOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-lg font-semibold tracking-tight">
                      Sign in
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80" align="start">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Sign in</h3>
                        <p className="text-sm text-muted-foreground">
                          Enter your credentials to access your account
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile-email">Email or Username</Label>
                        <Input
                          id="mobile-email"
                          type="text"
                          placeholder="Enter your email or username"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile-password">Password</Label>
                        <Input
                          id="mobile-password"
                          type="password"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Button
                          type="button"
                          variant="link"
                          className="h-auto p-0 text-xs text-muted-foreground"
                        >
                          Forgot password?
                        </Button>
                      </div>
                      <Button type="submit" className="w-full">
                        Sign in
                      </Button>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-popover px-2 text-muted-foreground">Or</span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => setSignInOpen(false)}
                      >
                        Register new account
                      </Button>
                    </form>
                  </PopoverContent>
                </Popover>
                <Link href="/tools/compliance-check" onClick={() => setOpen(false)}>
                  <Button className="w-full mt-3 text-lg font-semibold tracking-tight py-6">
                    Get Started It's Free
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

