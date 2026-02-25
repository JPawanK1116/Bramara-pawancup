import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReelCarousel from '@/components/ReelCarousel';
import TrustSection from '@/components/TrustSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, ChevronDown } from 'lucide-react';

const BRIDAL_PICKS = [
  { slug: 'bridal-gold-zari', name: 'Gold Zari Masterpiece', price: 42000, image: '/assets/products/bridal_gold_zari.jpg', stock: 1, badge: 'Bridal' },
  { slug: 'wedding-kanjivaram', name: 'Royal Red Wedding Kanjivaram', price: 55000, image: '/assets/bridal/bridal_wedding.jpg', stock: 4, badge: 'Premium' },
  { slug: 'mehendi-green', name: 'Mehendi Green Soft Silk', price: 18500, image: '/assets/bridal/bridal_mehendi.jpg', stock: 2, badge: 'Trending' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Mobile Video/Image */}
        <div className="absolute inset-0 block md:hidden z-0 bg-[#6E0D25]">
          <Image src="/assets/hero/hero_mobile.jpg" alt="Premium Saree" fill className="object-cover opacity-80 mix-blend-overlay" priority />
        </div>
        {/* Desktop Image */}
        <div className="absolute inset-0 hidden md:block z-0 bg-[#6E0D25]">
          <Image src="/assets/hero/hero_main.jpg" alt="Premium Saree Collection" fill className="object-cover opacity-80 mix-blend-overlay" priority />
        </div>

        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 pt-32 w-full max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#C6A756] font-poppins uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-6 drop-shadow-md">
            Macherla's Finest Silk Boutique
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-2xl leading-tight">
            Elegance <span className="italic text-[#C6A756] block md:inline font-light">Woven</span> in Time
          </h1>
          <p className="font-poppins text-gray-200 text-base md:text-lg mb-10 max-w-2xl mx-auto drop-shadow-md hidden md:block">
            Discover the legacy of pure Kanjivaram and Banarasi sarees handpicked for your most cherished moments. 100% Originality Guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
            <Link href="/shop" className="bg-white hover:bg-gray-100 text-[#6E0D25] font-poppins font-semibold py-4 px-10 rounded-full transition-all flex items-center justify-center space-x-2 shadow-xl hover:scale-105 active:scale-95 text-lg">
              <span>View Collection</span>
            </Link>
            <Link href="/schedule-call" className="bg-transparent border border-[#C6A756]/60 bg-[#C6A756]/20 backdrop-blur-md hover:bg-[#C6A756]/40 text-white font-poppins font-semibold py-4 px-10 rounded-full transition-all flex items-center justify-center space-x-2 shadow-xl hover:scale-105 active:scale-95 text-lg">
              <span>Book Video Call</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 z-20 text-white/70 animate-bounce flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-poppins mb-2">Scroll to Explore</span>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Reel Shopping Carousel */}
      <ReelCarousel />

      {/* Trending Andhra Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[#C6A756] font-bold tracking-widest uppercase text-xs">Curated for you</span>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#6E0D25] mt-2">Trending in <span className="italic font-light">Andhra</span></h2>
            </div>
            <Link href="/trending" className="hidden md:flex items-center text-[#6E0D25] hover:text-[#C6A756] font-semibold font-poppins transition gap-1">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <ProductCard slug="trending-actress-style" name="Actress Style Designer Silk" price={25000} originalPrice={32000} image="/assets/trending/trending_actress_style.jpg" stock={5} badge="Trending" />
            <ProductCard slug="trending-marriage-look" name="Traditional Marriage Yellow" price={18500} image="/assets/trending/trending_marriage_look.jpg" stock={2} />
            <div className="hidden lg:block">
              <ProductCard slug="trending-macherla" name="Macherla Favorite Pattu" price={12000} originalPrice={15000} image="/assets/trending/trending_macherla_choice.jpg" stock={1} badge="Local Pick" />
            </div>
            <div className="hidden lg:block">
              <ProductCard slug="trending-festival" name="Sankranti Special Pink" price={16500} image="/assets/trending/trending_festival_vibe.jpg" stock={15} />
            </div>
          </div>

          <Link href="/trending" className="mt-8 flex md:hidden items-center justify-center w-full bg-gray-50 border border-gray-200 py-3 rounded-xl text-[#6E0D25] font-semibold font-poppins gap-1 active:bg-gray-100">
            Explore All Trending <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Trust Section Wrapper */}
      <div className="bg-gradient-to-b from-white to-[#fcfaf7]">
        <TrustSection />
      </div>

      {/* Bridal Picks Highlights */}
      <section className="py-20 bg-[#6E0D25] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A756]/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
              The <span className="text-[#C6A756] italic">Bridal</span> Box
            </h2>
            <p className="font-poppins text-gray-300 max-w-xl mx-auto">Build your ultimate wedding wardrobe with our exclusive bridal bundles. Mix and match for every occasion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRIDAL_PICKS.map(product => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/bridal-box" className="inline-block bg-[#C6A756] hover:bg-[#b0944b] text-white font-poppins font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 text-lg">
              Build Your Bridal Box
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Fabric Education Section */}
      <section className="py-24 bg-white border-t border-gray-100 font-poppins">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#6E0D25] mb-4">
              Know Your <span className="text-[#C6A756] italic">Silk</span>
            </h2>
            <p className="text-gray-500">Education on the purest fabrics we provide.</p>
          </div>

          <div className="space-y-4">
            {/* Accordion Items - simplified for phase 1 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <summary className="cursor-pointer font-semibold p-6 text-lg text-[#6E0D25] list-none flex justify-between items-center group-open:bg-[#fcfaf7]">
                What is Kanjivaram Silk?
                <span className="transition group-open:rotate-180">
                  <ChevronDown size={20} className="text-[#C6A756]" />
                </span>
              </summary>
              <div className="p-6 pt-0 text-gray-600 bg-[#fcfaf7] leading-relaxed text-sm">
                Originating from Kanchipuram, Tamil Nadu, Kanjivaram (or Kanchipuram) silk is defined by its pure mulberry silk threads and intricate gold or silver zari work. It is famously thick, durable, and features contrasting borders woven separately and interlocked.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <summary className="cursor-pointer font-semibold p-6 text-lg text-[#6E0D25] list-none flex justify-between items-center group-open:bg-[#fcfaf7]">
                What is Banarasi Silk?
                <span className="transition group-open:rotate-180">
                  <ChevronDown size={20} className="text-[#C6A756]" />
                </span>
              </summary>
              <div className="p-6 pt-0 text-gray-600 bg-[#fcfaf7] leading-relaxed text-sm">
                Woven in Varanasi, Banarasi silk sarees are among the finest in India, noted for their gold and silver brocade/zari, fine silk, and opulent embroidery. They frequently feature intricate intertwining floral and foliate motifs inspired by Mughal designs.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <summary className="cursor-pointer font-semibold p-6 text-lg text-[#6E0D25] list-none flex justify-between items-center group-open:bg-[#fcfaf7]">
                Silk Care Tips
                <span className="transition group-open:rotate-180">
                  <ChevronDown size={20} className="text-[#C6A756]" />
                </span>
              </summary>
              <div className="p-6 pt-0 text-gray-600 bg-[#fcfaf7] leading-relaxed text-sm">
                Always dry clean your premium silks. Store them in a cool, dry place wrapped in a muslin cloth to allow the fabric to breathe. Refold them every few months to prevent the zari from tarnishing or tearing at the creases.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
