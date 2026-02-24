import React from 'react';
import BridalBuilder from '@/components/BridalBuilder';
import Image from 'next/image';

export default function BridalBox() {
    return (
        <div className="bg-[#fcfaf7] min-h-screen pt-24 pb-20 font-poppins">

            {/* Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[40vh] min-h-[300px] w-full bg-[#6E0D25]">
                    <Image src="/assets/bridal/bridal_wedding.jpg" alt="Bridal Collection" fill className="object-cover opacity-60 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-14 text-white">
                        <span className="font-poppins uppercase tracking-widest text-[#C6A756] text-sm md:text-base font-bold mb-2">Curated With Love</span>
                        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">The Bridal <span className="italic text-[#C6A756] font-light">Trousseau</span></h1>
                        <p className="max-w-2xl text-gray-200 text-sm md:text-base leading-relaxed hidden sm:block">
                            Every bride's journey is unique, and so should be her wardrobe.
                            Select your events and let us curate a stunning bundle of the purest silk pieces, handwoven for your special days.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="font-playfair text-3xl font-bold text-[#6E0D25]">Select Your Events</h2>
                    <p className="text-gray-500 mt-2">Get an estimated budget and exclusive 10% discount when you select all four events.</p>
                </div>
                <BridalBuilder />
            </div>

        </div>
    );
}
