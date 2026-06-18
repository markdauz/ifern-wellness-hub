import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/src/data/products';
import ProductGallery from '@/src/components/product-gallery';
import ProductVariantDetails from '@/src/components/product-variant-details';

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
    <main className="overflow-x-hidden bg-white py-6 sm:py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Details */}
          <div className="mt-2 lg:mt-0 lg:pl-4">
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-green-700 sm:text-xs">
              {product.category}
            </span>

            <h1 className="mt-3 text-2xl font-black leading-tight text-gray-900 sm:text-3xl md:text-5xl">
              {product.name}
            </h1>

            <ProductVariantDetails variants={product.variants} />

            {/* Short Description */}
            <div className="mt-5">
              <p className="text-sm font-medium leading-6 text-gray-700 sm:text-base sm:leading-7">
                {product.shortDescription}
              </p>
            </div>

            {/* Product Overview */}
            <div className="mt-6">
              <h2 className="mb-3 text-lg font-bold text-gray-900">
                Product Overview
              </h2>

              <p className="text-sm leading-6 text-gray-600 sm:leading-7 md:text-base">
                {product.fullDescription}
              </p>
            </div>

            {/* Packaging */}
            <div className="mt-6 rounded-2xl bg-gray-50 p-4 sm:p-5">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
                Packaging
              </h3>

              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                {product.variants[0].packaging}
              </p>
            </div>

            {/* Marketplace */}
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              <Link
                href={product.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[72px] items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 px-4 py-4 transition-all duration-300 hover:border-orange-300 hover:bg-orange-100"
              >
                <Image
                  src="/images/shopee.svg"
                  alt="Shopee"
                  width={140}
                  height={40}
                  className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-8"
                />
              </Link>

              <Link
                href={product.lazadaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[72px] items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-100"
              >
                <Image
                  src="/images/lazada.svg"
                  alt="Lazada"
                  width={140}
                  height={40}
                  className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-8"
                />
              </Link>

              <Link
                href={product.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[72px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 transition-all duration-300 hover:border-gray-300 hover:bg-gray-100"
              >
                <Image
                  src="/images/tiktok.svg"
                  alt="TikTok Shop"
                  width={140}
                  height={40}
                  className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
