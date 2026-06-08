import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/src/data/products';
import ProductGallery from '@/src/components/product-gallery';

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
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Product Details */}
          <div className="lg:pl-4">
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-green-700">
              {product.category}
            </span>

            <h1 className="mt-3 text-3xl font-black leading-tight text-gray-900 md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-1 text-base font-medium text-green-700">
              {product.sku}
            </p>

            {/* Price */}
            <div className="mt-4 border-b border-gray-100 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                Retail Price
              </p>

              <p className="mt-1 text-3xl font-black text-green-700 md:text-4xl">
                {product.price}
              </p>
            </div>

            {/* Short Description */}
            <div className="mt-4">
              <p className="text-base font-medium leading-7 text-gray-700">
                {product.shortDescription}
              </p>
            </div>

            {/* Product Overview */}
            <div className="mt-5">
              <h2 className="mb-2 text-lg font-bold text-gray-900">
                Product Overview
              </h2>

              <p className="text-sm leading-7 text-gray-600 md:text-base">
                {product.fullDescription}
              </p>
            </div>

            {/* Packaging */}
            <div className="mt-5 border-t border-gray-100 pt-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
                Packaging
              </h3>

              <p className="mt-1 text-gray-600">{product.packaging}</p>
            </div>

            {/* Marketplace */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link
                href="https://shopee.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 px-4 py-4 transition-all duration-300 hover:border-orange-300 hover:bg-orange-100"
              >
                <Image
                  src="/images/shopee.svg"
                  alt="Shopee"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <Link
                href="https://www.lazada.com.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-100"
              >
                <Image
                  src="/images/lazada.svg"
                  alt="Lazada"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
