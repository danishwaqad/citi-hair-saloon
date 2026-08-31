"use client";

import { useMemo, useState } from "react";

type Item = { en: string; ur: string; price: string };
type ColourBrand = { name: string; ur: string; items: Item[] };

const cut: Item[] = [
  { en: "Child Hair Cut", ur: "بچوں کے بالوں کی کٹنگ", price: "Rs 200" },
  { en: "Men Hair Cut", ur: "مردانہ کٹنگ", price: "Rs 300" },
  { en: "Beard Cut (Simple Razor)", ur: "داڑھی کٹنگ (سادہ ریزر)", price: "Rs 200" },
  { en: "Beard Cut (Disposable Razor)", ur: "داڑھی کٹنگ (ڈسپوزیبل ریزر)", price: "Rs 250" },
  { en: "Beard Trim (Trimmer)", ur: "داڑھی ٹرم (ٹریمر)", price: "Rs 250" },
  { en: "Hair Styling", ur: "ہیئر اسٹائلنگ", price: "Rs 100" },
  { en: "Head Wash", ur: "ہیڈ واش", price: "Rs 100" },
];

const colour: ColourBrand[] = ["Eazi|ایزی", "Keune|کیون", "Apple|ایپل", "Elelik|ایلیک"].map((entry) => {
  const [name, ur] = entry.split("|");
  const premium = name !== "Eazi";
  return {
    name,
    ur,
    items: [
      { en: "Beard Colour", ur: "داڑھی کا رنگ", price: premium ? "Rs 250" : "Rs 200" },
      { en: "Head Colour", ur: "بالوں کا رنگ", price: premium ? "Rs 400" : "Rs 300" },
      { en: "Beard + Head", ur: "داڑھی اور سر", price: premium ? "Rs 650" : "Rs 500" },
    ],
  };
});

const care: Item[] = [
  { en: "Keratin Treatment", ur: "کیراٹین ٹریٹمنٹ", price: "Rs 2,500" },
  { en: "Facial (Dermacos Cream)", ur: "فیشل (ڈرماکوس کریم)", price: "Rs 2,500" },
  { en: "Facial (JOMSON White Cream)", ur: "فیشل (جومسن وائٹ کریم)", price: "Rs 2,500" },
  { en: "Cleansing (Double Action Cream)", ur: "کلینزنگ (ڈبل ایکشن کریم)", price: "Rs 200" },
  { en: "Cleansing (Dermacos)", ur: "کلینزنگ (ڈرماکوس)", price: "Rs 400" },
  { en: "Cleansing (JOMSON White)", ur: "کلینزنگ (جومسن وائٹ)", price: "Rs 700" },
];

const massage: Item[] = [
  { en: "Simple Head Massage", ur: "سادہ ہیڈ مساج", price: "Rs 200" },
  { en: "Electric Head Massage", ur: "الیکٹرک ہیڈ مساج", price: "Rs 300" },
  { en: "Beard Waxing", ur: "داڑھی ویکسنگ", price: "Rs 500" },
  { en: "Manicure + Pedicure", ur: "مینیکیور + پیڈی کیور", price: "Rs 1,400" },
];

const tabs = [
  { id: "cut", en: "Hair cut & styling", ur: "بالوں کی کٹائی اور اسٹائلنگ" },
  { id: "colour", en: "Hair colour", ur: "بالوں کا رنگ" },
  { id: "care", en: "Keratin & facial", ur: "کیراٹین اور فیشل کیئر" },
  { id: "massage", en: "Massage & care", ur: "مساج، ویکسنگ اور دیکھ بھال" },
] as const;

function PriceList({ items }: { items: Item[] }) {
  return (
    <ul className="price-list">
      {items.map((item) => (
        <li key={item.en}>
          <span className="svc">
            <strong>{item.en}</strong>
            <em lang="ur" dir="rtl">
              {item.ur}
            </em>
          </span>
          <span className="amt">{item.price}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("cut");
  const colourGrid = useMemo(() => colour, []);

  return (
    <section className="section" id="services">
      <div className="container">
        <header className="section-head">
          <p className="kicker">Price list</p>
          <h2>Services</h2>
          <p className="section-copy">Hair, beard, colour, keratin and care — priced as listed.</p>
        </header>

        <div className="category-tabs" role="tablist" aria-label="Service categories">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`tab${tab === item.id ? " is-active" : ""}`}
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
            >
              <span>{item.en}</span>
              <small lang="ur" dir="rtl">
                {item.ur}
              </small>
            </button>
          ))}
        </div>

        {tab === "cut" && <PriceList items={cut} />}
        {tab === "care" && <PriceList items={care} />}
        {tab === "massage" && <PriceList items={massage} />}
        {tab === "colour" && (
          <div className="brand-blocks">
            {colourGrid.map((brand) => (
              <article className="brand-card" key={brand.name}>
                <h3>
                  {brand.name}{" "}
                  <span lang="ur" dir="rtl">
                    {brand.ur}
                  </span>
                </h3>
                <ul className="price-list compact">
                  {brand.items.map((item) => (
                    <li key={`${brand.name}-${item.en}`}>
                      <span className="svc">
                        <strong>{item.en}</strong>
                        <em lang="ur" dir="rtl">
                          {item.ur}
                        </em>
                      </span>
                      <span className="amt">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
