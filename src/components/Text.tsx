import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

const SIZE_STYLES = {
  xl: "text-heading-md leading-relaxed",
  lg: "text-body-lg leading-relaxed",
  base: "text-body leading-relaxed",
  sm: "text-body-sm leading-normal",
  caption: "text-caption leading-normal",
} as const;

const TONE_STYLES = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  accent: "text-accent-primary",
} as const;

const WEIGHT_STYLES = {
  light: "font-light",
  regular: "font-regular",
} as const;

export type TextSize = keyof typeof SIZE_STYLES;
export type TextTone = keyof typeof TONE_STYLES;
export type TextWeight = keyof typeof WEIGHT_STYLES;

type TextOwnProps<T extends ElementType> = {
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
  as?: T;
  className?: string;
  children: ReactNode;
};

export type TextProps<T extends ElementType = "p"> = TextOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps<T>>;

/** Body copy — paragraphs, meta text, addresses, legal links. */
export function Text<T extends ElementType = "p">({
  size = "base",
  tone = "primary",
  weight = "light",
  as,
  className,
  children,
  ...rest
}: TextProps<T>) {
  const Tag = (as ?? "p") as ElementType;

  return (
    <Tag
      className={cn(
        "font-sans",
        SIZE_STYLES[size],
        TONE_STYLES[tone],
        WEIGHT_STYLES[weight],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
