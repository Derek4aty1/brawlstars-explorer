'use client';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInImageProps extends ImageProps {
  wrapperClassName?: string;
  triggerOnce?: boolean;
}

export default function FadeInImage({ wrapperClassName = '', triggerOnce = true, ...props }: FadeInImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce });

  return (
    <div ref={ref} className={`relative ${wrapperClassName}`}>
      <Image
        {...props}
        alt={props.alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity ease-linear ${isLoaded && inView ? 'opacity-100' : 'opacity-0'} ${props.className || ''}`}
      />
    </div>
  );
}
