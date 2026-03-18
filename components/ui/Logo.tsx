"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showImage?: boolean;
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const imageSizes = {
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

export function Logo({ className, size = "md", showImage = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {showImage && (
        <Image
          src="/logo.png"
          alt="Forg"
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="rounded-lg object-contain"
        />
      )}
      <span
        className={cn(
          "font-sans font-bold tracking-tight text-[var(--text-primary)] leading-none select-none",
          sizeClasses[size]
        )}
      >
        Forg
      </span>
    </div>
  );
}

export default Logo;
