import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596342392834";

export const metadata = {
    title: "About Us | Craftora",
    description:
        "Craftora turns natural jute fibers into beautiful, eco-friendly handmade creations.",
};

const VALUES = [
    {
        title: "Eco-Friendly",
        text: "Jute is a natural, biodegradable fiber. Every piece we make is kinder to the planet than plastic alternatives.",
        icon: (
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        ),
    },
    {
        title: "Truly Unique",
        text: "Each product is shaped by hand, so no two pieces are exactly alike. You get something with real character.",
        icon: (
            <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
        ),
    },
    {
        title: "Made with Love",
        text: "Care goes into every stitch and weave, from choosing the fiber to the final finishing touch.",
        icon: (
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        ),
    },
    {
        title: "Built to Last",
        text: "Jute is strong and durable, so our bags, baskets and decor are made for everyday use.",
        icon: (
            <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z M9 12l2 2 4-4" />
        ),
    },
];

const STEPS = [
    { title: "Source", text: "We select quality natural jute fibers." },
    { title: "Design", text: "Each idea is sketched and planned with care." },
    { title: "Handcraft", text: "Skilled hands weave, stitch and shape every piece." },
    { title: "Deliver", text: "Your order is checked and packed with love." },
];

export default function AboutPage() {
    return (
        <main className="bg-[#fbf6ee] text-amber-950">
            {/* Hero */}
            <section className="border-b border-amber-900/10 bg-gradient-to-b from-amber-100/60 to-[#fbf6ee]">
                <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                        About Us
                    </p>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-amber-900 sm:text-5xl">
                        Turning Natural Fibers into Beautiful Creations
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-amber-900/80 sm:text-lg">
                        Welcome to <span className="font-semibold">CRAFTORA</span>, a
                        handmade jute brand where tradition meets modern style.
                    </p>
                </div>
            </section>

            {/* Our story */}
            <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-amber-900/10 bg-gradient-to-br from-amber-200 to-amber-100 shadow-sm">
                        {/* Replace this block with <Image /> of your workshop or products */}
                        <span className="text-6xl font-extrabold tracking-widest text-amber-900/30">
                            C
                        </span>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-amber-900 sm:text-3xl">
                            Our Story
                        </h2>
                        <div className="mt-4 space-y-4 leading-relaxed text-amber-900/80">
                            <p>
                                Craftora began with a simple belief: everyday products can be
                                beautiful and kind to the earth at the same time. We work with
                                jute, a golden natural fiber, and turn it into useful,
                                stylish creations.
                            </p>
                            <p>
                                Every product is made by hand, with attention to detail and a
                                love for the craft. We want to bring the warmth of handmade
                                work into your home and your daily life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="border-y border-amber-900/10 bg-white/60">
                <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-amber-900 sm:text-3xl">
                            Why Choose Craftora
                        </h2>
                        <p className="mt-3 text-amber-900/70">
                            Eco-Friendly • Unique • Made with Love
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {VALUES.map((v) => (
                            <div
                                key={v.title}
                                className="rounded-2xl border border-amber-900/10 bg-[#fbf6ee] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 text-amber-50">
                                    <svg
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        {v.icon}
                                    </svg>
                                </span>
                                <h3 className="mt-4 text-lg font-semibold text-amber-900">
                                    {v.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-amber-900/75">
                                    {v.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-center text-2xl font-bold text-amber-900 sm:text-3xl">
                    How We Make It
                </h2>

                <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map((s, i) => (
                        <li
                            key={s.title}
                            className="relative rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm"
                        >
                            <span className="text-4xl font-extrabold text-black">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="mt-2 text-lg font-semibold text-amber-900">
                                {s.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-amber-900/75">
                                {s.text}
                            </p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* CTA */}
            <section className="px-4 pb-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl rounded-3xl bg-amber-900 px-6 py-12 text-center shadow-lg sm:px-12">
                    <h2 className="text-2xl font-bold text-amber-50 sm:text-3xl">
                        Want something made just for you?
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-amber-100/80">
                        Message us on Facebook to place an order or ask about our
                        handmade jute products.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href='https://www.facebook.com/p/Craftora-61596342392834/'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-900 transition hover:bg-white"
                        >
                            Order via Facebook
                        </a>
                        <Link
                            href="/"
                            className="rounded-full border border-amber-50/40 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-amber-50/10"
                        >
                            Browse the Shop
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}