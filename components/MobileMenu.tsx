"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="mobileMenu">
      <header className="mobileHeader">


        <button
          type="button"
          className="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burgerLine" />
          <span className="burgerLine" />
          <span className="burgerLine" />
        </button>
      </header>

      {/* This pushes content down when open */}
      <div className={`mobileDropdown ${open ? "open" : ""}`}>
        <nav className="mobileDropdownInner">
          <Link className={`mobileLink ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>

          <Link
            className={`mobileLink ${pathname === "/work/work-1" ? "active" : ""}`}
            href="/work/work-1"
          >
            Whole
          </Link>

          <Link
            className={`mobileLink ${pathname === "/work/work-2" ? "active" : ""}`}
            href="/work/work-2"
          >
            Figures
          </Link>

          <Link
            className={`mobileLink ${pathname === "/work/work-3" ? "active" : ""}`}
            href="/work/work-3"
          >
            Either/Or
          </Link>

          <Link
            className={`mobileLink ${pathname === "/work/work-4" ? "active" : ""}`}
            href="/work/work-4"
          >
            Installation
          </Link>

          <Link
            className={`mobileLink ${pathname === "/contact" ? "active" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
