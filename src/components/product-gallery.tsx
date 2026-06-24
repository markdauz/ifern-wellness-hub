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
      <div className="relative aspect-square overflow-hidden rounded-[32px] bg-gradient-to-b from-green-50 to-white">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/60 blur-3xl"
        />

        <Image
          src={selectedImage}
          alt={name}
          fill
          priority
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-contain scale-100"
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
              className="object-contain"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </>
  );
}
