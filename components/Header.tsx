"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { CALL_URL, NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="gold-rail" aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <BrandLogo />

          <nav className={`nav${open ? " is-open" : ""}`} id="site-nav" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "is-active" : undefined}
                  onClick={() => {
                    setOpen(false);
                    if (active) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <a className="btn btn-ghost" href={CALL_URL}>
              Call
            </a>
            <a className="btn btn-gold" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <button
              className="nav-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="site-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
