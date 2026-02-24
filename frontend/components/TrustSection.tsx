import React from 'react';
import Image from 'next/image';
import { ShieldCheck, RefreshCw, Truck, MapPin } from 'lucide-react';

export default function TrustSection() {
    return (
        <section className="bg-white py-16 px-4 md:px-0 mx-auto max-w-7xl font-poppins">
            <div className="bg-[#fcfaf7] rounded-3xl p-6 md:p-12 border border-[#C6A756]/20 shadow-xl relative overflow-hidden">

                {/* Background Decorative Pattern (Optional - simple svg style) */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A756]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E0D25]/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Owner Story */}
                    <div className="space-y-6">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#6E0D25]">
                            Decades of Trust in <span className="text-[#C6A756] italic">Macherla</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            At Bramara Sarees, our legacy is woven into every thread we offer. We personally handpick each Kanjivaram and Banarasi piece directly from authentic weavers, ensuring you receive nothing but the highest quality silk. This commitment to purity is why families across Andhra Pradesh choose us for their most precious milestones.
                        </p>

                        <div className="flex items-center space-x-4 pt-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C6A756] shadow-md shrink-0">
                                <Image
                                    src="/assets/owner/owner_photo.jpg"
                                    alt="Owner of Bramara Sarees"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 leading-tight">Founder</p>
                                <p className="text-sm text-gray-500">Bramara Sarees Team</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                            <div className="flex items-center space-x-2 text-[#6E0D25]">
                                <ShieldCheck size={24} className="text-[#C6A756]" />
                                <span className="font-semibold text-sm">100% Originality Guarantee</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#6E0D25]">
                                <Truck size={24} className="text-[#C6A756]" />
                                <span className="font-semibold text-sm">COD Available</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#6E0D25]">
                                <RefreshCw size={24} className="text-[#C6A756]" />
                                <span className="font-semibold text-sm">Easy Returns</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#6E0D25]">
                                <MapPin size={24} className="text-[#C6A756]" />
                                <span className="font-semibold text-sm">Visit Store Live</span>
                            </div>
                        </div>
                    </div>

                    {/* Store Map & Visual */}
                    <div className="relative group rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96">
                        <Image
                            src="/assets/owner/store_inside.jpg"
                            alt="Inside Bramara Sarees Boutique"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white text-center">
                            <p className="font-playfair text-xl md:text-2xl font-semibold">Visit Our Premium Boutique</p>
                            <p className="text-sm font-poppins mt-2 opacity-90"><MapPin size={16} className="inline mr-1 text-[#C6A756]" /> 12-B Main Bazaar Road, Macherla, AP</p>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener"
                                className="mt-4 inline-block bg-[#C6A756] hover:bg-[#b0944b] text-white font-semibold py-2 px-6 rounded-full text-sm transition shadow-lg"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
