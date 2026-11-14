import Link from "next/link";

const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
        <path
            fill="#4285F4"
            d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.54-5.17 3.54-8.87Z"
        />
        <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.71-4.95H1.28v3.09A12 12 0 0 0 12 24Z"
        />
        <path
            fill="#FBBC05"
            d="M5.29 14.3A7.2 7.2 0 0 1 4.91 12c0-.8.14-1.57.38-2.3V6.61H1.28A12 12 0 0 0 0 12c0 1.94.46 3.77 1.28 5.39l4.01-3.09Z"
        />
        <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.61l4.01 3.09C6.23 6.86 8.88 4.75 12 4.75Z"
        />
    </svg>
);

export default function SignUpPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-amber-100/60 to-[#fbf6ee] px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <Link href="/" className="mb-8 flex flex-col items-center leading-none">
                    <span className="text-3xl font-extrabold tracking-wide text-amber-900">
                        CRAFTORA
                    </span>
                    <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-700">
                        Handmade Jute Creations
                    </span>
                </Link>

                {/* Card */}
                <div className="rounded-3xl border border-amber-900/10 bg-white p-8 shadow-lg sm:p-10">
                    <h1 className="text-center text-2xl font-bold text-amber-900">
                        Create your account
                    </h1>
                    <p className="mt-2 text-center text-sm text-amber-900/70">
                        Join Craftora to save your wishlist and track your orders.
                    </p>

                    {/* Form */}
                    <form className="mt-8 space-y-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-amber-950"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your full name"
                                className="w-full rounded-full border border-amber-900/20 bg-white px-5 py-3 text-sm text-amber-950 placeholder:text-amber-900/40 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-sm font-medium text-amber-950"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-full border border-amber-900/20 bg-white px-5 py-3 text-sm text-amber-950 placeholder:text-amber-900/40 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1.5 block text-sm font-medium text-amber-950"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                className="w-full rounded-full border border-amber-900/20 bg-white px-5 py-3 text-sm text-amber-950 placeholder:text-amber-900/40 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-amber-900 px-5 py-3 text-sm font-semibold text-amber-50 shadow-sm transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-700/40"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <span className="h-px flex-1 bg-amber-900/15" />
                        <span className="text-xs font-medium uppercase tracking-wider text-amber-900/50">
                            or
                        </span>
                        <span className="h-px flex-1 bg-amber-900/15" />
                    </div>

                    {/* Google */}
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-3 rounded-full border border-amber-900/20 bg-white px-5 py-3 text-sm font-semibold text-amber-950 shadow-sm transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
                    >
                        <GoogleIcon />
                        Sign up with Google
                    </button>

                    <p className="mt-6 text-center text-sm text-amber-900/70">
                        Already have an account?{" "}
                        <Link
                            href="/Signin"
                            className="font-semibold text-amber-900 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

                <p className="mt-6 text-center text-sm text-amber-900/70">
                    <Link href="/" className="font-medium text-amber-900 hover:underline">
                        &larr; Back to home
                    </Link>
                </p>

                <p className="mt-4 text-center text-xs text-amber-800">
                    Eco-Friendly • Unique • Made with Love
                </p>
            </div>
        </main>
    );
}