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
    <section className="py-24" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-6 top-10 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-50" />

          <Image
            src="/images/products/products.png"
            alt="I-FERN Products"
            width={800}
            height={1200}
            priority
            className="relative w-full rounded-[40px] object-contain shadow-2xl"
          />
        </div>

        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
            Official I-FERN Distributor
          </p>

          <h2 className="mb-8 text-5xl font-black leading-tight">
            Premium Wellness, Proven Results
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-600">
            From immune support and heart wellness to beauty and daily vitality,
            I-FERN products are trusted by thousands seeking a healthier
            lifestyle. Experience premium supplements crafted to help you stay
            active, confident, and at your best every day.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
