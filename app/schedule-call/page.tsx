"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Phone, Video, MessageCircle, Clock, ChevronRight } from 'lucide-react';

export default function ScheduleCall() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        time: '',
        budget: '',
        category: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate sending an email or redirecting to WhatsApp
        let message = `*Live Demo Request - Bramara Sarees*\n\n`;
        message += `Name: ${formData.name}\n`;
        message += `Phone: ${formData.phone}\n`;
        message += `Time: ${formData.time}\n`;
        message += `Budget: ${formData.budget}\n`;
        message += `Category: ${formData.category}\n`;
        message += `Notes: ${formData.notes}\n`;

        const encoded = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919876543210?text=${encoded}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-[#fcfaf7] min-h-screen pt-24 pb-20 font-poppins">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Information Side */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 bg-[#C6A756]/10 text-[#6E0D25] px-4 py-2 rounded-full text-sm font-semibold border border-[#C6A756]/20">
                        <Video size={16} /> Exclusive Personal Shopping
                    </div>

                    <h1 className="font-playfair text-4xl md:text-6xl font-bold text-[#6E0D25] leading-tight">
                        Experience Our <span className="italic text-[#C6A756] block md:inline">Boutique</span> Live
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed md:max-w-md">
                        Can't visit Macherla? We bring our authentic Kanjivaram collection to your screen. Book a 30-minute high-definition video session with our styling experts.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                            <div className="bg-[#6E0D25]/5 p-3 rounded-full text-[#6E0D25]">
                                <Video size={24} />
                            </div>
                            <div>
                                <h4 className="font-playfair font-bold text-xl text-gray-900">Virtual Touch & Feel</h4>
                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">We will show the zari details, silk fall, and fabric richness up close.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                            <div className="bg-[#6E0D25]/5 p-3 rounded-full text-[#6E0D25]">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h4 className="font-playfair font-bold text-xl text-gray-900">Expert Draping</h4>
                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">See how the saree drapes naturally on our exclusive mannequins.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A756]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="font-playfair text-3xl font-bold text-[#6E0D25] mb-6 relative z-10">Request a Session</h2>

                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A756] transition" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp Number *</label>
                                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A756] transition" placeholder="+91" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Time *</label>
                                <div className="relative">
                                    <Clock size={18} className="absolute left-3 top-3.5 text-gray-400" />
                                    <select required name="time" value={formData.time} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A756] transition appearance-none text-gray-700">
                                        <option value="">Select slot</option>
                                        <option value="Morning (10AM - 1PM)">Morning (10AM - 1PM)</option>
                                        <option value="Afternoon (2PM - 5PM)">Afternoon (2PM - 5PM)</option>
                                        <option value="Evening (6PM - 8PM)">Evening (6PM - 8PM)</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Estimated Budget *</label>
                                <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A756] transition appearance-none text-gray-700">
                                    <option value="">Select budget range</option>
                                    <option value="Under ₹15,000">Under ₹15,000</option>
                                    <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                                    <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
                                    <option value="Above ₹50,000">Above ₹50,000</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Looking For *</label>
                            <select required name="category" value={formData.category} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A756] transition appearance-none text-gray-700">
                                <option value="">Select category preference</option>
                                <option value="Bridal Kanjivaram">Bridal Kanjivaram</option>
                                <option value="Banarasi Silk">Banarasi Silk</option>
                                <option value="Lightweight Party Wear">Lightweight Party Wear</option>
                                <option value="Return Gifts Collection">Return Gifts Collection</option>
                                <option value="Festival Special">Festival Special</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Any Specific Requirements</label>
                            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C6A756] transition" placeholder="Eg: Need maroon color saree for reception..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-[#6E0D25] to-[#8a1230] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition shadow-lg mt-4">
                            <Calendar size={20} /> Schedule Call Now
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
