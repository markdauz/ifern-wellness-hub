import Image from 'next/image';
import { products } from '@/src/data/products';
import Link from 'next/link';

export default function FeaturedProducts() {
  return (
    <section className="overflow-x-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-green-700">
            Best Sellers
          </p>

          <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Featured Products
          </h2>

          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Explore our premium supplements carefully designed for wellness,
            recovery, immunity, and daily performance.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <Link href={`/products/${product.slug}`} key={product.name}>
              <div className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Product Image */}
                <div className="relative h-[260px] overflow-hidden bg-gradient-to-b from-green-50 to-white">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/60 blur-3xl"
                  />

                  <Image
                    src={product.variants[0].images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-green-700">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
                    {product.name}
                  </h3>

                  <p className="mb-3 text-sm font-medium text-green-700">
                    {product.variants[0].sku}
                  </p>

                  <p className="mb-5 text-sm leading-6 text-gray-600 sm:min-h-[72px]">
                    {product.shortDescription}
                  </p>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="mb-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                        Retail Price
                      </p>

                      <p className="mt-1 text-xl font-black text-green-700 sm:text-2xl">
                        {product.variants[0].price}
                      </p>
                    </div>

                    <button className="block w-full rounded-full bg-green-700 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-800">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center rounded-full border border-green-700 px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-700 hover:text-white sm:w-auto"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
