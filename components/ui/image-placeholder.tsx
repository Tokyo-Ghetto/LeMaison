"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  layout?: string;
  objectFit?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-[#AF8F6F] bg-opacity-20 ${className}`}
        style={
          fill
            ? { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }
            : { width, height }
        }
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
