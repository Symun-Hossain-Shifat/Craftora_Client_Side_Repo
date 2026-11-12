import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596342392834";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const SearchIcon = ({ className = "h-4 w-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
    </svg>
);

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-amber-900/10 bg-[#fbf6ee]/95 shadow-sm backdrop-blur">
            {/* Hidden checkboxes drive the mobile layout with CSS only (no JS) */}
            <input type="checkbox" id="menu-toggle" className="peer/menu sr-only" />
            <input type="checkbox" id="search-toggle" className="peer/search sr-only" />

            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex shrink-0 flex-col leading-none">
                    <span className="text-2xl font-extrabold tracking-wide text-amber-900">
                        CRAFTORA
                    </span>
                    <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-amber-700 sm:block">
                        Handmade Jute Creations
                    </span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden items-center gap-1 lg:flex">
                    {NAV_LINKS.map((link, i) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${i === 0
                                    ? "bg-amber-900 text-amber-50"
                                    : "text-amber-950 hover:bg-amber-900/10"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop search */}
                <div className="relative hidden max-w-xs flex-1 md:block">
                    <input
                        type="search"
                        placeholder="Search jute bags, baskets..."
                        className="w-full rounded-full border border-amber-900/20 bg-white py-2 pl-4 pr-10 text-sm text-amber-950 placeholder:text-amber-900/50 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-amber-900">
                        <SearchIcon />
                    </span>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden rounded-full bg-amber-900 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:bg-amber-800 sm:inline-block"
                    >
                        Sign In
                    </a>

                    {/* Mobile search icon */}
                    <label
                        htmlFor="search-toggle"
                        className="cursor-pointer rounded-full p-2 text-amber-900 hover:bg-amber-900/10 md:hidden"
                    >
                        <SearchIcon className="h-5 w-5" />
                    </label>

                    {/* Hamburger */}
                    <label
                        htmlFor="menu-toggle"
                        className="cursor-pointer rounded-full p-2 text-amber-900 hover:bg-amber-900/10 lg:hidden"
                    >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                </div>
            </nav>

            {/* Mobile search bar */}
            <div className="hidden border-t border-amber-900/10 px-4 py-3 peer-checked/search:block md:!hidden">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search jute bags, baskets..."
                        className="w-full rounded-full border border-amber-900/20 bg-white py-2.5 pl-4 pr-11 text-sm text-amber-950 placeholder:text-amber-900/50 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-amber-900">
                        <SearchIcon />
                    </span>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="hidden border-t border-amber-900/10 bg-[#fbf6ee] peer-checked/menu:block lg:!hidden">
                <ul className="flex flex-col gap-1 px-4 py-4">
                    {NAV_LINKS.map((link, i) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block rounded-xl px-4 py-3 text-base font-medium ${i === 0
                                    ? "bg-amber-900 text-amber-50"
                                    : "text-amber-950 hover:bg-amber-900/10"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="pt-2">
                        <a
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl bg-amber-900 px-4 py-3 text-center text-base font-semibold text-amber-50 hover:bg-amber-800"
                        >
                            Sign In
                        </a>
                    </li>
                </ul>
                <p className="px-6 pb-5 text-center text-xs text-amber-800">
                    Eco-Friendly • Unique • Made with Love
                </p>
            </div>
        </header>
    );
}