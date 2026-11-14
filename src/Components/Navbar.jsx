import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596342392834";

const SearchIcon = ({ className = "h-4 w-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
    </svg>
);

const HeartIcon = ({ className = "h-5 w-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const CartIcon = ({ className = "h-5 w-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
);

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-amber-900/10 bg-[#fbf6ee]/95 shadow-sm backdrop-blur">
            {/* Hidden checkbox drives the mobile search bar with CSS only (no JS) */}
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

                {/* Desktop search */}
                <div className="relative hidden max-w-md flex-1 md:block">
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
                <div className="flex items-center gap-1 sm:gap-2">
                    {/* Mobile search icon */}
                    <label
                        htmlFor="search-toggle"
                        aria-label="Toggle search"
                        className="cursor-pointer rounded-full p-2 text-amber-900 hover:bg-amber-900/10 md:hidden"
                    >
                        <SearchIcon className="h-5 w-5" />
                    </label>

                    {/* Wishlist */}
                    <Link
                        href="/wishlist"
                        aria-label="Wishlist"
                        className="rounded-full p-2 text-amber-900 transition-colors hover:bg-amber-900/10"
                    >
                        <HeartIcon />
                    </Link>

                    {/* Cart */}
                    <Link
                        href="/cart"
                        aria-label="Cart"
                        className="rounded-full p-2 text-amber-900 transition-colors hover:bg-amber-900/10"
                    >
                        <CartIcon />
                    </Link>

                    {/* Sign In */}
                    <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 rounded-full bg-amber-900 px-3 py-2 text-xs font-semibold text-amber-50 transition hover:bg-amber-800 sm:px-4 sm:text-sm"
                    >
                        Sign In
                    </a>
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
        </header>
    );
}