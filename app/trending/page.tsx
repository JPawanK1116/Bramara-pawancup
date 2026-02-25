"use client";
import React from 'react';
import ProductCard from '@/components/ProductCard';

const CATEGORIES = [
    {
        title: "Macherla Trending Picks",
        products: [
            { slug: 'macherla-pick-1', name: "Local Fast-Moving Pattu", price: 15000, image: '/assets/trending/trending_macherla_choice.jpg', stock: 2, badge: "Local Pick" },
            { slug: 'macherla-pick-2', name: "Macherla Marriage Red", price: 21000, originalPrice: 25000, image: '/assets/products/silk_red_kanjivaram.jpg', stock: 5 },
        ]
    },
    {
        title: "Actress Inspired",
        products: [
            { slug: 'actress-style-1', name: "Designer Georgette Silk", price: 32000, image: '/assets/trending/trending_actress_style.jpg', stock: 1, badge: "Trending" },
            { slug: 'actress-style-2', name: "Silver Zari Evening Wear", price: 45000, image: '/assets/products/bridal_gold_zari.jpg', stock: 3 },
        ]
    },
    {
        title: "Festival Special",
        products: [
            { slug: 'festival-pink', name: "Sankranti Pink Classic", price: 16500, image: '/assets/trending/trending_festival_vibe.jpg', stock: 10, badge: "Festival" },
            { slug: 'festival-green', name: "Banarasi Green Kora", price: 12500, image: '/assets/products/banarasi_green_classic.jpg', stock: 8 },
        ]
    },
];

export default function TrendingAndhra() {
    return (
        <div className="bg-[#fcfaf7] min-h-screen pt-24 pb-20 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span className="text-[#C6A756] font-extrabold tracking-widest uppercase text-sm mb-2 block">Monthly Curations</span>
                    <h1 className="font-playfair text-4xl md:text-6xl font-bold text-[#6E0D25]">Trending in <span className="italic text-[#C6A756] font-light">Andhra</span></h1>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Explore what's making waves this season. From timeless Kanjivarams to modern designer pieces loved by influencers.</p>
                </div>

                <div className="space-y-20">
                    {CATEGORIES.map((section, idx) => (
                        <section key={idx}>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">{section.title}</h2>
                                <div className="h-px bg-gray-200 w-full"></div>
                                <button className="text-[#6E0D25] font-semibold text-sm whitespace-nowrap hover:text-[#C6A756] transition">View All</button>
                            </div>

                            <div className="flex overflow-x-auto hide-scrollbar snap-x gap-4 md:gap-8 pb-4">
                                {section.products.map(product => (
                                    <div key={product.slug} className="min-w-[280px] md:min-w-[320px] snap-center">
                                        <ProductCard {...product} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
