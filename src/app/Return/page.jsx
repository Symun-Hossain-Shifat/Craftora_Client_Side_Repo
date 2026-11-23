
import Link from "next/link";
import Image from "next/image";
import HomeDecor from "@/Assets/HomeDecor.jpg";

export const metadata = {
  title: "Return & Refund Policy | Craftora",
  description:
    "Read Craftora's return, exchange and refund policy for our handmade jute products.",
};

const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61596342392834";

const REPORT_WINDOW_DAYS = 3;
const REFUND_PROCESSING_DAYS = 7;
const CONTACT_EMAIL = "your-email@example.com";
const LAST_UPDATED = "November 23, 2026";

const HIGHLIGHTS = [
  {
    number: "01",
    title: `${REPORT_WINDOW_DAYS}-Day Window`,
    text: "Report any problem within days of receiving your order.",
  },
  {
    number: "02",
    title: "Damaged or Wrong Item",
    text: "We will replace it or refund you at no extra cost.",
  },
  {
    number: "03",
    title: "Easy to Start",
    text: "Simply message us on Facebook with photos.",
  },
];

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    body: [
      "Every Craftora product is handmade from natural jute, and we take great care in making and packing each piece. We want you to be happy with your order. If something is not right, this policy explains how we can help.",
    ],
  },
  {
    id: "eligible",
    title: "2. When You Can Return or Exchange",
    body: ["You may ask for a return, exchange or refund if:"],
    list: [
      "The product arrived damaged or broken.",
      "You received the wrong product, size or colour compared with what we confirmed with you.",
      "The product has a clear manufacturing defect, such as a loose handle or broken stitching.",
    ],
    after: `You must contact us within ${REPORT_WINDOW_DAYS} days of receiving your order, and the product must be unused and in its original condition.`,
  },
  {
    id: "not-eligible",
    title: "3. What We Cannot Accept",
    body: ["We are not able to accept returns or refunds for:"],
    list: [
      "Custom or personalised orders made to your request, unless they arrive damaged or are not what was agreed.",
      "Products that have been used, washed, altered or damaged after delivery.",
      "Requests made after the reporting window has passed.",
      "Small differences in shade, texture or size that come from natural jute and handmade work. These are part of what makes each piece unique.",
      "A change of mind after the order has been made and delivered.",
    ],
  },
  {
    id: "how-to",
    title: "4. How to Request a Return",
    steps: [
      {
        title: "Contact us",
        text: "Send us a message on our Facebook page or through our Contact page. Include your name and a description of the problem.",
      },
      {
        title: "Share photos",
        text: "Send clear photos of the product and the packaging so we can see the issue.",
      },
      {
        title: "We review your request",
        text: "We will check your request and reply as soon as possible with the next steps.",
      },
      {
        title: "Replacement or refund",
        text: "If your request is approved, we will arrange a replacement or a refund, depending on what you prefer and what is available.",
      },
    ],
  },
  {
    id: "exchanges",
    title: "5. Exchanges and Replacements",
    body: [
      "If your item is damaged, defective or incorrect, we will gladly send a replacement, as long as the same product is available. If it is not available, we will offer a refund or a different product of equal value instead.",
    ],
  },
  {
    id: "refunds",
    title: "6. Refunds",
    body: [
      `Approved refunds are processed within ${REFUND_PROCESSING_DAYS} days. We will send the refund by the same method you used to pay us, or by another method we agree on together.`,
      "Delivery charges are refunded only if the problem was caused by us, for example a damaged or wrong item.",
    ],
  },
  {
    id: "shipping",
    title: "7. Return Shipping",
    body: [
      "If the return is because of our mistake (a damaged, defective or wrong item), we will cover the return delivery cost. In other cases that we agree to accept, the customer may be asked to pay the return delivery cost. Please do not send anything back until we confirm how to do it.",
    ],
  },
  {
    id: "cancellations",
    title: "8. Order Changes and Cancellations",
    body: [
      "You can ask us to change or cancel an order before we start making it. Because our products are handmade, we may not be able to cancel once work has begun, especially for custom orders. Contact us as early as you can and we will do our best to help.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    body: [
      'We may update this policy from time to time. The "Last updated" date at the top of the page will show when it was last changed. The policy that applies to your order is the one shown on the day you placed it.',
    ],
  },
];

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f2] text-amber-950">

      {/* Hero Banner */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-4 py-20 text-center text-white sm:min-h-[380px]">

        <Image
          src={HomeDecor}
          alt="Craftora handmade jute home decor"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/75" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-amber-300/40 bg-black/20 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300 backdrop-blur-sm sm:text-xs">
            Craftora | Handmade Jute Creations
          </span>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Return &amp; Refund
            <span className="mt-2 block text-amber-300">
              Policy
            </span>
          </h1>

          <p className="mt-5 text-sm text-white/80 sm:text-base">
            Your satisfaction matters to us. Learn how we handle returns,
            exchanges and refunds.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-amber-400" />

          <p className="mt-5 text-xs text-white/70">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.number}
              className="group rounded-2xl border border-amber-900/10 bg-white p-6 shadow-lg shadow-amber-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-xs font-bold tracking-widest text-amber-700">
                {item.number}
              </span>

              <h3 className="mt-3 text-lg font-bold text-amber-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-amber-950/65">
                {item.text}
              </p>

              <div className="mt-5 h-1 w-10 rounded-full bg-amber-700 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </section>

      {/* Policy Content */}
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:gap-10 lg:px-8">

        {/* Table of Contents */}
        <aside className="lg:col-span-1">
          <nav
            aria-label="Table of contents"
            className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm lg:sticky lg:top-24"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Navigation
            </p>

            <h2 className="mt-2 text-xl font-bold text-amber-950">
              On This Page
            </h2>

            <div className="my-5 h-px bg-amber-900/10" />

            <ul className="space-y-2">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-amber-950/70 transition duration-200 hover:bg-amber-50 hover:text-amber-900"
                  >
                    {section.title}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2 text-sm text-amber-950/70 transition duration-200 hover:bg-amber-50 hover:text-amber-900"
                >
                  10. Contact Us
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-950">
                Need assistance?
              </p>

              <p className="mt-1 text-xs leading-relaxed text-amber-950/65">
                Our team is happy to help with your order.
              </p>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-bold text-amber-800 hover:text-amber-950 hover:underline"
              >
                Contact Support →
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <article className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm sm:p-10 lg:col-span-3">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="border-b border-amber-900/10 pb-4 text-xl font-bold text-amber-950 sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-8 text-amber-950/75 sm:text-base">
                  {section.body?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.list && (
                    <ul className="space-y-3 pl-5">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="list-disc marker:text-amber-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.after && (
                    <div className="rounded-xl border-l-4 border-amber-700 bg-amber-50 px-5 py-4 text-amber-950">
                      {section.after}
                    </div>
                  )}

                  {section.steps && (
                    <ol className="space-y-6">
                      {section.steps.map((step, index) => (
                        <li key={step.title} className="flex gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-900 text-sm font-bold text-white">
                            {index + 1}
                          </span>

                          <div>
                            <h3 className="font-bold text-amber-950">
                              {step.title}
                            </h3>

                            <p className="mt-1 text-amber-950/70">
                              {step.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </section>
            ))}

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-28">
              <h2 className="border-b border-amber-900/10 pb-4 text-xl font-bold text-amber-950 sm:text-2xl">
                10. Contact Us
              </h2>

              <p className="mt-5 text-sm leading-8 text-amber-950/75 sm:text-base">
                Have a problem with your order? We are happy to help.
                Reach out to us through any of the following channels.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
                >
                  Message us on Facebook
                </a>

                <Link
                  href="/contact"
                  className="rounded-full border border-amber-900/30 px-6 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-50"
                >
                  Contact Page
                </Link>
              </div>

              <p className="mt-5 text-sm text-amber-950/70">
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-amber-800 underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-amber-900/10 bg-[#f5ede0] px-4 py-8 text-center">
        <p className="text-sm text-amber-950/65">
          Thank you for choosing{" "}
          <span className="font-bold text-amber-900">Craftora</span>.
          We appreciate your trust and support.
        </p>
      </div>
    </main>
  );
}
