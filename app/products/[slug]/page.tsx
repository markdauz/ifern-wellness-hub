import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/src/data/products';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | I-FERN Wellness Hub`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-3xl bg-gray-50">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-4 sm:p-6 md:p-10"
                priority
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <Image
                    src={image}
                    alt={`${product.name}-${index}`}
                    fill
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              {product.category}
            </span>

            <h1 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-2 text-base font-medium text-green-700 sm:text-lg">
              {product.sku}
            </p>

            <div className="mt-6 md:mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 sm:text-sm">
                Retail Price
              </p>

              <p className="mt-2 text-3xl font-black text-green-700 sm:text-4xl">
                {product.price}
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <h2 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                Product Overview
              </h2>

              <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                {product.fullDescription}
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4 sm:p-6 md:mt-8">
              <h3 className="mb-2 font-bold text-gray-900">Packaging</h3>

              <p className="text-sm text-gray-600 sm:text-base">
                {product.packaging}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link
                href={'https://shopee.ph/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src="/images/shopee.svg"
                  alt="Shopee"
                  width={160}
                  height={50}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <Link
                href={'https://www.lazada.com.ph/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src="/images/lazada.svg"
                  alt="Lazada"
                  width={160}
                  height={50}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
