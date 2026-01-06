"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="burger"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="burgerLine" />
        <span className="burgerLine" />
        <span className="burgerLine" />
      </button>

      {open && (
        <div className="mobileMenuOverlay" onClick={() => setOpen(false)}>
          <div
            className="mobileMenuPanel"
            onClick={(e) => e.stopPropagation()}
          >
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
          </div>
        </div>
      )}
    </>
  );
}
