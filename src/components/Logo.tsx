import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface LogoProps {
  /** Slot for the mark/icon asset, rendered ahead of the wordmark. Left empty until a final logo asset exists. */
  icon?: ReactNode;
  className?: string;
}

/**
 * "VIBRAINIAC" wordmark — appears identically, in accent blue with a soft
 * brand glow, inside the nav pill on every sampled page. The icon mark
 * itself wasn't extractable as vector data, so it's left as a slot.
 */
export function Logo({ icon, className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-sans text-body-sm font-extrabold uppercase tracking-normal text-accent-primary",
        "drop-shadow-[var(--shadow-glow-brand)]",
        className
      )}
    >
      {icon}
      VIBRAINIAC
    </span>
  );
}
