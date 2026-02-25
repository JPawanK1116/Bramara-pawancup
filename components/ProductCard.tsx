import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScarcityBadge from './ScarcityBadge';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductProps {
    slug: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    stock: number;
    badge?: string;
}

export default function ProductCard({ slug, name, price, originalPrice, image, stock, badge }: ProductProps) {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
            <ScarcityBadge stock={stock} />

            {badge && (
                <div className="absolute top-2 right-2 z-10 bg-[#C6A756] text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">
                    {badge}
                </div>
            )}

            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
                <Link href={`/shop/${slug}`}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                </Link>

                {/* Hover Action Buttons UI (Desktop) */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden md:flex justify-between gap-2 z-20">
                    <button className="flex-1 bg-white/90 backdrop-blur text-gray-900 py-2 rounded-lg text-sm font-semibold hover:bg-[#6E0D25] hover:text-white transition shadow flex items-center justify-center gap-1">
                        <ShoppingBag size={16} /> Add
                    </button>
                    <Link href={`/shop/${slug}`} className="flex-1 bg-white/90 backdrop-blur text-gray-900 py-2 rounded-lg text-sm font-semibold hover:bg-[#C6A756] hover:text-white transition shadow flex items-center justify-center gap-1">
                        <Eye size={16} /> View
                    </Link>
                </div>
            </div>

            {/* Details */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <Link href={`/shop/${slug}`}>
                        <h3 className="font-playfair text-lg md:text-xl font-semibold text-gray-900 line-clamp-2 hover:text-[#6E0D25] transition-colors">{name}</h3>
                    </Link>
                </div>

                <div className="mt-auto flex items-center gap-2">
                    <span className="font-poppins text-lg font-bold text-[#6E0D25]">₹{price.toLocaleString('en-IN')}</span>
                    {originalPrice && (
                        <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
                    )}
                </div>

                {/* Mobile Action Buttons */}
                <div className="mt-4 grid grid-cols-2 gap-2 md:hidden">
                    <button className="bg-gray-100 text-gray-800 py-2 rounded text-xs font-semibold active:bg-gray-200">
                        Add to Cart
                    </button>
                    <button className="bg-[#6E0D25] text-white py-2 rounded text-xs font-semibold active:bg-[#5a0b1e]">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
