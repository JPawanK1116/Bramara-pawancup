"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Video, Search, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
                {/* Top Info Bar */}
                <div className="bg-[#6E0D25] text-white py-1 px-4 text-xs font-poppins text-center flex justify-between items-center hidden md:flex">
                    <span>🚀 Same Day Delivery in Macherla | 🚚 2-3 Days Nearby</span>
                    <span>100% Original Guarantee | COD Available</span>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto absolute md:static left-0 pointer-events-none md:pointer-events-auto">
                            <Link href="/" className="font-playfair text-2xl lg:text-3xl font-bold text-[#6E0D25]">
                                Bramara <span className="text-[#C6A756] italic">Sarees</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center font-poppins text-sm">
                            <Link href="/" className="text-gray-800 hover:text-[#C6A756] transition-colors">Home</Link>
                            <Link href="/shop" className="text-gray-800 hover:text-[#C6A756] transition-colors">Shop All</Link>
                            <Link href="/trending" className="text-gray-800 hover:text-[#C6A756] transition-colors">Trending</Link>
                            <Link href="/bridal-box" className="text-gray-800 hover:text-[#C6A756] text-[#C6A756] font-semibold border-b-2 border-[#C6A756]">Bridal Box</Link>
                            <Link href="/compare" className="text-gray-800 hover:text-[#C6A756] transition-colors">Compare</Link>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-4 md:space-x-6">
                            <button className="text-gray-800 hover:text-[#C6A756] hidden md:block">
                                <Search size={22} />
                            </button>
                            <Link href="/schedule-call" className="hidden sm:flex text-[#6E0D25] items-center space-x-1 hover:text-[#C6A756] transition">
                                <Video size={22} />
                                <span className="text-sm font-semibold hidden lg:block">Live Demo</span>
                            </Link>
                            <button className="text-gray-800 hover:text-[#C6A756] hidden md:block">
                                <Heart size={22} />
                            </button>
                            <Link href="/cart" className="text-gray-800 hover:text-[#C6A756] relative">
                                <ShoppingCart size={22} />
                                <span className="absolute -top-1 -right-2 bg-[#6E0D25] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 md:hidden flex flex-col"
                        >
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                                <span className="font-playfair text-xl font-bold text-[#6E0D25]">Bramara Menu</span>
                                <button onClick={() => setIsOpen(false)}><X size={24} className="text-gray-500" /></button>
                            </div>
                            <div className="flex flex-col py-4 font-poppins">
                                <Link href="/" onClick={() => setIsOpen(false)} className="px-6 py-3 border-b border-gray-50 text-gray-800">Home</Link>
                                <Link href="/shop" onClick={() => setIsOpen(false)} className="px-6 py-3 border-b border-gray-50 text-gray-800">Shop All Categories</Link>
                                <Link href="/trending" onClick={() => setIsOpen(false)} className="px-6 py-3 border-b border-gray-50 text-gray-800">Trending in Andhra</Link>
                                <Link href="/bridal-box" onClick={() => setIsOpen(false)} className="px-6 py-3 border-b border-gray-50 text-gray-800 flex justify-between items-center">
                                    Bridal Box <span className="bg-[#C6A756] text-white text-xs px-2 py-1 rounded">New</span>
                                </Link>
                                <Link href="/compare" onClick={() => setIsOpen(false)} className="px-6 py-3 border-b border-gray-50 text-gray-800">Compare Sarees</Link>
                                <div className="px-6 py-4 mt-auto">
                                    <Link href="/schedule-call" onClick={() => setIsOpen(false)} className="w-full bg-[#6E0D25] text-white py-3 rounded-md flex items-center justify-center space-x-2 font-semibold">
                                        <Video size={20} />
                                        <span>Book Live Demo</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Bottom Sticky Bar & Footer */}
            <div className="fixed bottom-0 w-full z-40 md:hidden flex flex-col">
                <div className="bg-white border-t border-gray-100 p-2 flex justify-around items-center font-poppins text-xs w-full relative">
                    <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-[#6E0D25]">
                        <span className="text-lg">🏠</span>
                        <span className="mt-1">Home</span>
                    </Link>
                    <Link href="/shop" className="flex flex-col items-center text-gray-600 hover:text-[#6E0D25]">
                        <span className="text-lg">👗</span>
                        <span className="mt-1">Shop</span>
                    </Link>
                    <div className="relative -top-6">
                        <Link href="/schedule-call" className="bg-[#6E0D25] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#6E0D25]/30 border-4 border-white">
                            <Video size={24} />
                        </Link>
                    </div>
                    <Link href="/compare" className="flex flex-col items-center text-gray-600 hover:text-[#6E0D25]">
                        <span className="text-lg">⚖️</span>
                        <span className="mt-1">Compare</span>
                    </Link>
                    <Link href="/cart" className="flex flex-col items-center text-gray-600 hover:text-[#6E0D25] relative">
                        <span className="text-lg">🛒</span>
                        <span className="absolute -top-1 right-2 bg-[#C6A756] text-white text-[9px] w-3 h-3 rounded-full flex items-center justify-center">2</span>
                        <span className="mt-1">Cart</span>
                    </Link>
                </div>
                <div className="bg-[#1a1a1a] text-gray-400 text-[10px] text-center py-1.5 w-full font-poppins tracking-widest pb-safe">
                    Designed and Developed by <span className="font-bold text-[#C6A756]">Crawlup</span>
                </div>
            </div>

            {/* Desktop Bottom Static Line */}
            <div className="fixed bottom-0 w-full bg-[#1a1a1a] text-gray-400 text-[11px] py-1.5 text-center z-50 hidden md:block font-poppins tracking-widest border-t border-[#C6A756]/20">
                Designed and Developed by <span className="font-bold text-[#C6A756] tracking-normal">Crawlup</span>
            </div>

            <div className="h-24 md:h-[104px] w-full" /> {/* Spacer */}
        </>
    );
}
