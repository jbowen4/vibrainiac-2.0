import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Applies the brand glow used to mark the current section (e.g. "For Partners", "Our Value"). */
  active?: boolean;
}

/** Single top-level nav item — "ABOUT", "GAMES", "CONTACT US", ... */
export function NavLink({ active = false, className, children, ...props }: NavLinkProps) {
  return (
    <a
      className={cn(
        "font-sans text-body-sm font-medium tracking-wide transition-colors duration-(--transition-fast) ease-standard",
        active
          ? "text-accent-primary drop-shadow-[var(--shadow-glow-accent)]"
          : "text-text-primary hover:text-accent-primary",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
