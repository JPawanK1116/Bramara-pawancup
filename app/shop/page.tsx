"use client";
import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { SlidersHorizontal } from 'lucide-react';

const DUMMY_PRODUCTS = [
    { slug: 'silk-red-kanjivaram', name: 'Silk Red Kanjivaram', price: 38000, image: '/assets/products/silk_red_kanjivaram.jpg', stock: 5, badge: 'Premium' },
    { slug: 'bridal-gold-zari', name: 'Bridal Gold Zari', price: 42000, image: '/assets/products/bridal_gold_zari.jpg', stock: 2, badge: 'Bridal' },
    { slug: 'daily-lightweight-blue', name: 'Daily Lightweight Blue', price: 8500, image: '/assets/products/daily_lightweight_blue.jpg', stock: 12 },
    { slug: 'festival-pink-softsilk', name: 'Festival Pink SoftSilk', price: 12500, image: '/assets/products/festival_pink_softsilk.jpg', stock: 8 },
    { slug: 'banarasi-green-classic', name: 'Banarasi Green Classic', price: 15499, originalPrice: 18000, image: '/assets/products/banarasi_green_classic.jpg', stock: 1, badge: 'Trending' },
];

export default function Shop() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    return (
        <div className="bg-[#fcfaf7] min-h-screen pt-24 pb-12 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                    <div>
                        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#6E0D25]">Shop <span className="text-[#C6A756] italic">Collection</span></h1>
                        <p className="text-gray-500 mt-2 hidden sm:block">Showing 1-5 of 124 results in Premium Silks.</p>
                    </div>

                    <button
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                        className="md:hidden flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded shadow-sm border border-gray-200 font-semibold"
                    >
                        <SlidersHorizontal size={20} />
                        Filters
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className="hidden md:block w-72 shrink-0">
                        <FilterSidebar />
                    </div>

                    {/* Grid Area */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {DUMMY_PRODUCTS.map(product => (
                                <ProductCard key={product.slug} {...product} />
                            ))}
                        </div>

                        {/* Pagination Stub */}
                        <div className="flex justify-center mt-12 gap-2">
                            <button className="px-4 py-2 rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition active:scale-95">Prev</button>
                            <button className="px-4 py-2 rounded bg-[#6E0D25] text-white shadow-xl">1</button>
                            <button className="px-4 py-2 rounded border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition">2</button>
                            <button className="px-4 py-2 rounded border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition">3</button>
                            <button className="px-4 py-2 rounded border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition active:scale-95">Next</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Sidebar Filter Overlay */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-[100] bg-black/50 md:hidden flex justify-end transition-opacity">
                    <div className="w-4/5 max-w-sm bg-white h-full overflow-y-auto p-6 shadow-2xl relative animate-slide-in-right">
                        <button
                            onClick={() => setMobileFiltersOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
                        >
                            ✕
                        </button>
                        <h3 className="font-playfair text-2xl font-bold text-[#6E0D25] mb-6">Filters</h3>
                        <FilterSidebar />

                        <button
                            onClick={() => setMobileFiltersOpen(false)}
                            className="w-full bg-[#6E0D25] text-white py-4 font-semibold text-lg leading-tight mt-8 shadow-xl"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
