import React from 'react';
import Image from 'next/image';
import { ShieldCheck, HeartPulse, Sparkles, Activity } from 'lucide-react';

export default function About() {
  const benefits = [
    {
      title: 'Immune Support',
      icon: ShieldCheck,
    },
    {
      title: 'Heart Wellness',
      icon: HeartPulse,
    },
    {
      title: 'Beauty From Within',
      icon: Sparkles,
    },
    {
      title: 'Active Lifestyle',
      icon: Activity,
    },
  ];

  return (
    <section
      id="about"
      className="overflow-x-hidden bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Image */}
          <div className="relative order-1">
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/70 blur-3xl sm:h-72 sm:w-72" />

            <Image
              src="/images/products/products.png"
              alt="I-FERN Products"
              width={800}
              height={1200}
              priority
              className="relative mx-auto w-full max-w-md object-contain"
            />
          </div>

          {/* Content */}
          <div className="order-2">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-green-700">
              Official I-FERN Distributor
            </p>

            <h2 className="mb-5 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Premium Wellness,
              <span className="block text-green-700">Proven Results</span>
            </h2>

            <p className="mb-8 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              From immune support and heart wellness to beauty and daily
              vitality, I-FERN products are trusted by thousands seeking a
              healthier lifestyle. Experience premium supplements crafted to
              help you stay active, confident, and at your best every day.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[28px] border border-gray-100 bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 sm:h-14 sm:w-14">
                      <Icon size={24} className="sm:h-7 sm:w-7" />
                    </div>

                    <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
