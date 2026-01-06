"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { galleries, siteName } from "@/lib/galleries";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/" className="brandLink">
        {siteName}
      </Link>

      <nav className="nav">
        {galleries.map((g) => {
          const href = `/work/${g.slug}`;
          const active = pathname === href;

          return (
            <Link
              key={g.slug}
              href={href}
              className={`navLink ${active ? "active" : ""}`}
            >
              {g.label}
            </Link>
          );
        })}
      </nav>

      <div className="sidebarFooter">
        <Link href="/contact" className="navLink">
          Contact
        </Link>
      </div>
    </aside>
  );
}
