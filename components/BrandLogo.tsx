"use client";

import { usePathname } from "next/navigation";
import { SITE_NAME } from "@/lib/site";

export default function BrandLogo({ size = 78 }: { size?: number }) {
  const pathname = usePathname();

  return (
    <a
      className="brand"
      href="/"
      aria-label={`${SITE_NAME} home`}
      onClick={(event) => {
        if (pathname === "/") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <img className="brand-mark" src="/images/logo.png" alt="" width={size} height={size} />
      <span className="brand-text">
        <span className="brand-kicker">AL-RAZZAK</span>
        <span className="brand-name">Grooming Lounge</span>
      </span>
    </a>
  );
}
