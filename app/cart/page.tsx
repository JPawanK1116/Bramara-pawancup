"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const DUMMY_CART = [
    { id: 1, name: 'Silk Red Kanjivaram', price: 38000, qty: 1, image: '/assets/products/silk_red_kanjivaram.jpg' },
    { id: 2, name: 'Festival Pink Softsilk', price: 12500, qty: 1, image: '/assets/products/festival_pink_softsilk.jpg' },
];

export default function Cart() {
    const [cart, setCart] = useState(DUMMY_CART);
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);

    const handleCheckout = () => {
        let message = "Hi Bramara Sarees, I want to order the following items from your website:\n\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - ₹${item.price.toLocaleString('en-IN')} (Qty: ${item.qty})\n`;
        });
        message += `\n*Total Estimated:* ₹${total.toLocaleString('en-IN')}\n\n*My Delivery Address:* \n[Please type your address here]`;

        const encoded = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919876543210?text=${encoded}`;
        window.open(whatsappUrl, '_blank');
    };

    const removeItem = (id: number) => {
        setCart(cart.filter(c => c.id !== id));
    };

    return (
        <div className="bg-[#fcfaf7] min-h-screen pt-28 pb-20 font-poppins">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">

                {/* Cart Items */}
                <div className="flex-grow">
                    <h1 className="font-playfair text-3xl font-bold text-[#6E0D25] mb-8 pb-4 border-b border-gray-200">
                        Your Shopping Bag
                    </h1>

                    {cart.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500 font-semibold mb-6">Your bag is currently empty.</p>
                            <Link href="/shop" className="bg-[#6E0D25] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#5a0b1e] transition">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="bg-white p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 border border-gray-100 shadow-sm relative">
                                    <div className="relative w-24 h-32 md:w-32 md:h-40 rounded-xl overflow-hidden shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-playfair text-lg md:text-xl font-bold text-gray-900 leading-tight">{item.name}</h3>
                                        <p className="text-[#C6A756] font-bold text-lg mt-1">₹{item.price.toLocaleString('en-IN')}</p>

                                        <div className="mt-4 md:mt-6 flex items-center gap-4">
                                            <div className="flex items-center border border-gray-200 rounded-lg max-w-max">
                                                <button className="px-3 py-1 hover:bg-gray-50 text-gray-600">-</button>
                                                <span className="px-3 py-1 border-x border-gray-200 text-sm font-semibold">{item.qty}</span>
                                                <button className="px-3 py-1 hover:bg-gray-50 text-gray-600">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="absolute top-4 right-4 md:static md:ml-4 text-gray-400 hover:text-red-500 transition p-2 bg-gray-50 rounded-full md:bg-transparent md:p-0"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                {cart.length > 0 && (
                    <div className="w-full lg:w-96 shrink-0">
                        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl sticky top-28">
                            <h3 className="font-playfair text-2xl font-bold text-[#6E0D25] mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6 border-b border-gray-100 pb-6 text-sm md:text-base">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">₹{total.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Estimated Delivery</span>
                                    <span className="font-semibold text-green-600">Free</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-8">
                                <span className="font-semibold text-gray-800">Total</span>
                                <span className="font-playfair font-bold text-3xl text-[#6E0D25]">₹{total.toLocaleString('en-IN')}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-[#128C7E] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#075E54] active:scale-95 transition shadow-lg mb-4"
                            >
                                Checkout via WhatsApp <ArrowRight size={20} />
                            </button>

                            <p className="text-xs text-center text-gray-400 leading-relaxed">
                                By clicking checkout, you will be redirected to WhatsApp to finalize your order directly with the owner securely.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
