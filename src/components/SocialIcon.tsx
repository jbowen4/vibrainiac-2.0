import { cn } from "@/lib/cn";

const PLATFORM_ICON = {
  youtube: (
    <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
  ),
  instagram: (
    <path d="M12 2.2c2.7 0 3 0 4 .1 1 0 1.7.2 2.1.4.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1.1.4 2.1.1 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.7-.4 2.1-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1.1.4-2.1.4-1 .1-1.3.1-4 .1s-3 0-4-.1c-1 0-1.7-.2-2.1-.4a3.5 3.5 0 0 1-1.3-.9 3.5 3.5 0 0 1-.9-1.3c-.2-.4-.4-1.1-.4-2.1-.1-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.7.4-2.1.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1.1-.4 2.1-.4 1-.1 1.3-.1 4-.1Zm0 1.8c-2.6 0-2.9 0-4 .1-.8 0-1.3.2-1.6.3-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.6-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .8.2 1.3.3 1.6.1.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.6.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.8 0 1.3-.2 1.6-.3.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.6.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.8-.2-1.3-.3-1.6a2.6 2.6 0 0 0-.6-1 2.6 2.6 0 0 0-1-.6c-.3-.1-.8-.3-1.6-.3-1.1-.1-1.4-.1-4-.1Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-1.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
  ),
  x: (
    <path d="m13.5 10.7 6.6-7.7h-1.6l-5.7 6.7-4.6-6.7H2.5l7 10.1-7 8.1h1.6l6-7 4.9 7h5.7l-7.2-10.5ZM11 12.9l-.7-1L4.8 4.3h2.4l4.5 6.4.7 1 5.8 8.3H16l-4.8-6.9Z" />
  ),
  twitter: (
    <path d="M22 5.9a8.3 8.3 0 0 1-2.4.6 4.1 4.1 0 0 0 1.8-2.3c-.8.5-1.7.8-2.7 1a4.3 4.3 0 0 0-7.3 3.9A12.1 12.1 0 0 1 2.8 4.6a4.2 4.2 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.5v.1c0 2.1 1.5 3.8 3.5 4.2a4.3 4.3 0 0 1-1.9.1 4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-6.4 1.8 12.1 12.1 0 0 0 6.6 1.9c7.8 0 12.1-6.5 12.1-12.1v-.6A8.6 8.6 0 0 0 22 5.9Z" />
  ),
  tiktok: (
    <path d="M16.6 2h-3.2v13.7a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.6a6.1 6.1 0 1 0 5.2 6V8.4a7.7 7.7 0 0 0 4.4 1.4V6.6a4.4 4.4 0 0 1-4.4-4.4Z" />
  ),
  facebook: (
    <path d="M13.5 21.9v-8h2.7l.4-3.1h-3.1V8.9c0-.9.2-1.5 1.6-1.5h1.6V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.8v3.1h2.7v8h3Z" />
  ),
  linkedin: (
    <path d="M6.9 8.4H3.6V20h3.3V8.4ZM5.3 3.3a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 20h-3.3v-6.1c0-1.5 0-3.4-2-3.4-2.1 0-2.4 1.6-2.4 3.3V20H9.4V8.4h3.2v1.6h.1a3.5 3.5 0 0 1 3.2-1.7c3.4 0 4.5 2.2 4.5 5.1V20Z" />
  ),
} as const;

const PLATFORM_LABEL = {
  youtube: "YouTube",
  instagram: "Instagram",
  x: "X",
  twitter: "Twitter",
  tiktok: "TikTok",
  facebook: "Facebook",
  linkedin: "LinkedIn",
} as const;

export type SocialPlatform = keyof typeof PLATFORM_ICON;

export interface SocialIconProps {
  platform: SocialPlatform;
  href: string;
  className?: string;
}

/**
 * Social link glyph — rendered as a uniform monochrome icon (matches the
 * nav/footer icon rows in the Figma mockups, which use a single white
 * icon style rather than per-platform brand colors).
 */
export function SocialIcon({ platform, href, className }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={PLATFORM_LABEL[platform]}
      className={cn(
        "inline-flex size-5 items-center justify-center text-text-primary",
        "transition-opacity duration-(--transition-fast) ease-standard hover:opacity-75",
        className
      )}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        {PLATFORM_ICON[platform]}
      </svg>
    </a>
  );
}
