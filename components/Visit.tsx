import { ADDRESS, CALL_URL, PHONE_DISPLAY, SITE_NAME } from "@/lib/site";
import BookingForm from "@/components/BookingForm";

export default function Visit() {
  return (
    <section className="section section-visit" id="visit">
      <div className="container visit-grid">
        <div>
          <p className="kicker">Find us</p>
          <h2>Hours &amp; location</h2>
          <div className="hours-card">
            <div className="hours-status">
              <span className="status-dot" />
              <strong>Open now · 24 hours</strong>
            </div>
            <table className="hours-table">
              <caption className="sr-only">Weekly opening hours</caption>
              <tbody>
                <tr>
                  <th>Monday – Sunday</th>
                  <td>Open 24 hours</td>
                </tr>
                <tr>
                  <th>Day</th>
                  <td>Open all day</td>
                </tr>
                <tr>
                  <th>Night</th>
                  <td>Open all night</td>
                </tr>
              </tbody>
            </table>
            <p className="fineprint">We are open 24 hours a day, 7 days a week — walk in or book ahead on WhatsApp.</p>
          </div>
          <address className="visit-address">
            <strong>{SITE_NAME}</strong>
            <span>{ADDRESS}</span>
            <span>Muhammad Tufail · Nadia Shahid-Ahmad</span>
            <a href={CALL_URL}>{PHONE_DISPLAY}</a>
          </address>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
