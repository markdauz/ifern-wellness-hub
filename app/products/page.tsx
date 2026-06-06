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
            Discover I-FERN&apos;s premium wellness, health, and beauty
            solutions designed to help you live healthier every day.
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
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-green-700">
                        {product.sku}
                      </p>
                    </div>

                    <p className="mb-6 min-h-[72px] text-sm leading-6 text-gray-600">
                      {product.shortDescription}
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

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="animate-modal no-scrollbar relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-gray-600 transition hover:bg-gray-200"
            >
              ×
            </button>

            <div className="grid gap-10 p-8 md:grid-cols-2 md:p-10">
              {/* Gallery */}
              <div>
                <div className="relative mb-4 h-[380px] overflow-hidden rounded-3xl bg-gray-50">
                  <Image
                    src={activeImage}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>

                <div className="flex justify-center gap-3">
                  {selectedProduct.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(image)}
                      className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition ${
                        activeImage === image
                          ? 'border-green-700'
                          : 'border-gray-200'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProduct.name}-${index}`}
                        fill
                        className="object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <span className="rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                  {selectedProduct.category}
                </span>

                <h2 className="mt-4 text-4xl font-black text-gray-900">
                  {selectedProduct.name}
                </h2>

                <p className="mt-2 text-lg font-semibold text-green-700">
                  {selectedProduct.sku}
                </p>

                <div className="mt-6 border-t border-gray-100 pt-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    Retail Price
                  </p>

                  <p className="mt-2 text-4xl font-black text-green-700">
                    {selectedProduct.price}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    Product Overview
                  </h3>

                  <p className="leading-8 text-gray-600">
                    {selectedProduct.fullDescription}
                  </p>
                </div>

                <div className="mt-8 rounded-2xl bg-gray-50 p-5">
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-700">
                    Packaging
                  </h4>

                  <p className="text-gray-600">{selectedProduct.packaging}</p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="rounded-full bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
