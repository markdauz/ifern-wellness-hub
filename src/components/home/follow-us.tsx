import React from 'react';

export default function FollowUs() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0f5132] via-[#146c43] to-[#198754] px-8 py-14 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:px-12">
          <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Live Better.
              <span className="block text-green-200">Grow Healthier.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-green-100 md:text-lg">
              Stay connected with{' '}
              <span className="font-semibold text-white">
                I-FERN Wellness Hub
              </span>{' '}
              for wellness tips, product updates, success stories, and exclusive
              promotions.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-4xl font-black">100%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-green-100">
                  Authentic Products
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">Daily</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-green-100">
                  Wellness Content
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">Nationwide</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-green-100">
                  Shipping Available
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://www.facebook.com/share/18qvbvubvQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-4 font-semibold text-green-800 transition hover:scale-105"
              >
                Follow on Facebook
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.35em] text-green-200">
                Health • Beauty • Wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
