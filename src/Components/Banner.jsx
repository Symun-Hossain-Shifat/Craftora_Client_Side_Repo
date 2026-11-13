"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596342392834";
const SLIDE_DURATION = 5000; // 2 seconds per image

// Put your 5 real product photos in /public/banners/ with these names
// (or change the src paths). Landscape photos, about 1600x700, work best.
const SLIDES = [
    {
        src: "/banners/banner-1.jpg",
        alt: "Handmade jute bags by Craftora",
        title: "Handmade Jute Bags",
        text: "Stylish, strong and made from natural fibers.",
        gradient: "from-amber-900 to-amber-700",
    },
    {
        src: "/banners/banner-2.jpg",
        alt: "Eco-friendly jute baskets",
        title: "Eco-Friendly Baskets",
        text: "Sustainable storage that looks beautiful at home.",
        gradient: "from-amber-800 to-yellow-700",
    },
    {
        src: "/banners/banner-3.jpg",
        alt: "Jute home decor",
        title: "Jute Home Décor",
        text: "Add a warm, natural touch to every room.",
        gradient: "from-stone-800 to-amber-700",
    },
    {
        src: "/banners/banner-4.jpg",
        alt: "Unique handmade jute gifts",
        title: "Unique Handmade Gifts",
        text: "One-of-a-kind creations made with love.",
        gradient: "from-amber-950 to-amber-700",
    },
    {
        src: "/banners/banner-5.jpg",
        alt: "Order Craftora jute products",
        title: "Turning Natural Fibers Into Beautiful Creations",
        text: "DM us on Facebook to place your order.",
        gradient: "from-yellow-900 to-amber-600",
    },
];

export default function Banner() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    // Auto-advance every 2 seconds, loop forever
    useEffect(() => {
        if (paused) return;
        const id = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, SLIDE_DURATION);
        return () => clearTimeout(id);
    }, [current, paused]);

    const goTo = (index) => setCurrent((index + SLIDES.length) % SLIDES.length);

    return (
        <section
            className="relative w-full overflow-hidden bg-amber-950"
            aria-roledescription="carousel"
            aria-label="Craftora featured products"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="relative h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px]">
                {SLIDES.map((slide, i) => (
                    <div
                        key={slide.src}
                        className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "pointer-events-none opacity-0"
                            }`}
                        aria-hidden={i !== current}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            priority={i === 0}
                            sizes="100vw"
                            className="object-cover"
                        />

                        {/* Dark overlay so text is readable on any photo */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                        {/* Text */}
                        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
                            <div className="max-w-xl text-white">
                                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300 sm:text-xs">
                                    Craftora | Handmade Jute Creations
                                </p>
                                <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                                    {slide.title}
                                </h2>
                                <p className="mt-2 text-sm text-amber-50/90 sm:mt-3 sm:text-base lg:text-lg">
                                    {slide.text}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                                    <Link
                                        href="/shop"
                                        className="rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-950 transition hover:bg-amber-200 sm:px-6 sm:py-3 sm:text-sm"
                                    >
                                        Shop Now
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Prev / Next arrows (hidden on very small screens) */}
                <button
                    type="button"
                    onClick={() => goTo(current - 1)}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60 sm:flex"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => goTo(current + 1)}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60 sm:flex"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
                    {SLIDES.map((slide, i) => (
                        <button
                            key={slide.src}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === current}
                            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-amber-50" : "w-2 bg-amber-50/50 hover:bg-amber-50/80"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}