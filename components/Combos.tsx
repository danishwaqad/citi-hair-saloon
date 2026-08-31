const combos = [
  { no: "01", en: "Hair Cut + Beard Cut", ur: "بالوں کی کٹنگ + داڑھی کی کٹنگ", price: "Rs 450" },
  {
    no: "02",
    en: "Hair Cut + Beard Cut + Cleansing (Double Action Cream)",
    ur: "بالوں کی کٹنگ + داڑھی کی کٹنگ + کلینزنگ (ڈبل ایکشن کریم)",
    price: "Rs 600",
  },
  {
    no: "03",
    en: "Hair Cut + Beard Cut + Color Head & Beard (Eazi)",
    ur: "بالوں کی کٹنگ + داڑھی کی کٹنگ + سر اور داڑھی کا رنگ (ایزی)",
    price: "Rs 800",
  },
  {
    no: "04",
    featured: true,
    en: "Cut, beard, cleanse, style, shoulder massage & wash",
    ur: "بالوں کی کٹنگ + داڑھی کی کٹنگ + کلینزنگ (ڈبل ایکشن کریم) + بالوں کی سجاوٹ + کندھوں کا مساج + سر کی دھلائی",
    price: "Rs 1,000",
  },
  {
    no: "05",
    en: "Hair Cut + Beard Cut + Color Head & Beard (Apple / Keune / Elelik)",
    ur: "بالوں کی کٹنگ + داڑھی کی کٹنگ + سر اور داڑھی کا رنگ (ایپل / کیون / ایلیک)",
    price: "Rs 1,000",
  },
  {
    no: "06",
    en: "Cut + beard + Double Action cleanse + premium colour",
    ur: "بالوں کی کٹنگ + داڑھی کی کٹنگ + کلینزنگ (ڈبل ایکشن کریم) + سر اور داڑھی کا رنگ (ایپل / کیون / ایلیک)",
    price: "Rs 1,200",
  },
  {
    no: "07",
    wide: true,
    en: "Combo 4 + Facial (Dermacos / Jomson)",
    ur: "کومبو نمبر 4 + فیشل (ڈرماکوس / جومسن)",
    price: "Rs 3,000",
  },
];

export default function Combos() {
  return (
    <section className="section section-dark" id="combos">
      <div className="container">
        <header className="section-head light">
          <p className="kicker">Special packages</p>
          <h2>Combos</h2>
          <p className="section-copy">
            Seven set menus from the official list — cut, beard, cleanse, colour and facial, bundled so you spend less
            than booking each service alone.
          </p>
        </header>
        <div className="combo-grid">
          {combos.map((combo) => (
            <article
              key={combo.no}
              className={`combo-card${combo.featured ? " featured" : ""}${combo.wide ? " wide" : ""}`}
            >
              {combo.featured ? <p className="badge">Signature</p> : null}
              <p className="combo-no">{combo.no}</p>
              <h3>{combo.en}</h3>
              <p className="ur" lang="ur" dir="rtl">
                {combo.ur}
              </p>
              <p className="combo-price">{combo.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
