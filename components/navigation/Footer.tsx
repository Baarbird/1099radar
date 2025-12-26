import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">1099Radar</h3>
            <p className="text-sm text-muted-foreground">
              Clear, real-time guidance on federal contractor compliance.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools/compliance-check"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Compliance Check
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/nec-vs-misc"
                  className="text-muted-foreground hover:text-foreground"
                >
                  1099-NEC vs 1099-MISC
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/classification"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contractor vs Employee
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/calculator"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Rate & Tax Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/learn/hire-contractor"
                  className="text-muted-foreground hover:text-foreground"
                >
                  How to Hire
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/fire-contractor"
                  className="text-muted-foreground hover:text-foreground"
                >
                  How to Fire
                </Link>
              </li>
              <li>
                <Link
                  href="/learn/deadlines"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Deadlines & Penalties
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/radar"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Federal Updates
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Disclaimer:</strong> Information only, not legal or tax advice.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2">
            © {new Date().getFullYear()} 1099Radar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

