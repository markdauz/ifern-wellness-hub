'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Crown, Sparkles, X } from 'lucide-react';

export default function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('promoModalShown');

    if (hasSeenModal) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem('promoModalShown', 'true');
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-yellow-50" />

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-500/10 blur-2xl" />
        <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-yellow-400/10 blur-2xl" />

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-20 rounded-full bg-white p-2 text-gray-500 shadow transition hover:bg-gray-100 hover:text-gray-800"
        >
          <X size={16} />
        </button>

        <div className="relative z-10 p-5 sm:p-6">
          {/* Icon */}
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-800 text-white shadow-lg">
            <Crown size={22} />
          </div>

          {/* Content */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
              <Sparkles size={12} />
              LIMITED OFFER
            </div>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Become an
              <span className="block text-green-700">I-FERN Member</span>
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Unlock exclusive discounts, wellness benefits, and member-only
              opportunities.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-5 rounded-2xl bg-green-50 p-4">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Member-only product discounts</li>
              <li>✓ Exclusive promotions & bundles</li>
              <li>✓ Business opportunity access</li>
              <li>✓ Wellness community support</li>
            </ul>
          </div>

          {/* CTA */}
          <Link
            href="/become-a-member"
            className="mt-5 block rounded-full bg-green-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-green-800"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}
