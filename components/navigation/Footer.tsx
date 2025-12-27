import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container px-6 py-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-base font-bold tracking-tight">1099 Radar</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clear, real-time guidance on federal contractor compliance.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-tight">Tools</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/tools/compliance-check"
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  Compliance Check
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/nec-vs-misc"
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  1099-NEC vs 1099-MISC
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/classification"
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  Contractor vs Employee
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/calculator"
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  Rate & Tax Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-tight">Learn</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/learn/hire-contractor"
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  How to Hire
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/fire-contractor"
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  How to Fire
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/deadlines"
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  Deadlines & Penalties
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-tight">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/radar"
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  Federal Updates
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="font-semibold">Disclaimer:</strong> Information only, not legal or tax advice.
          </p>
          <p className="text-sm text-muted-foreground text-center mt-4">
            © {new Date().getFullYear()} 1099 Radar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

