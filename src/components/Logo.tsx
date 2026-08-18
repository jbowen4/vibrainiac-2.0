import Image from "next/image";

import { cn } from "@/lib/cn";
import brainIcon from "../../public/brand/brain-icon.png";

export interface LogoProps {
  size?: number;
  className?: string;
}

/** Brain/circuit mark — the site's icon-only wordmark, used in the nav pill and the footer. */
export function Logo({ size = 28, className }: LogoProps) {
  const height = Math.round((size * brainIcon.height) / brainIcon.width);

  return (
    <Image
      src={brainIcon}
      alt="Vibrainiac Games"
      width={size}
      height={height}
      className={cn("shrink-0", className)}
    />
  );
}
