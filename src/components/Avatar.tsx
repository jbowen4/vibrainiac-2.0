import Image from "next/image";

import { cn } from "@/lib/cn";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  /** Adds the brand-blue glow ring seen behind team member photos. */
  glow?: boolean;
  className?: string;
}

/** Circular photo treatment used for team member portraits. */
export function Avatar({ src, alt, size = 160, glow = true, className }: AvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 rounded-full",
        glow && "shadow-glow-accent",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="rounded-full border-[5px] border-text-primary object-cover"
      />
    </span>
  );
}
