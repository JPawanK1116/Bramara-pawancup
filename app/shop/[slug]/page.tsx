"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Heart, Share2, CheckCircle, Truck, RefreshCw, Video, MessageCircle, Info } from 'lucide-react';

export default function ProductPage({ params }: { params: { slug: string } }) {
    const [activeImg, setActiveImg] = useState('/assets/products/silk_red_kanjivaram.jpg');
    const [selectedQty, setSelectedQty] = useState(1);

    // Dummy product data
    const product = {
        name: "Pure Silk Red Kanjivaram with Gold Zari Border",
        price: 38000,
        originalPrice: 45000,
        sku: "KS-RED-092",
        availability: "In Stock (Only 2 Left)",
        desc: "A timeless masterpiece straight from the heart of Kanchipuram. This rich, authentic Kanjivaram pure silk saree features intricately woven traditional motifs using high-quality gold zari. The striking red color makes it the perfect bridal attire or centerpiece for any grand festive occasion.",
        details: [
            { label: 'Fabric', value: '100% Pure Mulberry Silk' },
            { label: 'Zari', value: 'Pure Gold Zari (Tested)' },
            { label: 'Occasion', value: 'Bridal / Wedding / Festive' },
            { label: 'Color', value: 'Krimson Red with Gold Pallu' },
            { label: 'Wash Care', value: 'Dry Clean Only' }
        ],
        images: [
            '/assets/products/silk_red_kanjivaram.jpg',
            '/assets/bridal/bridal_wedding.jpg',
            '/assets/products/bridal_gold_zari.jpg'
        ]
    };

    const handleWhatsApp = () => {
        let message = `Hi Bramara Sarees, I am interested in buying this product: \n\n*${product.name}* (SKU: ${product.sku})\n\nPlease share more details and actual photos/videos.`;
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
    };

    return (
        <div className="bg-[#fcfaf7] min-h-screen pt-24 pb-24 font-poppins text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <nav className="flex text-sm text-gray-500 mb-8 border-b border-gray-200 pb-4">
                    <Link href="/" className="hover:text-[#6E0D25]">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/shop" className="hover:text-[#6E0D25]">Shop</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-semibold truncate max-w-xs">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

                    {/* Images Section */}
                    <div className="space-y-4">
                        <div className="relative aspect-[3/4] md:aspect-square rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                            <Image src={activeImg} alt={product.name} fill className="object-cover" priority />
                            <div className="absolute top-4 left-4 bg-[#6E0D25] text-white text-xs font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider animate-pulse">
                                Few Left
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-2">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImg(img)}
                                    className={`relative w-24 h-32 rounded-xl overflow-hidden snap-center flex-shrink-0 border-2 transition ${activeImg === img ? 'border-[#C6A756] shadow-md z-10' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                >
                                    <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col">
                        <div className="mb-6 border-b border-gray-100 pb-6">
                            <span className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">{product.sku}</span>
                            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#6E0D25] leading-tight mb-4">{product.name}</h1>
                            <div className="flex items-center gap-4">
                                <span className="font-poppins text-3xl md:text-4xl font-bold text-[#C6A756]">₹{product.price.toLocaleString('en-IN')}</span>
                                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                                <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded">
                                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                                </span>
                            </div>
                            <p className="text-green-600 text-sm font-semibold mt-3 flex items-center gap-1">
                                <CheckCircle size={16} /> {product.availability}
                            </p>
                        </div>

                        <div className="mb-8">
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{product.desc}</p>
                        </div>

                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border border-gray-200 rounded-xl bg-white w-32 justify-between">
                                    <button onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))} className="px-4 py-3 text-lg hover:bg-gray-50 text-gray-500 rounded-l-xl">-</button>
                                    <span className="font-bold text-gray-900">{selectedQty}</span>
                                    <button onClick={() => setSelectedQty(selectedQty + 1)} className="px-4 py-3 text-lg hover:bg-gray-50 text-gray-500 rounded-r-xl">+</button>
                                </div>

                                <button className="flex-1 bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg active:scale-95">
                                    <ShoppingBag size={20} /> Add to Bag
                                </button>

                                <button className="w-14 h-14 border border-gray-200 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-red-500 hover:border-red-200 transition">
                                    <Heart size={24} />
                                </button>
                            </div>

                            {/* Immediate Checkout / WhatsApp */}
                            <button onClick={handleWhatsApp} className="w-full bg-[#128C7E] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#075E54] active:scale-95 transition shadow-lg">
                                <MessageCircle size={22} /> Buy via WhatsApp Chat
                            </button>
                        </div>

                        {/* Smart Video Call Options */}
                        <div className="bg-gradient-to-br from-[#f8f0e5] to-white border border-[#C6A756]/30 p-6 rounded-2xl mb-8 relative overflow-hidden group">
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition">
                                <Video size={100} className="text-[#6E0D25]" />
                            </div>
                            <h3 className="font-playfair text-xl font-bold text-[#6E0D25] flex items-center gap-2 mb-2 relative z-10">
                                Doubtful about the fabric?
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 relative z-10">See the real shine, zari details, and drape of this exact saree before buying.</p>
                            <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                                <Link href="/schedule-call" className="flex-1 bg-[#6E0D25] text-white py-2.5 rounded-lg text-sm font-semibold flex flex-col items-center justify-center gap-1 hover:bg-[#5a0b1e] transition shadow">
                                    <Video size={18} /> Schedule Live Demo
                                </Link>
                                <button onClick={handleWhatsApp} className="flex-1 bg-white border border-gray-200 text-gray-800 py-2.5 rounded-lg text-sm font-semibold flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition shadow-sm">
                                    <Info size={18} /> Request Live Draping
                                </button>
                            </div>
                        </div>

                        {/* Features list */}
                        <div className="space-y-3 mb-8">
                            <div className="flex gap-3 text-sm font-semibold text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                <Truck size={20} className="text-[#C6A756]" /> Same Day Delivery in Macherla | 2-3 Days Nearby
                            </div>
                            <div className="flex gap-3 text-sm font-semibold text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                <RefreshCw size={20} className="text-[#C6A756]" /> Easy 7-Day Returns Guarantee
                            </div>
                            <div className="flex gap-3 text-sm font-semibold text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                <CheckCircle size={20} className="text-[#C6A756]" /> 100% Originality Guaranteed
                            </div>
                        </div>

                        {/* Spec Details Table */}
                        <div>
                            <h3 className="font-playfair text-xl font-bold text-[#6E0D25] mb-4 border-b border-gray-200 pb-2">Product Specifications</h3>
                            <table className="w-full text-sm">
                                <tbody>
                                    {product.details.map((detail, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-transparent'}>
                                            <td className="py-2.5 px-3 font-semibold text-gray-700 w-1/3">{detail.label}</td>
                                            <td className="py-2.5 px-3 text-gray-600">{detail.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
