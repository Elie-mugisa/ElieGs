"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GalleyCard({ imagePath }: { imagePath: string }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="flex-[1] h-full relative hover:flex-[4] ">
      {/* Spinner */}
      {isLoading && (
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-[#111111]/60 z-10">
          <Loader2 className="h-8 w-8 animate-spin opacity-70 md:h-14 md:w-14 " />
          <h1 className=" text-white text-xs font-bold opacity-70 md:text-base ">
            Image loading
          </h1>
        </div>
      )}

      <Image
        className="object-cover flex-[1] bg-fixed rounded-sm transition-opacity duration-1000 hover:flex-[4]"
        onLoad={() => setIsLoading(false)}
        src={imagePath}
        priority
        alt="image"
        width={100}
        height={50}
        unoptimized
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className="absolute h-full w-full bg-[#111111]/50 top-0 left-0 z-20 " />
    </div>
  );
}
