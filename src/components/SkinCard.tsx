'use client';
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function SkinCard({ name, file }: { name: string, file: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <figure className="flex flex-col w-full justify-center items-center">
      <div ref={ref} className="relative h-[256px] w-[256px]">
        <Image
          src={file}
          alt={`${name} skin`}
          fill={true}
          draggable={false}
          onLoad={() => setIsLoaded(true)}
          style={{ objectFit: "contain" }}
          className={`select-none transition-opacity ease-linear ${isLoaded && inView ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <figcaption className="w-full py-2 text-lg uppercase">
        {name}
      </figcaption>
    </figure>
  );
}
