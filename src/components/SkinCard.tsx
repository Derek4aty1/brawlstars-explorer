'use client';
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function SkinCard({ name, file }: { name: string, file: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <figure key={name} className="flex flex-col w-fit justify-center items-center">
      <div ref={ref} className="relative h-[256px] w-[256px]">
        <Image
          src={file}
          alt={`${name} skin`}
          fill={true}
          draggable={false}
          style={{ objectFit: "contain" }}
          className={`select-none transition-opacity ease-linear ${inView ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <figcaption className="w-full py-2 text-lg">
        {name.toUpperCase()}
      </figcaption>
    </figure>
  );
}
