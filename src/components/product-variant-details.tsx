'use client';

import { useState } from 'react';

type Variant = {
  sku: string;
  price: string;
  packaging: string;
};

type Props = {
  variants: Variant[];
};

export default function ProductVariantDetails({ variants }: Props) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <>
      {variants.length > 1 && (
        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
            Select Type
          </p>

          <div className="flex gap-3">
            {variants.map((variant) => (
              <button
                key={variant.sku}
                onClick={() => setSelectedVariant(variant)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedVariant.sku === variant.sku
                    ? 'border-green-700 bg-green-700 text-white'
                    : 'border-gray-300 bg-white text-gray-700'
                }`}
              >
                {variant.sku}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mt-4 text-sm font-medium text-green-700 sm:text-base">
        {selectedVariant.sku}
      </p>

      <div className="mt-5 border-b border-gray-100 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
          Retail Price
        </p>

        <p className="mt-2 text-2xl font-black text-green-700 sm:text-3xl md:text-4xl">
          {selectedVariant.price}
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-gray-50 p-4 sm:p-5">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
          Packaging
        </h3>

        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          {selectedVariant.packaging}
        </p>
      </div>
    </>
  );
}
