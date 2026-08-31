"use client";

import { FormEvent, useEffect, useState } from "react";
import { PHONE_E164, SITE_NAME } from "@/lib/site";

const services = [
  "Men Hair Cut",
  "Child Hair Cut",
  "Combo 1 — Cut + Beard",
  "Combo 4 — Signature",
  "Combo 7 — Signature + Facial",
  "Keratin Treatment",
  "Facial",
  "Other",
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function toLocalValue(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function nextSlot() {
  const date = new Date();
  date.setSeconds(0, 0);
  const remainder = date.getMinutes() % 15;
  if (remainder !== 0) date.setMinutes(date.getMinutes() + (15 - remainder));
  return date;
}

function formatWhen(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function BookingForm() {
  const [when, setWhen] = useState("");
  const [min, setMin] = useState("");

  useEffect(() => {
    const start = nextSlot();
    const value = toLocalValue(start);
    setMin(value);
    setWhen(value);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const service = String(data.get("service") || "").trim();
    const selected = String(data.get("when") || when).trim();
    const message = `Hello ${SITE_NAME}, this is ${name}. Please book ${service}. Preferred date & time: ${formatWhen(selected)}.`;
    window.open(`https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="book-form" onSubmit={onSubmit}>
      <h3>Book on WhatsApp</h3>
      <p>Tell us your name, a service, and pick a date and time from the calendar. We open WhatsApp with the message ready — you only tap send.</p>
      <label>
        <span>Your name</span>
        <input type="text" name="name" required autoComplete="name" placeholder="Ahmed" />
      </label>
      <label>
        <span>Service / combo</span>
        <select name="service" required defaultValue="Men Hair Cut">
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Date &amp; time</span>
        <input type="datetime-local" name="when" required step={900} min={min} value={when} onChange={(event) => setWhen(event.target.value)} />
      </label>
      <button className="btn btn-gold btn-lg btn-block" type="submit">
        Open WhatsApp
      </button>
    </form>
  );
}
