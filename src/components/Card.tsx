import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface CardProps {
  className?: string;
  children: ReactNode;
}

/**
 * General-purpose content surface — the recurring card treatment (rounded
 * corners, glass blur, ambient drop shadow) used for News items and
 * intended for the same job on the Games listing. Composes with
 * `CardMedia`, `Heading`, `Text`, `Badge`, and `Button` rather than
 * prescribing a fixed internal layout.
 */
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-md bg-background-secondary/60",
        "backdrop-blur-glass-md shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface CardMediaProps {
  src?: string;
  alt?: string;
  /** Renders the neutral gradient placeholder used when no image is available yet. */
  placeholder?: boolean;
  aspectRatio?: string;
  className?: string;
}

/** Thumbnail slot for `Card` — falls back to the design system's placeholder gradient. */
export function CardMedia({
  src,
  alt = "",
  placeholder = !src,
  aspectRatio = "16 / 9",
  className,
}: CardMediaProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      {placeholder || !src ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-[image:var(--gradient-image-placeholder)]"
        />
      ) : (
        <Image src={src} alt={alt} fill className="object-cover" />
      )}
    </div>
  );
}

export interface CardBodyProps {
  className?: string;
  children: ReactNode;
}

/** Padded content region below `CardMedia`. */
export function CardBody({ className, children }: CardBodyProps) {
  return (
    <div className={cn("flex flex-col gap-3 p-6", className)}>{children}</div>
  );
}
