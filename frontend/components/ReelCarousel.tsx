"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { X, Play, ShoppingCart, Calendar, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/free-mode';

const TEMP_REELS = [
    { id: 1, title: 'Banarasi Classic', price: 15499, image: '/assets/products/banarasi_green_classic.jpg' },
    { id: 2, title: 'Gold Zari Bridal', price: 42000, image: '/assets/products/bridal_gold_zari.jpg' },
    { id: 3, title: 'Pink Soft Silk', price: 12500, image: '/assets/products/festival_pink_softsilk.jpg' },
    { id: 4, title: 'Red Kanjivaram', price: 38000, image: '/assets/products/silk_red_kanjivaram.jpg' },
];

export default function ReelCarousel() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="py-6 overflow-hidden bg-gray-50/50">
            <div className="px-4 mb-4 flex justify-between items-center max-w-7xl mx-auto">
                <h2 className="font-playfair text-xl md:text-2xl font-bold flex items-center gap-2 text-gray-900 border-l-4 border-[#C6A756] pl-2">
                    New Arrivals
                </h2>
                <span className="text-xs text-[#6E0D25] font-semibold flex items-center gap-1 bg-[#6E0D25]/10 px-2 py-1 rounded">
                    <Play size={12} /> Watch
                </span>
            </div>

            <div className="max-w-7xl mx-auto pl-4">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={16}
                    slidesPerView={2.2}
                    breakpoints={{
                        480: { slidesPerView: 3.2 },
                        768: { slidesPerView: 4.5 },
                        1024: { slidesPerView: 5.5 },
                    }}
                    freeMode={true}
                    className="w-full"
                >
                    {TEMP_REELS.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <button
                                onClick={() => {
                                    setActiveIndex(index);
                                    setModalOpen(true);
                                }}
                                className="block text-left relative overflow-hidden rounded-[20px] aspect-[9/16] w-full max-w-[160px] shadow-sm transform transition duration-300 hover:scale-105 active:scale-95 group"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 480px) 33vw, 20vw"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-3 z-10">
                                    <span className="block text-white font-playfair font-semibold text-sm leading-tight drop-shadow-md">
                                        {item.title}
                                    </span>
                                    <span className="block text-[#C6A756] font-poppins text-xs font-bold mt-1 drop-shadow-md">
                                        ₹{item.price.toLocaleString('en-IN')}
                                    </span>
                                </div>

                                {/* Play Icon Layer */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                                        <Play size={24} className="text-white fill-white" />
                                    </div>
                                </div>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Fullscreen Reel Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-black text-white"
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-safe right-4 top-4 z-[110] bg-black/50 p-2 rounded-full text-white backdrop-blur"
                        >
                            <X size={24} />
                        </button>

                        <Swiper
                            direction={'vertical'}
                            initialSlide={activeIndex}
                            className="w-full h-full"
                        >
                            {TEMP_REELS.map((item) => (
                                <SwiperSlide key={item.id} className="relative w-full h-full flex flex-col justify-end pb-12">
                                    {/* Phase-1 Image Background */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover z-0"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10"></div>

                                    {/* Reel Info */}
                                    <div className="relative z-20 px-6 pb-20 w-full max-w-md mx-auto h-full flex flex-col justify-end pt-32">
                                        <div className="animate-fade-in-up">
                                            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg">{item.title}</h2>
                                            <p className="font-poppins text-2xl text-[#C6A756] font-bold mb-6 drop-shadow-lg">₹{item.price.toLocaleString('en-IN')}</p>

                                            {/* Action Buttons */}
                                            <div className="grid grid-cols-2 gap-3 mb-3">
                                                <button className="bg-white text-black py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition active:scale-95 shadow-xl">
                                                    <ShoppingCart size={20} /> Add to Cart
                                                </button>
                                                <button className="bg-gradient-to-r from-[#6E0D25] to-[#8a1230] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 shadow-xl">
                                                    <Info size={20} /> View Details
                                                </button>
                                            </div>

                                            <button className="w-full bg-[#1e1e1e]/80 backdrop-blur border border-white/20 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#1e1e1e] transition active:scale-95">
                                                <Calendar size={20} className="text-[#C6A756]" /> Book a Live Video Call
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
