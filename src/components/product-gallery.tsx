'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  images: string[];
  name: string;
};

export default function ProductGallery({ images, name }: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-3xl bg-gray-50">
        <Image
          src={selectedImage}
          alt={name}
          fill
          className="object-contain p-4 sm:p-6 md:p-10"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 bg-white sm:h-20 sm:w-20 md:h-24 md:w-24 ${
              selectedImage === image ? 'border-green-700' : 'border-gray-200'
            }`}
          >
            <Image
              src={image}
              alt={`${name}-${index}`}
              fill
              className="object-contain p-1 sm:p-2"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </>
  );
}
