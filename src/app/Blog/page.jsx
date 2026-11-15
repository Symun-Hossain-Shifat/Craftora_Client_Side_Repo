"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596342392834";

// Sample posts. Replace with your real articles (or load them from a database/CMS).
const POSTS = [
  {
    slug: "why-choose-jute-products",
    title: "Why Choose Jute? 6 Reasons to Switch to Natural Fiber Products",
    excerpt:
      "Jute is strong, biodegradable and grows fast with very little water. Here is why handmade jute products are a smart, eco-friendly choice for your home.",
    category: "Eco Living",
    date: "2026-11-10",
    readTime: 4,
    gradient: "from-amber-900 to-amber-600",
  },
  {
    slug: "how-to-care-for-jute-bags",
    title: "How to Care for Your Jute Bag So It Lasts for Years",
    excerpt:
      "Simple cleaning, storage and drying tips that keep your handmade jute bag looking fresh and strong for a long time.",
    category: "Care Guide",
    date: "2026-11-05",
    readTime: 3,
    gradient: "from-yellow-900 to-amber-600",
  },
  {
    slug: "style-jute-home-decor",
    title: "5 Easy Ways to Decorate Your Home with Jute",
    excerpt:
      "From wall hangings to baskets and planters, discover simple ideas to add a warm, natural look to any room.",
    category: "Home Decor",
    date: "2026-10-28",
    readTime: 5,
    gradient: "from-stone-800 to-amber-700",
  },
  {
    slug: "handmade-gift-ideas",
    title: "Thoughtful Handmade Gift Ideas Made from Jute",
    excerpt:
      "Looking for a gift that feels personal? Here are jute creations that make a lovely present for birthdays, weddings and festivals.",
    category: "Gift Ideas",
    date: "2026-10-20",
    readTime: 4,
    gradient: "from-amber-950 to-amber-700",
  },
  {
    slug: "behind-the-scenes-craftora",
    title: "Behind the Scenes: How a Craftora Jute Product Is Made",
    excerpt:
      "A look at the journey from raw jute fiber to a finished handmade creation, and the care that goes into every piece.",
    category: "Our Story",
    date: "2026-10-12",
    readTime: 6,
    gradient: "from-amber-800 to-yellow-600",
  },
  {
    slug: "plastic-free-lifestyle",
    title: "Going Plastic-Free: Small Swaps That Make a Big Difference",
    excerpt:
      "Replacing plastic bags and storage with reusable jute alternatives is one of the easiest ways to live more sustainably.",
    category: "Eco Living",
    date: "2026-10-03",
    readTime: 4,
    gradient: "from-yellow-900 to-stone-700",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const SearchIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

function PostCover({ post, className = "" }) {
  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br ${post.gradient} ${className}`}
    >
      {/* Add a cover image here later, e.g. <Image src={post.image} fill className="object-cover" alt="" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
      <span className="relative m-4 rounded-full bg-amber-50/90 px-3 py-1 text-xs font-semibold text-amber-900">
        {post.category}
      </span>
    </div>
  );
}

export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [category, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="bg-[#fbf6ee] text-amber-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-700 px-4 py-14 text-center text-white sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
          Craftora | Handmade Jute Creations
        </p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">The Craftora Blog</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-amber-50/90 sm:text-base">
          Stories, care tips, decor ideas and gift inspiration from the world of
          handmade jute.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-amber-900 text-amber-50"
                    : "bg-white text-amber-950 ring-1 ring-amber-900/15 hover:bg-amber-900/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:max-w-xs">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full rounded-full border border-amber-900/20 bg-white py-2.5 pl-4 pr-10 text-sm placeholder:text-amber-900/50 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/30"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-amber-900">
              <SearchIcon />
            </span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-amber-900/70">
            No articles found. Try a different search or category.
          </p>
        ) : (
          <>
            {/* Featured post */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-8 grid overflow-hidden rounded-2xl border border-amber-900/10 bg-white shadow-sm transition hover:shadow-md md:grid-cols-2"
            >
              <PostCover post={featured} className="min-h-[220px] md:min-h-[320px]" />
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                  Featured
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-snug group-hover:text-amber-800 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-amber-900/80 sm:text-base">
                  {featured.excerpt}
                </p>
                <p className="mt-4 text-xs text-amber-900/60">
                  {formatDate(featured.date)} • {featured.readTime} min read
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-900">
                  Read article <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>

            {/* Post grid */}
            {rest.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-amber-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <PostCover post={post} className="h-44" />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold leading-snug group-hover:text-amber-800">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-amber-900/80">
                        {post.excerpt}
                      </p>
                      <p className="mt-auto pt-4 text-xs text-amber-900/60">
                        {formatDate(post.date)} • {post.readTime} min read
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        {/* Newsletter / CTA */}
        <section className="mt-14 rounded-2xl bg-amber-900 px-6 py-10 text-center text-amber-50 sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Get new stories in your inbox</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-amber-100/90">
            Care tips, decor ideas and new product news from Craftora. No spam.
          </p>

          {subscribed ? (
            <p role="status" className="mt-6 text-sm font-medium text-amber-200">
              Thank you for subscribing!
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: connect to your email service or API route
                setSubscribed(true);
              }}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full rounded-full border-0 bg-white px-5 py-3 text-sm text-amber-950 placeholder:text-amber-900/50 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button
                type="submit"
                className="rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-200"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-6 text-sm text-amber-100/80">
            Want to order?{" "}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 hover:text-white"
            >
              DM us on Facebook
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}