'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/src/data/products';
import Link from 'next/link';

export default function ProductsPage() {
  const categories = ['All', 'Health', 'Beauty', 'Wellness'];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[number] | null
  >(null);

  const [activeImage, setActiveImage] = useState('');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-green-700">
            Premium Nutrition
          </p>

          <h1 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Our Products
          </h1>

          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Discover I-FERN&apos;s premium wellness, health, and beauty
            solutions designed to help you live healthier every day.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:gap-3 sm:px-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-700 text-white shadow-lg'
                  : 'border border-gray-200 bg-white text-gray-700 hover:border-green-700 hover:text-green-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All'
                ? 'All Products'
                : `${selectedCategory} Products`}
            </h2>

            <span className="text-sm text-gray-500">
              {filteredProducts.length} Product
              {filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-gray-100 bg-gray-50 py-20 text-center">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                No products found
              </h3>

              <p className="text-gray-500">
                There are currently no products in this category.
              </p>
            </div>
          ) : (
            <div
              key={selectedCategory}
              className="animate-fadeIn grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.name}
                  className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Product Image */}
                  <div className="relative flex h-[180px] sm:h-[220px] items-center justify-center bg-gradient-to-b from-green-50 to-white p-6">
                    <div className="absolute h-32 w-32 rounded-full bg-green-100/70 blur-2xl" />

                    <div className="relative h-[140px] w-[140px] sm:h-[180px] sm:w-[180px]">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain transition duration-500 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-3">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-green-700">
                        {product.category}
                      </span>
                    </div>

                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-green-700">
                        {product.variants[0].sku}
                      </p>
                    </div>

                    <p className="mb-5 text-sm leading-6 text-gray-600 sm:min-h-[72px]">
                      {product.shortDescription}
                    </p>

                    <div className="border-t border-gray-100 pt-4">
                      <div className="mb-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                          Retail Price
                        </p>

                        <p className="mt-1 text-2xl font-black text-green-700">
                          {product.variants[0].price}
                        </p>
                      </div>

                      <Link
                        href={`/products/${product.slug}`}
                        className="block w-full rounded-full bg-green-700 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-800"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
