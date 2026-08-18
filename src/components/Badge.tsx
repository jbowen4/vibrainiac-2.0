import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

const TONE_STYLES = {
  accent: "text-accent-primary border-accent-primary/40",
  live: "text-status-live border-status-live/40",
  neutral: "text-text-primary border-border-hairline/40",
} as const;

const DOT_STYLES = {
  accent: "bg-accent-primary",
  live: "bg-status-live",
  neutral: "bg-text-primary",
} as const;

export type BadgeTone = keyof typeof TONE_STYLES;

export interface BadgeProps {
  tone?: BadgeTone;
  /** Shows a small status dot before the label, matching the "live/new" indicator on News cards. */
  dot?: boolean;
  className?: string;
  children: ReactNode;
}

/** Small glass-pill label — status indicators ("NEW!") and category chips. */
export function Badge({ tone = "accent", dot = false, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1",
        "bg-surface-glass backdrop-blur-glass-sm",
        "text-caption font-bold uppercase tracking-normal",
        TONE_STYLES[tone],
        className
      )}
    >
      {dot && (
        <span
          aria-hidden
          className={cn("size-2 rounded-full", DOT_STYLES[tone])}
        />
      )}
      {children}
    </span>
  );
}
