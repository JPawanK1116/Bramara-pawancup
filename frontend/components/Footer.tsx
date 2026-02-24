import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-24 md:pb-8 font-poppins relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand & Intro */}
                    <div className="space-y-4">
                        <h2 className="font-playfair text-3xl font-bold text-[#C6A756] mb-4">Bramara <span className="text-white italic">Sarees</span></h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium silk boutique located in Macherla, Andhra Pradesh. We offer authentic Kanjivaram, Banarasi, and designer sarees.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C6A756] transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C6A756] transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C6A756] transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-playfair text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/shop" className="hover:text-[#C6A756] transition-colors">Shop Everything</Link></li>
                            <li><Link href="/trending" className="hover:text-[#C6A756] transition-colors">Trending Now</Link></li>
                            <li><Link href="/bridal-box" className="hover:text-[#C6A756] transition-colors">Bridal Collection</Link></li>
                            <li><Link href="/schedule-call" className="hover:text-[#C6A756] transition-colors">Book Video Call</Link></li>
                            <li><Link href="/about" className="hover:text-[#C6A756] transition-colors">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Guarantees */}
                    <div>
                        <h3 className="font-playfair text-xl font-semibold mb-6">Our Promise</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start space-x-3">
                                <CheckCircle size={18} className="text-[#C6A756] mt-0.5" />
                                <span>100% Original Products</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle size={18} className="text-[#C6A756] mt-0.5" />
                                <span>Cash on Delivery Available</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle size={18} className="text-[#C6A756] mt-0.5" />
                                <span>Same-Day Delivery in Macherla</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle size={18} className="text-[#C6A756] mt-0.5" />
                                <span>Easy 7-Day Returns</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-playfair text-xl font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-[#C6A756] mt-0.5 shrink-0" />
                                <span>12-B Main Bazaar Road, Macherla, Andhra Pradesh 522426</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-[#C6A756]" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-[#C6A756]" />
                                <span>hello@bramarasarees.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Bramara Sarees. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
