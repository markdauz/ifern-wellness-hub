import { notFound } from 'next/navigation';
import { products } from '@/src/data/products';
import ProductGallery from '@/src/components/product-gallery';
import ProductVariantDetails from '@/src/components/product-variant-details';
import ProductDetails from '@/src/components/product-details';

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
        <ProductDetails product={product} />
      </div>
    </main>
  );
}
