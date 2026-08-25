"use client";

import { Select as SelectPrimitive } from "radix-ui";

import { cn } from "@/lib/cn";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  className?: string;
}

/**
 * Glass-panel dropdown select — the role picker on the Contact Us page
 * mockup: dark bordered trigger, translucent glass panel, and the
 * currently selected option lit on a white row with the accent glow.
 */
export function Select({
  options,
  defaultValue,
  value,
  onValueChange,
  name,
  className,
}: SelectProps) {
  return (
    <SelectPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      name={name}
    >
      <SelectPrimitive.Trigger
        className={cn(
          "inline-flex items-center justify-between gap-4 rounded-sm border border-white bg-background-elevated/50 px-6 py-4",
          "font-sans text-heading-sm font-medium text-text-primary shadow-elevated backdrop-blur-glass-sm outline-none",
          "data-[state=open]:border-accent-primary",
          className
        )}
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <svg aria-hidden viewBox="0 0 12 8" className="size-3 shrink-0">
            <path
              d="M1 1.5 6 6.5 11 1.5"
              stroke="currentColor"
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={9}
          className={cn(
            "z-50 overflow-hidden rounded-sm border border-white bg-surface-glass backdrop-blur-glass-sm",
            "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out"
          )}
          style={{ width: "var(--radix-select-trigger-width)" }}
        >
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className={cn(
                  "cursor-pointer select-none px-5 py-2 font-sans text-body-sm leading-[34px] text-text-primary outline-none",
                  "transition-colors duration-(--transition-fast) ease-standard",
                  "data-[highlighted]:text-accent-primary",
                  "data-[state=checked]:rounded-t-[4px] data-[state=checked]:bg-text-primary data-[state=checked]:font-bold data-[state=checked]:text-text-inverse data-[state=checked]:shadow-glow-accent data-[state=checked]:data-[highlighted]:text-text-inverse"
                )}
              >
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
