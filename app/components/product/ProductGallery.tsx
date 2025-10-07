"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Image src={images[active]} alt="Product image" width={900} height={700}
        className="rounded-lg shadow w-full h-auto"
        placeholder="blur" blurDataURL="/textures/blur.png" />
      <div className="mt-3 flex gap-2">
        {images.map((src, i) => (
          <button key={src} onClick={()=>setActive(i)}>
            <Image src={src} alt="thumb" width={120} height={90}
              className={`rounded-md border ${i===active?"border-grass":"border-transparent"}`}
              placeholder="blur" blurDataURL="/textures/blur.png"/>
          </button>
        ))}
      </div>
    </div>
  );
}
