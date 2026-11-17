"use client";

import { useState } from "react";

const FACEBOOK_URL = "https://www.facebook.com/p/Craftora-61596342392834/";

// TODO: replace these placeholders with your real details
const EMAIL = "saymonshifat569625@gmail.com";
const PHONE = "+880 161905016";
const ADDRESS = "Rampura , Dhaka, Bangladesh";
const HOURS = "Sat – Thu, 10:00 AM – 8:00 PM";

const Icon = ({ children }) => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const CONTACT_CARDS = [
  {
    title: "Message on Facebook",
    value: "DM us to order",
    href: FACEBOOK_URL,
    external: true,
    icon: (
      <Icon>
        <path d="M21 11.5a8.4 8.4 0 0 1-12.2 7.5L3 20.5l1.6-5.4A8.4 8.4 0 1 1 21 11.5z" />
      </Icon>
    ),
  },
  {
    title: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </Icon>
    ),
  },
  {
    title: "Phone / WhatsApp",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s|-/g, "")}`,
    icon: (
      <Icon>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
      </Icon>
    ),
  },
  {
    title: "Location",
    value: ADDRESS,
    icon: (
      <Icon>
        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </Icon>
    ),
  },
];

const FAQS = [
  {
    q: "How can I place an order?",
    a: "Send us a message on our Facebook page with the product you like, and we will confirm the price, delivery and payment details with you.",
  },
  {
    q: "Do you take custom orders?",
    a: "Yes. Tell us the product, size, colour and quantity you need, and we will let you know if we can make it.",
  },
  {
    q: "Are your products really handmade?",
    a: "Yes. Every Craftora creation is handmade from natural jute fibers, so each piece is a little bit unique.",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: connect this to your API route, email service, or form backend.
    setTimeout(() => {
      setStatus("sent");
      e.target.reset();
    }, 800);
  };

  const inputClass =
    "w-full rounded-xl border border-amber-900/20 bg-white px-4 py-3 text-sm text-amber-950 placeholder:text-amber-900/40 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/30";

  return (
    <main className="bg-[#fbf6ee] text-amber-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-700 px-4 py-14 text-center text-white sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
          Craftora | Handmade Jute Creations
        </p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-amber-50/90 sm:text-base">
          Have a question, a custom order idea, or want to buy something?
          We would love to hear from you.
        </p>
      </section>

      {/* Contact cards */}
      <section className="mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((card) => {
            const body = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 text-amber-50">
                  {card.icon}
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-amber-800">
                  {card.title}
                </h3>
                <p className="mt-1 break-words text-base font-medium">{card.value}</p>
              </>
            );
            const cls =
              "flex flex-col rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md";
            return card.href ? (
              <a
                key={card.title}
                href={card.href}
                {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cls}
              >
                {body}
              </a>
            ) : (
              <div key={card.title} className={cls}>
                {body}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + side info */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Form */}
        <div className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-amber-900/70">
            Fill in the form and we will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Your name
                </label>
                <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email or phone
                </label>
                <input id="email" name="contact" type="text" required placeholder="you@example.com" className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="topic" className="mb-1 block text-sm font-medium">
                What is this about?
              </label>
              <select id="topic" name="topic" className={inputClass} defaultValue="order">
                <option value="order">Place an order</option>
                <option value="custom">Custom order</option>
                <option value="wholesale">Bulk / wholesale</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us which product you are interested in..."
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-amber-800 disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p role="status" className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
                Thank you! Your message has been sent. We will contact you soon.
              </p>
            )}
          </form>
        </div>

        {/* Side info */}
        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl bg-amber-900 p-6 text-amber-50 sm:p-8">
            <h3 className="text-xl font-bold">Prefer to order on Facebook?</h3>
            <p className="mt-2 text-sm text-amber-100/90">
              Most of our customers order by sending us a direct message. It is
              the fastest way to get a reply.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-200"
            >
              DM to Order
            </a>
          </div>

          <div className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold">Working hours</h3>
            <p className="mt-2 text-sm text-amber-900/80">{HOURS}</p>
            <p className="mt-4 text-sm text-amber-900/70">
              Eco-Friendly • Unique • Made with Love
            </p>
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-amber-900/10 bg-white p-4 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {item.q}
                <span className="text-xl text-amber-800 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-amber-900/80">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}