"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const REVIEWS = [
    {
        id: 1,
        name: 'Lakshmi T.',
        location: 'Vijayawada',
        image: '/assets/testimonials/customer_1.jpg',
        text: 'I ordered a Kanjivaram for my daughter\'s wedding. The quality was far beyond what I expected, and the gold zari work is absolutely stunning. Truly an authentic boutique experience!',
        stars: 5
    },
    {
        id: 2,
        name: 'Sravani K.',
        location: 'Macherla',
        image: '/assets/testimonials/customer_2.jpg',
        text: 'Bramara Sarees is my go-to for all festivals. The same-day delivery has saved me multiple times, and their silk fabrics are so pure you can feel it instantly.',
        stars: 5
    }
];

export default function TestimonialSlider() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4 md:px-0">
                <div className="text-center mb-12">
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#6E0D25] mb-4">
                        Loved By <span className="text-[#C6A756] italic">Andhra</span>
                    </h2>
                    <p className="font-poppins text-gray-500 max-w-xl mx-auto">
                        Hear what our wonderful customers have to say about their experience with our authentic silk collection.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="pb-16"
                >
                    {REVIEWS.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full flex flex-col relative">
                                <Quote size={48} className="absolute top-6 right-6 text-[#C6A756]/10" />

                                <div className="flex items-center space-x-1 mb-4 text-[#C6A756]">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="font-poppins text-gray-700 italic flex-grow mb-6 leading-relaxed">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center space-x-4 mt-auto pt-6 border-t border-gray-50">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-200">
                                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-playfair font-bold text-[#6E0D25] text-lg leading-tight">{review.name}</h4>
                                        <span className="font-poppins text-xs text-gray-500">{review.location}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
