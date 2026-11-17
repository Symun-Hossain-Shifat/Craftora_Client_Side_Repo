import Image from "next/image";
import Link from "next/link";

import whychoosejute from "@/Assets/whychoosejute.jpg";
import juteBag from '@/Assets/JuteBag.jpg'
import HomeDecor from "@/Assets/HomeDecor.jpg";
import handmadeGift from "@/Assets/handmadeGift.jpg";
import behindthescene from "@/Assets/behindthescene.jpg";
import plasticfree from '@/Assets/plasticfree.jpg'

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596342392834";

const POSTS = [
  {
    slug: "why-choose-jute-products",
    title: "Why Choose Jute? 6 Reasons to Switch to Natural Fiber Products",
    excerpt:
      "Jute is strong, biodegradable and grows fast with very little water. Here is why handmade jute products are a smart, eco-friendly choice for your home.",
    category: "Eco Living",
    date: "10 Nov 2026",
    readTime: 4,
    image: whychoosejute,
  },
  {
    slug: "how-to-care-for-jute-bags",
    title: "How to Care for Your Jute Bag So It Lasts for Years",
    excerpt:
      "Simple cleaning, storage and drying tips that keep your handmade jute bag looking fresh and strong for a long time.",
    category: "Care Guide",
    date: "5 Nov 2026",
    readTime: 3,
    image: juteBag,
  },
  {
    slug: "style-jute-home-decor",
    title: "5 Easy Ways to Decorate Your Home with Jute",
    excerpt:
      "From wall hangings to baskets and planters, discover simple ideas to add a warm, natural look to any room.",
    category: "Home Decor",
    date: "28 Oct 2026",
    readTime: 5,
    image: HomeDecor,
  },
  {
    slug: "handmade-gift-ideas",
    title: "Thoughtful Handmade Gift Ideas Made from Jute",
    excerpt:
      "Looking for a gift that feels personal? Here are jute creations that make a lovely present for birthdays, weddings and festivals.",
    category: "Gift Ideas",
    date: "20 Oct 2026",
    readTime: 4,
    image: handmadeGift,
  },
  {
    slug: "behind-the-scenes-craftora",
    title: "Behind the Scenes: How a Craftora Jute Product Is Made",
    excerpt:
      "A look at the journey from raw jute fiber to a finished handmade creation, and the care that goes into every piece.",
    category: "Our Story",
    date: "12 Oct 2026",
    readTime: 6,
    image: behindthescene,
  },
  {
    slug: "plastic-free-lifestyle",
    title: "Going Plastic-Free: Small Swaps That Make a Big Difference",
    excerpt:
      "Replacing plastic bags and storage with reusable jute alternatives is one of the easiest ways to live more sustainably.",
    category: "Eco Living",
    date: "3 Oct 2026",
    readTime: 4,
    image: plasticfree,
  },
];

function PostCover({ post, className = "", priority = false }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={post.image}
        alt={post.title}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute bottom-4 left-4 rounded-full bg-amber-50/90 px-3 py-1 text-xs font-semibold text-amber-900">
        {post.category}
      </span>
    </div>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

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
        {/* Featured post */}
        <Link
          href={'/Blog'}
          className="group grid overflow-hidden rounded-2xl border border-amber-900/10 bg-white shadow-sm transition hover:shadow-md md:grid-cols-2"
        >
          <PostCover post={featured} priority className="min-h-[220px] md:min-h-[320px]" />
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
              {featured.date} • {featured.readTime} min read
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-900">
              Read article <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>

        {/* Post grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={'/Blog'}
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
                  {post.date} • {post.readTime} min read
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Order CTA */}
        <section className="mt-14 rounded-2xl bg-amber-900 px-6 py-10 text-center text-amber-50 sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Want to order?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-amber-100/90">
            Send us a message and we will help you choose your handmade jute piece.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-200"
          >
            DM us on Facebook
          </a>
        </section>
      </div>
    </main>
  );
}