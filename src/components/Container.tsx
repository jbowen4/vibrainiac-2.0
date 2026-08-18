import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Centers content and caps its width, with the standard page gutter applied. */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full [max-width:var(--container-max-width)] [padding-inline:var(--container-padding-inline)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
