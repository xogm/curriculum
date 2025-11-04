"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallbackSrc?: string;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  fallbackSrc,
  className = "",
  ...props 
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-base-200 animate-pulse rounded-lg" />
      )}
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
          setIsLoading(false);
        }}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
