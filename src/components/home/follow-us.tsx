import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

export default function FollowUs() {
  return (
    <section className="overflow-x-hidden py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f5132] via-[#146c43] to-[#198754] p-6 shadow-2xl sm:rounded-[40px] sm:p-10 lg:p-14">
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl sm:h-[350px] sm:w-[350px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-green-200">
              Stay Connected
            </p>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Live Better.
              <span className="block text-green-200">Grow Healthier.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-100 sm:text-base sm:leading-8 md:text-lg">
              Stay connected with{' '}
              <span className="font-semibold text-white">
                I-FERN Wellness Hub
              </span>{' '}
              for wellness tips, product updates, success stories, and exclusive
              promotions.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-black text-white sm:text-4xl">
                  100%
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-green-100 sm:text-xs">
                  Authentic Products
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-black text-white sm:text-4xl">
                  Daily
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-green-100 sm:text-xs">
                  Wellness Content
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-black text-white sm:text-4xl">
                  Nationwide
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-green-100 sm:text-xs">
                  Shipping Available
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://www.facebook.com/share/18qvbvubvQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-800 shadow-lg transition hover:scale-105 sm:w-auto"
              >
                <FaFacebookF size={14} />
                Follow on Facebook
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-green-200 sm:text-xs sm:tracking-[0.35em]">
                Health • Beauty • Wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
