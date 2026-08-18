import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

const baseStyles = cn(
  "inline-flex items-center justify-center gap-2 rounded-lg border border-accent-primary",
  "bg-surface-glass backdrop-blur-glass-sm shadow-elevated",
  "px-6 py-3 text-body-sm font-light text-accent-primary",
  "transition-colors duration-(--transition-fast) ease-(--ease-standard)",
  "hover:bg-accent-primary hover:text-text-primary",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
  "disabled:pointer-events-none disabled:opacity-50"
);

interface CommonProps {
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Pill-shaped outline CTA — evidenced by the News page cards, where every
 * "Read More" / "Watch on YouTube" / "Visit Site" link sits inside a
 * matching pill (radius-lg, 1px accent border, ambient shadow). Renders
 * as an `<a>` when `href` is supplied, otherwise a `<button>`.
 */
export function Button({ className, children, ...props }: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    return (
      <a className={cn(baseStyles, className)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cn(baseStyles, className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
