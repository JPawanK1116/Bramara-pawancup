"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FilterSidebar() {
    const [priceRange, setPriceRange] = useState(50000);

    return (
        <div className="space-y-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm font-poppins">

            {/* Categories */}
            <div>
                <h4 className="font-playfair font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Categories</h4>
                <div className="space-y-3">
                    {['Kanjivaram Silk', 'Banarasi Silk', 'Soft Silk', 'Cotton Silk', 'Tissue Silk'].map(cat => (
                        <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#6E0D25] focus:ring-[#C6A756]" />
                            <span className="text-gray-600 group-hover:text-[#6E0D25] text-sm">{cat}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h4 className="font-playfair font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Price Range</h4>
                <p className="text-xs text-gray-500 mb-2">Up to ₹{priceRange.toLocaleString('en-IN')}</p>
                <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C6A756]"
                />
            </div>

            {/* Occasion */}
            <div>
                <h4 className="font-playfair font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Occasion</h4>
                <div className="space-y-3">
                    {['Wedding', 'Reception', 'Festival', 'Daily Wear', 'Party Wear'].map(occ => (
                        <label key={occ} className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#6E0D25] focus:ring-[#C6A756]" />
                            <span className="text-gray-600 group-hover:text-[#6E0D25] text-sm">{occ}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Color Filter */}
            <div>
                <h4 className="font-playfair font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Colors</h4>
                <div className="flex flex-wrap gap-2">
                    {['bg-red-700', 'bg-yellow-500', 'bg-green-700', 'bg-pink-500', 'bg-blue-800', 'bg-purple-800'].map(bg => (
                        <button key={bg} className={`w-8 h-8 rounded-full ${bg} border-2 border-transparent hover:border-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-[#C6A756] shadow-sm`}></button>
                    ))}
                </div>
            </div>

            {/* Toggles */}
            <div className="pt-4 border-t border-gray-200 space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-semibold text-gray-700">Lightweight</span>
                    <div className="relative">
                        <input type="checkbox" className="sr-only" />
                        <div className="block bg-gray-200 w-10 h-6 rounded-full transition-colors toggle-bg"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform toggle-dot border border-gray-300"></div>
                    </div>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-semibold text-gray-700 items-center flex gap-1 text-[#6E0D25]">
                        Fast Delivery 🚚
                    </span>
                    <div className="relative">
                        <input type="checkbox" defaultChecked className="sr-only" />
                        <div className="block bg-[#C6A756] w-10 h-6 rounded-full transition-colors toggle-bg"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform toggle-dot border border-[#C6A756] translate-x-4"></div>
                    </div>
                </label>
            </div>

            {/* Action */}
            <div className="pt-4 hidden md:block">
                <button className="w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold transition">
                    Clear All
                </button>
            </div>
        </div>
    );
}
