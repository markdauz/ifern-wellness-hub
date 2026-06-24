'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/banners/b1.png',
    title: 'Nutrition You Can Trust',
    description:
      'Empowering healthier lifestyles through quality multivitamins, minerals, and food supplements.',
  },
  {
    image: '/images/banners/b2.png',
    title: 'Elevate Your Everyday Health',
    description:
      'Advanced nutritional support crafted for adults who prioritize wellness, vitality, and performance.',
  },
  {
    image: '/images/banners/b3.png',
    title: 'Wellness In Every Sip',
    description:
      'Enjoy premium coffee blends enriched with carefully selected ingredients to support your active lifestyle.',
  },
  {
    image: '/images/banners/b4.png',
    title: 'Glow From Within',
    description:
      'Support healthy-looking skin, hair, and overall wellness with collagen-rich nutrition crafted for your daily beauty routine.',
  },
  {
    image: '/images/banners/b5.png',
    title: 'Beauty Beyond Expectations',
    description:
      'Elevate your skincare routine with luxurious beauty products designed for healthy, radiant, and youthful-looking skin.',
  },
  {
    image: '/images/banners/b6.png',
    title: 'Fresh Breath, Healthy Smile',
    description:
      'Experience daily oral care that helps maintain freshness, cleanliness, and confidence throughout your day.',
  },
  {
    image: '/images/banners/b7.png',
    title: 'Build A Better Future',
    description:
      'Explore opportunities to improve your health while creating additional income through the I-FERN business.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(3);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative h-[35vh] min-h-[280px] sm:h-[50vh] md:h-[72vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            current === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === current}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Premium Left Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/15 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full">
          <div className="px-6 text-center md:px-0 md:text-left md:pl-16 lg:pl-24 xl:pl-32">
            <div className="mx-auto max-w-lg md:mx-0">
              <h1
                className="mt-3 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl xl:text-6xl"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.35)',
                }}
              >
                {slides[current].title}
              </h1>

              <p
                className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/90 sm:max-w-md sm:text-base md:mx-0 md:text-lg md:leading-8"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.25)',
                }}
              >
                {slides[current].description}
              </p>
              <Link href="/products">
                <button className="mt-5 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xl transition hover:bg-green-700 sm:mt-8 sm:px-8 sm:py-4 sm:text-base">
                  {slides[current].title === 'Build A Better Future'
                    ? 'Become a Member'
                    : 'Learn More'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition hover:bg-black/40 md:flex"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition hover:bg-black/40 md:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index ? 'w-8 bg-white' : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
