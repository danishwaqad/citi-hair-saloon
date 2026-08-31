import { CALL_URL, PHONE_DISPLAY, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section-head">
          <p className="kicker">About</p>
          <h2>{SITE_NAME}</h2>
          <p className="section-copy">
            Muhammad Tufail (Glasgow, Scotland) and Nadia Shahid-Ahmad (Frankfurt Region, Germany) are siblings,
            entrepreneurs, and co-founders of {SITE_NAME}. Driven by the belief that meaningful employment creates
            dignity, independence, and opportunity, they established this initiative to generate sustainable jobs in
            Pakistan. Profits generated through the business are reinvested directly into expanding the project,
            creating additional employment opportunities, supporting skills development, and contributing to long-term
            social and economic progress.
          </p>
          <p className="section-copy-ur" lang="ur" dir="rtl">
            محمد طفیل (گلاسگو، اسکاٹ لینڈ) اور نادیہ شاہد احمد (فرینکفرٹ ریجن، جرمنی) بہن بھائی، کاروباری شخصیات اور{" "}
            {SITE_NAME} کے شریک بانی ہیں۔ اس یقین کے ساتھ کہ باعزت روزگار انسان کو وقار، خودمختاری اور بہتر مستقبل
            فراہم کرتا ہے، انہوں نے اس فلاحی اقدام کا آغاز کیا تاکہ پاکستان میں پائیدار روزگار کے مواقع پیدا کیے جا
            سکیں۔ اس منصوبے سے حاصل ہونے والا منافع دوبارہ اسی مشن میں لگایا جاتا ہے تاکہ مزید ملازمتیں پیدا کی جائیں،
            افراد کو پیشہ ورانہ مہارتیں فراہم کی جائیں اور طویل مدتی سماجی و معاشی ترقی میں اپنا کردار ادا کیا جا سکے۔
          </p>
        </header>

        <div className="founders">
          <article className="founder-card">
            <h3>Muhammad Tufail</h3>
            <p className="founder-role">Co-founder · Glasgow, Scotland</p>
            <p>
              Muhammad Tufail is a business-minded professional with an international academic background, holding a
              degree in Modern Languages (Russian and English) with a specialization in International Economic Relations
              from Minsk State Linguistic University, Belarus, and a Bachelor of Science in Agriculture from the
              University of Glasgow, Scotland. His experience spans international relations, community engagement, and
              public service, including his candidacy for the Scottish Parliament (MSP).
            </p>
            <p>
              Driven by a strong commitment to social impact, Muhammad co-founded {SITE_NAME} with his sister, Nadia
              Shahid-Ahmad. Their shared vision is to create sustainable employment opportunities, develop professional
              skills, and empower individuals to build a better future for themselves and their communities.
            </p>
            <p className="founder-ur" lang="ur" dir="rtl">
              محمد طفیل ایک بین الاقوامی تعلیمی پس منظر رکھنے والے پیشہ ور ہیں۔ انہوں نے بیلاروس کی Minsk State Linguistic
              University سے جدید زبانوں (روسی اور انگریزی) اور بین الاقوامی اقتصادی تعلقات میں ڈگری حاصل کی، جبکہ
              University of Glasgow, Scotland سے زرعی علوم (BSc Agriculture) کی ڈگری بھی حاصل کی۔ ان کے تجربات بین
              الاقوامی تعلقات، سماجی ترقی اور عوامی خدمت کے مختلف شعبوں پر محیط ہیں، جن میں اسکاٹش پارلیمنٹ (MSP) کے
              امیدوار کے طور پر خدمات بھی شامل ہیں۔ سماجی بہتری اور مثبت تبدیلی کے جذبے کے تحت، محمد نے اپنی بہن نادیا شاہد
              احمد کے ساتھ مل کر {SITE_NAME} کی بنیاد رکھی۔ یہ ایک فلاحی اقدام ہے جس کا مقصد پاکستان میں پائیدار روزگار کے
              مواقع پیدا کرنا، پیشہ ورانہ مہارتوں کو فروغ دینا اور افراد کو اپنے اور اپنی برادری کے لیے بہتر مستقبل تعمیر
              کرنے کے قابل بنانا ہے۔
            </p>
          </article>
          <article className="founder-card">
            <h3>Nadia Shahid-Ahmad</h3>
            <p className="founder-role">Co-founder · Frankfurt Region, Germany</p>
            <p>
              Nadia Shahid-Ahmad is an accomplished Electrical Engineer with more than 25 years of experience in the
              automotive industry. She currently serves as Display Component Manager for Mercedes projects (Cover Glass),
              and Sub Project Manager for the Ford Display Module Project, leading the development and delivery of
              advanced display technologies for global automotive customers. Her expertise includes project management,
              quality management, manufacturing technologies, and international stakeholder collaboration.
            </p>
            <p>
              Together with her brother, Muhammad Tufail, Nadia co-founded {SITE_NAME}, a charitable initiative dedicated
              to creating employment opportunities and supporting economic development in Pakistan. Their mission is to
              combine entrepreneurship with social responsibility, helping individuals gain skills, confidence, and
              long-term career prospects.
            </p>
            <p className="founder-ur" lang="ur" dir="rtl">
              نادیا شاہد احمد ایک تجربہ کار الیکٹریکل انجینئر ہیں جنہیں آٹوموٹیو انڈسٹری میں 25 سال سے زائد کا عملی تجربہ
              حاصل ہے۔ وہ اس وقت Mercedes Projects کے لیے (Cover Glass) کی Display Component Manager اور Ford Display
              Module Project کی Sub Project Manager کے طور پر خدمات انجام دے رہی ہیں۔ ان کی مہارتوں میں پروجیکٹ مینجمنٹ،
              کوالٹی مینجمنٹ، مینوفیکچرنگ ٹیکنالوجیز اور بین الاقوامی شراکت داروں کے ساتھ تعاون شامل ہے۔ اپنے بھائی محمد
              طفیل کے ساتھ مل کر، نادیا نے {SITE_NAME} کی مشترکہ بنیاد رکھی۔ اس فلاحی منصوبے کا مقصد روزگار کے مواقع پیدا
              کرنا، ہنر مند افراد کی حوصلہ افزائی کرنا اور پاکستان میں سماجی و معاشی ترقی میں مثبت کردار ادا کرنا ہے۔ دونوں
              بہن بھائی اس یقین کے ساتھ کام کر رہے ہیں کہ کاروباری سوچ اور سماجی ذمہ داری کو یکجا کرکے معاشرے میں دیرپا
              تبدیلی لائی جا سکتی ہے۔
            </p>
          </article>
        </div>

        <div className="about-cta-row">
          <figure className="about-photo">
            <img
              src="/images/tools.jpg"
              alt={`Precision haircut in the chair at ${SITE_NAME}`}
              width={1200}
              height={1500}
            />
            <figcaption>
              <span>Chair-side craft, open 24 hours.</span>
              <span lang="ur" dir="rtl">
                چوبیس گھنٹے کھلا
              </span>
            </figcaption>
          </figure>
          <div className="about-actions-block">
            <p>
              For bookings, complaints or feedback, contact Muhammad Tufail. Tap WhatsApp and your chat opens with our
              number already filled.
            </p>
            <div className="about-actions">
              <a className="btn btn-gold" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
              <a className="btn btn-outline-dark" href={CALL_URL}>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
