import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, ShoppingBag, X } from 'lucide-react';

const COMPARE_ITEMS = [
    {
        id: 1,
        name: 'Silk Red Kanjivaram',
        price: 38000,
        image: '/assets/products/silk_red_kanjivaram.jpg',
        features: {
            fabric: 'Pure Kanjivaram Silk',
            occasion: 'Wedding / Reception',
            delivery: 'Same Day (Macherla)',
            weight: '850 grams',
            washType: 'Dry Clean Only',
        }
    },
    {
        id: 2,
        name: 'Banarasi Green Classic',
        price: 15499,
        image: '/assets/products/banarasi_green_classic.jpg',
        features: {
            fabric: 'Banarasi Silk Blend',
            occasion: 'Festivals / Party',
            delivery: '2-3 Days',
            weight: '600 grams',
            washType: 'Dry Clean Only',
        }
    },
    {
        id: 3,
        name: 'Festival Pink Softsilk',
        price: 12500,
        image: '/assets/products/festival_pink_softsilk.jpg',
        features: {
            fabric: 'Pure Soft Silk',
            occasion: 'Pooja / Festivals',
            delivery: 'Same Day (Macherla)',
            weight: '450 grams',
            washType: 'Dry Clean / Handwash',
        }
    }
];

export default function Compare() {
    return (
        <div className="bg-[#fcfaf7] min-h-screen pt-24 pb-16 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#6E0D25]">Compare <span className="text-[#C6A756] italic">Silks</span></h1>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">Compare up to 3 sarees side by side to find your perfect match based on fabric, occasion, and more.</p>
                </div>

                {/* Desktop & Tablet Comparison Table */}
                <div className="hidden md:block bg-white rounded-2xl shadow-xl border border-[#C6A756]/20 overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-6 font-playfair text-xl text-[#6E0D25] w-1/4">Features</th>
                                {COMPARE_ITEMS.map((item) => (
                                    <th key={item.id} className="p-6 relative text-center w-1/4">
                                        <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
                                            <X size={20} />
                                        </button>
                                        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 shadow-sm">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <h3 className="font-playfair text-lg font-bold text-gray-900 line-clamp-2 min-h-[56px]">{item.name}</h3>
                                        <p className="font-poppins text-[#C6A756] font-bold text-xl mt-2 mb-4">₹{item.price.toLocaleString('en-IN')}</p>
                                        <button className="w-full bg-[#6E0D25] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#5a0b1e] transition active:scale-95 shadow-lg">
                                            <ShoppingBag size={18} /> Buy Now
                                        </button>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Feature Rows */}
                            {['Fabric', 'Occasion', 'Delivery', 'Weight', 'Wash Type'].map((feature, index) => {
                                const key = feature.replace(' ', '').toLowerCase() as keyof typeof COMPARE_ITEMS[0]['features'];
                                return (
                                    <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="p-6 font-semibold text-gray-800 border-r border-gray-100">{feature}</td>
                                        {COMPARE_ITEMS.map((item) => (
                                            <td key={item.id} className="p-6 text-center text-gray-600 border-r border-gray-100 last:border-r-0">
                                                {item.features[key]}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View (Stacked Cards) */}
                <div className="md:hidden space-y-8">
                    {COMPARE_ITEMS.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
                            <button className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur rounded-full p-1 text-gray-500 shadow-sm">
                                <X size={16} />
                            </button>
                            <div className="relative h-64 w-full">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-playfair text-2xl font-bold text-[#6E0D25]">{item.name}</h3>
                                <p className="font-poppins text-[#C6A756] font-bold text-xl mt-1 mb-6">₹{item.price.toLocaleString('en-IN')}</p>

                                <div className="space-y-3 mb-6 text-sm">
                                    {Object.entries(item.features).map(([key, value]) => (
                                        <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                                            <span className="font-semibold text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                            <span className="text-gray-900 font-medium text-right">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full bg-[#6E0D25] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 active:scale-95 shadow-lg">
                                    <ShoppingBag size={18} /> Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
