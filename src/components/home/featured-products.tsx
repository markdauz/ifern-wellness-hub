import Image from 'next/image';
import { products } from '@/src/data/products';
import Link from 'next/link';

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-700">
            Best Sellers
          </p>

          <h2 className="mb-6 text-5xl font-black text-gray-900">
            Featured Products
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our premium supplements carefully designed for wellness,
            recovery, immunity, and daily performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
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
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-green-700">
                    {product.category}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-green-700">
                  {product.sku}
                </p>

                <p className="mb-6 min-h-[90px] text-sm leading-6 text-gray-600">
                  {product.shortDescription}
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
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
      </div>
    </section>
  );
}
