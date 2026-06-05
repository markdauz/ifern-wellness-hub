'use client';
import About from '@/src/components/home/about';
import FeaturedProducts from '@/src/components/home/featured-products';
import FollowUs from '@/src/components/home/follow-us';
import Hero from '@/src/components/home/hero';
import Footer from '@/src/components/layout/footer';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTarget = searchParams.get('scroll');

    if (scrollTarget === 'about') {
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }

    if (scrollTarget === 'top') {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-gray-900">
      <Hero />
      <FeaturedProducts />
      <About />
      <FollowUs />
      <Footer />
    </div>
  );
}
