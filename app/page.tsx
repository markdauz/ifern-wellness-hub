'use client';

import { useEffect } from 'react';

import About from '@/src/components/home/about';
import FeaturedProducts from '@/src/components/home/featured-products';
import FollowUs from '@/src/components/home/follow-us';
import Hero from '@/src/components/home/hero';
import MemberPromoModal from '@/src/components/home/promo-modal';

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTarget = params.get('scroll');

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
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-gray-900">
      <MemberPromoModal />

      <Hero />
      <FeaturedProducts />
      <About />
      <FollowUs />
    </div>
  );
}
