'use client';

import { useState } from 'react';
import { AdditionalSkinImage } from '@/types/BrawlerTypes';
import FadeInImage from '@/components/FadeInImage';

interface SkinImageCarouselProps {
  mainImageSrc: string;
  mainImageAlt: string;
  additionalImages?: AdditionalSkinImage[];
  skinName: string;
}

export default function SkinImageCarousel({ mainImageSrc, mainImageAlt, additionalImages = [], skinName }: SkinImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Main image + additional images
  const allImages = [
    { src: mainImageSrc, alt: mainImageAlt, label: 'Base', size: 256 },
    ...additionalImages.map((img) => ({
      src: img.src,
      alt: `${skinName} ${img.label}`,
      label: img.label,
      size: img.size,
    })),
  ];

  const totalImageCount = allImages.length;
  const hasMultipleImages = totalImageCount > 1;

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImageCount);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImageCount) % totalImageCount);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!hasMultipleImages) {
    return (
      <FadeInImage
        src={mainImageSrc}
        alt={mainImageAlt}
        fill
        draggable={false}
        wrapperClassName="h-[256px] w-[256px]"
        className="object-contain"
      />
    );
  }

  return (
    <div className="group relative h-[256px] w-[256px]">
      {/* Image container with crossfade effect */}
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        {allImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <FadeInImage
              src={image.src}
              alt={image.alt}
              fill
              draggable={false}
              wrapperClassName="h-[256px] w-[256px]"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
        aria-label="Next image"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute left-2 top-2 rounded bg-black/50 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {currentImageIndex + 1} / {totalImageCount}
      </div>

      {/* Image label */}
      {allImages[currentImageIndex].label !== 'Base' && (
        <div className="absolute right-2 top-2 rounded bg-blue-600 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {allImages[currentImageIndex].label.toUpperCase()}
        </div>
      )}
    </div>
  );
}
