"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function PropertyGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-2">
        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={img + idx}
              onClick={() => setActive(idx)}
              className={cn(
                "relative aspect-[4/3] overflow-hidden border-2",
                active === idx ? "border-gold" : "border-transparent"
              )}
            >
              <Image
                src={img}
                alt={`${name} ${idx + 1}`}
                fill
                sizes="200px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
