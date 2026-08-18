import { cn } from "@/lib/cn";

export interface DividerProps {
  /** "subtle" matches the footer/section rule (#949494); "hairline" matches the light card rule (#d9d9d9). */
  tone?: "subtle" | "hairline";
  className?: string;
}

/** Thin horizontal rule used to separate footer sections and content blocks. */
export function Divider({ tone = "subtle", className }: DividerProps) {
  return (
    <hr
      className={cn(
        "w-full border-0 border-t",
        "[border-top-width:var(--border-width-hairline)]",
        tone === "subtle" ? "border-border-subtle" : "border-border-hairline",
        className
      )}
    />
  );
}
