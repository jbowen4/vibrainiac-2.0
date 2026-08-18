import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

const VARIANT_STYLES = {
  /** Transparent glass pill with an accent border — the News card CTA style. */
  outline: cn(
    "border border-accent-primary bg-surface-glass text-accent-primary backdrop-blur-glass-sm",
    "hover:bg-accent-primary hover:text-text-primary"
  ),
  /** Solid accent-filled pill — the hero CTA style ("Meet the Team"). */
  solid: cn(
    "border border-transparent bg-accent-primary text-text-primary",
    "hover:bg-accent-primary/85"
  ),
} as const;

export type ButtonVariant = keyof typeof VARIANT_STYLES;

const baseStyles = cn(
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-body-sm font-light",
  "shadow-elevated transition-colors duration-(--transition-fast) ease-standard",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
  "disabled:pointer-events-none disabled:opacity-50"
);

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Pill-shaped CTA. `outline` matches the News page card links ("Read
 * More", "Visit Site" — glass fill, accent border); `solid` matches the
 * Home hero CTA ("Meet the Team" — filled accent background). Renders as
 * an `<a>` when `href` is supplied, otherwise a `<button>`.
 */
export function Button({ variant = "outline", className, children, ...props }: ButtonProps) {
  const classes = cn(baseStyles, VARIANT_STYLES[variant], className);

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
