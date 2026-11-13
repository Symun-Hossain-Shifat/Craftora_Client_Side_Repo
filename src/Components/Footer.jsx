import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596342392834";

const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const SOCIALS = [
    {
        name: "Facebook",
        href: FACEBOOK_URL,
        hover: "hover:bg-[#1877F2]",
        path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
        name: "YouTube",
        href: "#",
        hover: "hover:bg-[#FF0000]",
        path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    {
        name: "LinkedIn",
        href: "#",
        hover: "hover:bg-[#0A66C2]",
        path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
        name: "Instagram",
        href: "#",
        hover: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
        path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-amber-950 text-amber-100">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
                {/* Brand */}
                <div>
                    <Link href="/" className="inline-flex flex-col leading-none">
                        <span className="text-2xl font-extrabold tracking-wide text-amber-50">
                            CRAFTORA
                        </span>
                        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-400">
                            Handmade Jute Creations
                        </span>
                    </Link>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-amber-200/80">
                        Turning natural fibers into beautiful creations. Eco-friendly,
                        unique, and made with love.
                    </p>
                </div>

                {/* Quick links */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-50">
                        Quick Links
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {QUICK_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-amber-200/80 transition-colors hover:text-amber-50"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Follow + order */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-50">
                        Follow Us
                    </h3>
                    <div className="mt-4 flex items-center gap-3">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.name}
                                title={s.name}
                                className={`flex h-10 w-10 items-center justify-center rounded-full bg-amber-50/10 text-amber-50 transition-all duration-300 hover:-translate-y-1 ${s.hover}`}
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d={s.path} />
                                </svg>
                            </a>
                        ))}
                    </div>

                    <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block rounded-full bg-amber-50 px-5 py-2.5 text-sm font-semibold text-amber-950 transition hover:bg-amber-200"
                    >
                        DM to Order
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-amber-50/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-amber-200/70 sm:flex-row sm:px-6 lg:px-8">
                    <p>© 2026 Craftora. All rights reserved.</p>
                    <p>Eco-Friendly • Unique • Made with Love</p>
                </div>
            </div>
        </footer>
    );
}