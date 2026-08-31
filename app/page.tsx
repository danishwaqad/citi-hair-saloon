import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Combos from "@/components/Combos";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Visit from "@/components/Visit";
import { SITE_NAME } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: SITE_NAME,
  image: "/images/logo.png",
  url: "/",
  telephone: "+447577486677",
  founder: [
    { "@type": "Person", name: "Muhammad Tufail" },
    { "@type": "Person", name: "Nadia Shahid-Ahmad" },
  ],
  address: { "@type": "PostalAddress", streetAddress: "C80, First Floor" },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "Rs",
  sameAs: ["https://wa.me/447577486677"],
};

export default function HomePage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <section className="strip" aria-label="Highlights">
        <div className="container strip-grid">
          <article>
            <h2>Open 24 hours</h2>
            <p>Day and night, every day — walk in or book ahead on WhatsApp.</p>
          </article>
          <article>
            <h2>Signature packages</h2>
            <p>Seven combos from the price list — more grooming in one visit.</p>
          </article>
          <article>
            <h2>Co-founders</h2>
            <p>Muhammad Tufail and Nadia Shahid-Ahmad — siblings building jobs and skills through this lounge.</p>
          </article>
        </div>
      </section>
      <Services />
      <Combos />
      <About />
      <Vision />
      <Visit />
    </main>
  );
}
