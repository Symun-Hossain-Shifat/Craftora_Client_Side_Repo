import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Craftora",
  description:
    "Learn how Craftora collects, uses and protects your personal information when you visit our website or order our handmade jute products.",
};

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596342392834";

// TODO: replace these placeholders with your real details
const CONTACT_EMAIL = "saymonshifat569625@gmail.com";
const BUSINESS_ADDRESS = "Dhaka, Bangladesh";
const LAST_UPDATED = "November 23, 2026";

const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: [
      "Welcome to Craftora. We make and sell handmade jute creations, and we respect your privacy. This Privacy Policy explains what personal information we collect, how we use it, and the choices you have when you visit our website, contact us, or order our products.",
      "By using our website or placing an order with us, you agree to the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: ["We only collect the information we need to run our business and serve you. This may include:"],
    list: [
      "Contact details: your name, phone number, email address and social media username when you message us or fill in our contact form.",
      "Order details: your delivery address, the products you want, and any custom order requirements you share with us.",
      "Newsletter details: your email address if you subscribe to our updates.",
      "Messages: the content of any message, question or feedback you send us.",
      "Technical information: basic data such as your browser type, device and pages visited, which may be collected automatically when you use the website.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    body: ["We use your information to:"],
    list: [
      "Respond to your questions and messages.",
      "Confirm, prepare and deliver your orders.",
      "Arrange payment and delivery details with you.",
      "Make custom products you have requested.",
      "Send you news, offers or updates, but only if you have subscribed.",
      "Improve our website, products and customer service.",
      "Protect our business and follow the law.",
    ],
  },
  {
    id: "orders-and-payments",
    title: "4. Orders and Payments",
    body: [
      "Most orders are arranged through direct messages on our Facebook page. Please do not send card numbers, passwords or other highly sensitive information in messages. This website does not store your payment card details.",
      "Payment and delivery arrangements are agreed with you directly when your order is confirmed.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing Your Information",
    body: [
      "We do not sell or rent your personal information. We only share it when it is necessary to:",
    ],
    list: [
      "Delivery and courier services, so that your order reaches you.",
      "Service providers that help us run our website, send emails or process payments, who may only use your data to provide those services.",
      "Authorities, if we are required to do so by law or to protect our rights.",
    ],
  },
  {
    id: "social-media",
    title: "6. Facebook and Other Social Media",
    body: [
      "Our Facebook page is run by Meta. When you message or follow us there, your information is also handled under Meta's own terms and privacy policy. Links to YouTube, LinkedIn, Instagram and other websites lead to services we do not control, and we are not responsible for their privacy practices. Please read their policies before sharing personal information.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies and Similar Technologies",
    body: [
      "Our website may use cookies or similar technologies to make the site work properly and to understand how visitors use it. You can control or delete cookies in your browser settings. Disabling cookies may affect how some parts of the website work.",
    ],
  },
  {
    id: "retention",
    title: "8. How Long We Keep Your Information",
    body: [
      "We keep your information only for as long as we need it for the purposes described in this policy, such as completing your order, answering your questions, keeping business records, or meeting legal requirements. After that, we delete it or make it anonymous.",
    ],
  },
  {
    id: "security",
    title: "9. Keeping Your Information Safe",
    body: [
      "We take reasonable steps to protect your personal information from loss, misuse and unauthorized access. However, no method of sending data over the internet or storing it electronically is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "10. Your Choices and Rights",
    body: ["You can contact us at any time to:"],
    list: [
      "Ask what personal information we hold about you.",
      "Ask us to correct information that is wrong or out of date.",
      "Ask us to delete your information, where we are not required to keep it.",
      "Unsubscribe from our newsletter. Every email we send will explain how.",
    ],
  },
  {
    id: "children",
    title: "11. Children's Privacy",
    body: [
      "Our website and products are intended for a general audience, and we do not knowingly collect personal information from children under 13. If you believe a child has given us personal information, please contact us and we will delete it.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will change the \"Last updated\" date at the top of this page. We encourage you to review it regularly.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fbf6ee] text-amber-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-700 px-4 py-14 text-center text-white sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
          Craftora | Handmade Jute Creations
        </p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-amber-50/90">Last updated: {LAST_UPDATED}</p>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Table of contents */}
        <aside className="lg:col-span-1">
          <nav
            aria-label="Table of contents"
            className="rounded-2xl border border-amber-900/10 bg-white p-5 shadow-sm lg:sticky lg:top-24"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-800">
              On this page
            </h2>
            <ul className="mt-3 space-y-1.5">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block text-sm text-amber-900/80 transition-colors hover:text-amber-950 hover:underline"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block text-sm text-amber-900/80 transition-colors hover:text-amber-950 hover:underline"
                >
                  13. Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <article className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm sm:p-10 lg:col-span-3">
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold text-amber-900 sm:text-2xl">{s.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-amber-950/85 sm:text-base">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="list-disc space-y-2 pl-5 marker:text-amber-700">
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {/* Contact */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-amber-900 sm:text-2xl">13. Contact Us</h2>
              <p className="mt-3 text-sm leading-relaxed text-amber-950/85 sm:text-base">
                If you have any questions about this Privacy Policy or how we
                handle your information, please get in touch:
              </p>
              <ul className="mt-3 space-y-2 text-sm sm:text-base">
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-800 underline underline-offset-4">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Facebook:</span>{" "}
                  <a
                    href={'https://www.facebook.com/profile.php?id=61596342392834'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 underline underline-offset-4"
                  >
                    Send us a message
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Address:</span> {BUSINESS_ADDRESS}
                </li>
                <li>
                  <span className="font-semibold">Contact page:</span>{" "}
                  <Link href="/Contact" className="text-amber-800 underline underline-offset-4">
                    Visit our Contact page
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}