"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
  <button
  className="burger"
  type="button"
  aria-label={open ? "Close menu" : "Open menu"}
  aria-expanded={open}
  onClick={() => setOpen(v => !v)}
>
  <span className="burgerLine" />
  <span className="burgerLine" />
  <span className="burgerLine" />
</button>

      {/* Overlay + Panel */}
      {open && (
        <div className="mobileMenuOverlay" onClick={() => setOpen(false)}>
          <nav className="mobileMenuPanel" onClick={(e) => e.stopPropagation()}>
            {/* IMPORTANT: all hrefs start with "/" so they are NOT relative */}
            <Link className="mobileLink" href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link
              className="mobileLink"
              href="/work/work-1"
              onClick={() => setOpen(false)}
            >
              Whole
            </Link>

            <Link
              className="mobileLink"
              href="/work/work-2"
              onClick={() => setOpen(false)}
            >
              Figures
            </Link>

            <Link
              className="mobileLink"
              href="/work/work-3"
              onClick={() => setOpen(false)}
            >
              Nomination
            </Link>

            <Link
              className="mobileLink"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
