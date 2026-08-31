import Link from "next/link";
import { ADDRESS, SITE_NAME } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <img src="/images/hero.jpg" alt={`Vintage barber chairs at ${SITE_NAME}`} width={1800} height={1200} />
      </div>
      <div className="hero-veil" />
      <div className="container hero-content">
        <p className="eyebrow">
          <span className="status-dot" />
          <span>Open 24 hours · every day</span>
        </p>
        <h1>
          <span className="display">The art of a perfect cut.</span>
        </h1>
        <p className="lede">
          {SITE_NAME} welcomes you for men’s grooming — hair, beard, colour, keratin and facial care — and a social
          mission that puts jobs and skills first.
        </p>
        <div className="hero-cta">
          <Link className="btn btn-gold btn-lg" href="/combos">
            View packages
          </Link>
          <Link className="btn btn-outline btn-lg" href="/services">
            Full price list
          </Link>
        </div>
        <dl className="hero-meta">
          <div>
            <dt>Hours</dt>
            <dd>24 hours</dd>
          </div>
          <div>
            <dt>Founders</dt>
            <dd>Tufail &amp; Nadia</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>{ADDRESS}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
