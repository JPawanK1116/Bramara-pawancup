import React from 'react';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

export default function FestivalPage() {
    const FESTIVAL_NAME = "Sankranti";
    const THEME_COLOR = "from-orange-500/80 to-red-600/80"; // Pongal / Sankranti theme

    return (
        <div className="bg-[#fcfaf7] min-h-screen font-poppins pb-24">
            {/* Dynamic Banner */}
            <div className="relative h-[50vh] min-h-[400px] w-full mt-20 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/assets/trending/trending_festival_vibe.jpg" alt={`${FESTIVAL_NAME} Special Collection`} fill className="object-cover" priority />
                </div>

                {/* Color Overlay Based on Festival Name */}
                <div className={`absolute inset-0 z-10 bg-gradient-to-t ${THEME_COLOR} mix-blend-multiply opacity-90`}></div>
                <div className="absolute inset-0 z-10 bg-black/40"></div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <span className="text-[#C6A756] font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Exclusive Collection</span>
                    <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                        {FESTIVAL_NAME} <span className="italic text-[#C6A756] font-light">Specials</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto leading-relaxed">
                        Celebrate the joy of tradition with our handpicked vibrant silks, perfect for morning poojas and evening gatherings.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-6 border-opacity-50">
                    <div>
                        <h2 className="font-playfair text-3xl font-bold text-[#6E0D25]">Recommended for {FESTIVAL_NAME}</h2>
                        <p className="text-gray-500 mt-2">Vibrant colors, pure silk, and traditional motifs.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    <ProductCard slug="festival-pink-softsilk" name="Festival Pink Softsilk" price={12500} image="/assets/products/festival_pink_softsilk.jpg" stock={8} badge="Top Pick" />
                    <ProductCard slug="banarasi-green-classic" name="Banarasi Green Classic" price={15499} image="/assets/products/banarasi_green_classic.jpg" stock={3} />
                    <ProductCard slug="daily-lightweight-blue" name="Daily Lightweight Blue" price={8500} image="/assets/products/daily_lightweight_blue.jpg" stock={15} />
                    <ProductCard slug="silk-red-kanjivaram" name="Silk Red Kanjivaram" price={38000} originalPrice={45000} image="/assets/products/silk_red_kanjivaram.jpg" stock={2} badge="Bestseller" />
                </div>
            </div>
        </div>
    );
}
