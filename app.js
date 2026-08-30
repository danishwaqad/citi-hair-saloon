const PHONE_E164 = "447577486677";
const OPEN_HOUR = 10;
const CLOSE_HOUR = 22;

const nav = document.getElementById("site-nav");
const toggle = document.querySelector(".nav-toggle");
const year = document.getElementById("year");
const form = document.getElementById("book-form");

if (year) year.textContent = String(new Date().getFullYear());

function isOpenNow() {
  const hour = new Date().getHours();
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}

function applyOpenStatus() {
  const open = isOpenNow();
  document.querySelectorAll("[data-open-dot]").forEach((dot) => {
    dot.classList.toggle("is-closed", !open);
  });
  document.querySelectorAll("[data-open-label]").forEach((el) => {
    el.textContent = "Open daily · 10:00 AM – 10:00 PM";
  });
  document.querySelectorAll("[data-open-text]").forEach((el) => {
    el.textContent = open ? "Open now · until 10:00 PM" : "Closed now · opens 10:00 AM";
  });
}

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const id = tab.dataset.tab;
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("is-active", t === tab);
      t.setAttribute("aria-selected", String(t === tab));
    });
    document.querySelectorAll(".panel").forEach((panel) => {
      const match = panel.dataset.panel === id;
      panel.classList.toggle("is-active", match);
      panel.hidden = !match;
    });
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const service = String(data.get("service") || "").trim();
  const when = String(data.get("when") || "").trim();
  const message = `Hello Citi Hair Saloon, this is ${name}. Please book ${service}. Preferred time: ${when}.`;
  window.open(`https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

applyOpenStatus();
