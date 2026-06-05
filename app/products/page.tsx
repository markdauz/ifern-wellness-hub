'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/src/data/products';

export default function ProductsPage() {
  const categories = ['All', 'Health', 'Beauty', 'Wellness'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
            Premium Nutrition
          </p>

          <h1 className="mb-6 text-5xl font-black text-gray-900">
            Our Products
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover I-FERN's premium wellness, health, and beauty solutions
            designed to help you live healthier every day.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
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
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between">
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
              className="animate-fadeIn grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.name}
                  className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Product Image */}
                  <div className="relative flex h-[220px] items-center justify-center bg-gradient-to-b from-green-50 to-white p-6">
                    <div className="absolute h-32 w-32 rounded-full bg-green-100/70 blur-2xl" />

                    <div className="relative h-[180px] w-[180px]">
                      <Image
                        src={product.image}
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
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-green-700">
                        {product.sku}
                      </p>
                    </div>
                    <p className="mb-6 min-h-[72px] text-sm leading-6 text-gray-600 ">
                      {product.description}
                    </p>

                    <div className="border-t border-gray-100 pt-4">
                      <div className="mb-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                          Retail Price
                        </p>

                        <p className="mt-1 text-2xl font-black text-green-700">
                          {product.price}
                        </p>
                      </div>

                      <button className="w-full rounded-full bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                        View Product
                      </button>
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
