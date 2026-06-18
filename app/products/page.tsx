import { Suspense } from 'react';
import ProductsContent from './products-content';

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <main className="overflow-x-hidden bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            Loading products...
          </div>
        </main>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
