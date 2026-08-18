import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

const SIZE_STYLES = {
  display: "text-display font-bold uppercase leading-tight",
  xl: "text-heading-xl font-bold uppercase leading-tight",
  lg: "text-heading-lg font-bold uppercase leading-tight",
  md: "text-heading-md font-bold leading-normal",
  sm: "text-heading-sm font-medium leading-normal",
} as const;

const DEFAULT_TAG: Record<HeadingSize, ElementType> = {
  display: "h1",
  xl: "h1",
  lg: "h2",
  md: "h3",
  sm: "h4",
};

export type HeadingSize = keyof typeof SIZE_STYLES;

export interface HeadingProps {
  /** Visual size — independent from the semantic tag, pick the tag that fits the document outline. */
  size?: HeadingSize;
  /** Overrides the default element for this size (e.g. render an `xl` visually but as an `h2`). */
  as?: ElementType;
  /** Applies the brand glow used behind emphasized headline words (e.g. "Our Value", "For Partners"). */
  glow?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * Type ramp for page/section headlines. Large sizes (display/xl/lg) are set
 * tight and uppercase to match the treatment used throughout the Figma
 * mockups (hero headline, "Play With Purpose", "For Partners", ...).
 */
export function Heading({
  size = "lg",
  as,
  glow = false,
  className,
  children,
}: HeadingProps) {
  const Tag = as ?? DEFAULT_TAG[size];

  return (
    <Tag
      className={cn(
        "font-sans text-text-primary",
        SIZE_STYLES[size],
        glow && "drop-shadow-[var(--shadow-glow-accent)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
