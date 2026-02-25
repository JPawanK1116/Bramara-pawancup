"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, ChevronRight, Check } from 'lucide-react';

const BRIDAL_CATEGORIES = [
    { id: 'wedding', name: 'Wedding (Muhurtham)', desc: 'Heavy Kanjivaram or Banarasi for the main event.', priceBase: 45000, img: '/assets/bridal/bridal_wedding.jpg' },
    { id: 'reception', name: 'Reception', desc: 'Elegant designer silk or tissue kanjivaram.', priceBase: 25000, img: '/assets/bridal/bridal_reception.jpg' },
    { id: 'mehendi', name: 'Mehendi / Haldi', desc: 'Lightweight soft silk in vibrant colors.', priceBase: 12000, img: '/assets/bridal/bridal_mehendi.jpg' },
    { id: 'returngift', name: 'Return Gifts (x10)', desc: 'Beautiful semi-silks for close family.', priceBase: 35000, img: '/assets/bridal/bridal_returngift.jpg' },
];

export default function BridalBuilder() {
    const [selected, setSelected] = useState<Record<string, boolean>>({
        wedding: true,
        reception: false,
        mehendi: false,
        returngift: false,
    });

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let t = 0;
        Object.keys(selected).forEach(key => {
            if (selected[key]) {
                t += BRIDAL_CATEGORIES.find(c => c.id === key)?.priceBase || 0;
            }
        });
        // 10% discount if all 4 are selected
        if (Object.values(selected).filter(Boolean).length === 4) {
            t = t * 0.9;
        }
        setTotal(t);
    }, [selected]);

    const toggleSelect = (id: string) => {
        setSelected(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start font-poppins">

            {/* Builder Selection */}
            <div className="lg:col-span-2 space-y-4">
                {BRIDAL_CATEGORIES.map((cat) => {
                    const isSelected = selected[cat.id];
                    return (
                        <div
                            key={cat.id}
                            onClick={() => toggleSelect(cat.id)}
                            className={`flex flex-col sm:flex-row p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${isSelected ? 'border-[#C6A756] bg-[#C6A756]/5 shadow-md shadow-[#C6A756]/10' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                        >
                            <div className="relative w-full sm:w-32 h-40 sm:h-24 rounded-xl overflow-hidden shrink-0 mb-4 sm:mb-0">
                                <Image src={cat.img} alt={cat.name} fill className="object-cover" />
                                {isSelected && (
                                    <div className="absolute top-2 left-2 bg-gradient-to-r from-[#C6A756] to-[#b0944b] text-white p-1 rounded-full shadow-lg">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                )}
                            </div>

                            <div className="sm:ml-6 flex-grow flex flex-col justify-center">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900">{cat.name}</h3>
                                        <p className="text-gray-500 text-sm mt-1">{cat.desc}</p>
                                    </div>
                                    <span className="font-poppins font-bold text-lg text-[#6E0D25] bg-gray-50 px-3 py-1 rounded-lg">~₹{cat.priceBase.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary Action Card */}
            <div className="sticky top-24 bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl flex flex-col">
                <h3 className="font-playfair text-2xl font-bold text-[#6E0D25] border-b border-gray-100 pb-4 mb-6">Bundle Summary</h3>

                <div className="space-y-4 flex-grow mb-8">
                    {BRIDAL_CATEGORIES.map((cat) => {
                        if (!selected[cat.id]) return null;
                        return (
                            <div key={cat.id} className="flex justify-between items-center text-sm md:text-base">
                                <span className="text-gray-700 font-medium">{cat.name}</span>
                                <span className="text-gray-900 font-bold">₹{cat.priceBase.toLocaleString('en-IN')}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="border-t border-dashed border-gray-300 pt-6 mt-auto">
                    {Object.values(selected).filter(Boolean).length === 4 && (
                        <div className="flex justify-between text-sm text-green-600 font-semibold mb-2">
                            <span>Full Bundle Discount</span>
                            <span>-10%</span>
                        </div>
                    )}
                    <div className="flex justify-between items-end mb-6">
                        <span className="text-gray-500 font-semibold">Estimated Total</span>
                        <span className="font-poppins text-3xl font-bold text-[#6E0D25]">₹{total.toLocaleString('en-IN')}</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#6E0D25] to-[#8a1230] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition shadow-xl">
                        Proceed to Discuss <ChevronRight size={20} />
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                        * This is an estimated budget. Final price depends on actual sarees selected during your video call or store visit.
                    </p>
                </div>
            </div>

        </div>
    );
}
