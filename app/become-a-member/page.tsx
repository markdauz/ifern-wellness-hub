'use client';

import Link from 'next/link';
import { CheckCircle, Star, Gift, Users, TrendingUp } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';

export default function BecomeAMemberPage() {
  const perks = [
    'Exclusive member discounts on I-FERN products',
    'Access to wellness and business training',
    'Referral and networking opportunities',
    'Priority access to promotions and new products',
    'Personalized member support',
    'Join a growing wellness community',
  ];

  return (
    <main className="overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-4 py-2 text-xs font-semibold text-green-800 sm:text-sm">
              Exclusive I-FERN Membership
            </span>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Transform Your Health
              <span className="mt-2 block text-green-700">
                Grow Your Opportunities
              </span>
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              Join a thriving community focused on wellness, personal growth,
              and financial opportunities through premium I-FERN products.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-green-800"
              >
                <FaFacebookF size={14} />
                Message Us on Facebook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Membership Benefits
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Join I-FERN?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Enjoy savings, support, wellness education, and opportunities for
            personal growth.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk}
              className="rounded-3xl border border-green-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CheckCircle className="mb-4 h-7 w-7 text-green-700" />

              <p className="font-medium text-gray-800">{perk}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM ADVANTAGES */}
      <section className="bg-green-900 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Premium Member Advantages
            </h2>

            <p className="mt-4 text-green-100">
              Unlock opportunities designed to support your wellness and
              success.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-8">
              <Star className="mb-5 h-10 w-10 text-yellow-400" />

              <h3 className="text-xl font-semibold">Exclusive Promotions</h3>

              <p className="mt-3 text-green-100">
                Access member-only deals and special product bundles.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-8">
              <TrendingUp className="mb-5 h-10 w-10 text-green-300" />

              <h3 className="text-xl font-semibold">Business Opportunities</h3>

              <p className="mt-3 text-green-100">
                Learn how to build an additional income stream through
                networking.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-8">
              <Users className="mb-5 h-10 w-10 text-green-300" />

              <h3 className="text-xl font-semibold">Supportive Community</h3>

              <p className="mt-3 text-green-100">
                Connect with motivated individuals focused on health and
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-green-700 to-green-900 p-6 text-center text-white shadow-2xl sm:p-10">
            <Gift className="mx-auto h-10 w-10 sm:h-12 sm:w-12" />

            <h2 className="mt-4 text-2xl font-bold sm:mt-6 sm:text-4xl">
              Ready to Join the I-FERN Family?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-green-100 sm:text-base">
              Take the next step toward better health, wellness, and personal
              growth. Connect with us today and start your membership journey.
            </p>

            <Link
              href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
              target="_blank"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-green-800 shadow-lg transition hover:scale-105 sm:mt-8 sm:w-auto"
            >
              <FaFacebookF size={15} />
              Join via Facebook
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
