"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { ADDRESS, CALL_URL, NAV_LINKS, PHONE_DISPLAY, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandLogo size={88} />
            <p>Open 24 hours · every day</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <p>Explore</p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  if (pathname === link.href) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div>
            <p>Contact</p>
            <a href={CALL_URL}>{PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <p>Muhammad Tufail · Nadia Shahid-Ahmad</p>
            <p>{ADDRESS}</p>
          </div>
          <p className="legal">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
      <a className="wa-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${SITE_NAME}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.79 14.2c-.24.68-1.4 1.24-1.93 1.32-.49.07-1.12.1-1.81-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.18-4.94-4.38-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.24-.27.64-.39 1.02-.39.12 0 .23 0 .33.01.3.01.44.03.64.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.09.19-.14.31-.27.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.56.16.27.7 1.16 1.5 1.88 1.03.93 1.9 1.22 2.17 1.36.27.14.43.12.59-.07.16-.19.68-.8.86-1.07.18-.27.36-.22.61-.13.25.09 1.6.75 1.87.89.27.14.45.21.52.32.07.12.07.68-.17 1.36z"
          />
        </svg>
      </a>
    </>
  );
}
