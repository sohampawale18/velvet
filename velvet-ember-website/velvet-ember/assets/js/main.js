/* Velvet Ember — progressive enhancement only. Every page works without this file. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ---------- Config: integration points (fill in before launch) ---------- */
  var CONFIG = {
    // URL of a server-side endpoint or form provider that accepts POSTed JSON.
    // Leave empty until a provider is chosen and consent wording is approved.
    // While empty, the form tells the visitor nothing was sent. It never fakes success.
    FORM_ENDPOINT: ""
  };

  /* ---------- Analytics: push events to dataLayer (consumed by GTM if installed) ---------- */
  window.dataLayer = window.dataLayer || [];
  function track(event, params) {
    var payload = { event: event };
    for (var k in params) { if (Object.prototype.hasOwnProperty.call(params, k)) payload[k] = params[k]; }
    window.dataLayer.push(payload);
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a, button") : null;
    if (!a) return;
    if (a.hasAttribute("data-cta")) {
      track("cta_click", { cta_id: a.getAttribute("data-cta"), cta_text: a.textContent.trim(), page_path: location.pathname });
    }
    if (a.tagName === "A" && a.hostname && a.hostname !== location.hostname && /^https?:/.test(a.protocol)) {
      track("outbound_click", { link_url: a.href });
    }
  });

  document.querySelectorAll(".faq details").forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) track("faq_open", { question: d.querySelector("summary").textContent.trim() });
    });
  });

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close menu" : "Menu";
    });
  }

  /* ---------- Heating illustration (user-triggered, not a performance claim) ---------- */
  var fig = document.querySelector("[data-can]");
  var btn = document.querySelector("[data-can-toggle]");
  var live = document.querySelector("[data-can-live]");
  if (fig && btn) {
    btn.hidden = false;
    btn.addEventListener("click", function () {
      var on = fig.classList.toggle("is-heating");
      btn.setAttribute("aria-pressed", String(on));
      btn.textContent = on ? "Reset the illustration" : "Press the base";
      if (live) {
        live.textContent = on
          ? "The pin pierces the water pouch, water meets the calcium oxide, and heat moves through the sealed cell wall into the drink. Illustration only, not to scale or time."
          : "Illustration reset.";
      }
      if (on) track("heat_demo_play", { page_path: location.pathname });
    });
  }

  /* ---------- Launch-updates form ---------- */
  var form = document.querySelector("[data-updates-form]");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.elements.email;
      var consent = form.elements.consent;
      var errors = [];
      email.removeAttribute("aria-invalid");
      if (!email.value || !email.validity.valid) { errors.push("Enter a valid email address."); email.setAttribute("aria-invalid", "true"); }
      if (!consent.checked) errors.push("Tick the box to agree to receive launch emails.");
      if (form.elements.company && form.elements.company.value) return; // honeypot: silently stop bots
      if (errors.length) { status.textContent = errors.join(" "); (email.getAttribute("aria-invalid") ? email : consent).focus(); return; }

      track("updates_form_submit_attempt", { endpoint_configured: Boolean(CONFIG.FORM_ENDPOINT) });

      if (!CONFIG.FORM_ENDPOINT) {
        status.textContent = "Sign-ups are not switched on yet, so nothing was sent. Please check back closer to launch.";
        return;
      }
      var data = {
        email: email.value.trim(),
        city: form.elements.city.value.trim(),
        interest: form.elements.interest.value,
        consent: true,
        consent_text: consent.parentNode.textContent.trim(),
        page: location.pathname
      };
      var submit = form.querySelector("[type=submit]");
      submit.disabled = true;
      status.textContent = "Sending…";
      fetch(CONFIG.FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          status.textContent = "You’re on the list. We’ll email you when there’s confirmed launch news.";
          track("updates_signup", {});
          form.reset();
        })
        .catch(function () {
          status.textContent = "That didn’t go through. Check your connection and try again.";
        })
        .then(function () { submit.disabled = false; });
    });
  }

  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
