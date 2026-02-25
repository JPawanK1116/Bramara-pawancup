import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bramara Sarees | Premium Silk Boutique in Macherla',
  description: 'Exclusive Kanjivaram, Banarasi, and Designer Sarees. Same-day delivery in Macherla. Trusted quality, guaranteed originality.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins bg-background text-foreground selection:bg-accent selection:text-white pb-16 md:pb-0">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
