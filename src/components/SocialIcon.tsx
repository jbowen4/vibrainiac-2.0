import { cn } from "@/lib/cn";

const PLATFORM_ICON = {
  youtube: (
    <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
  ),
  tiktok: (
    <path d="M16.6 2h-3.2v13.7a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.6a6.1 6.1 0 1 0 5.2 6V8.4a7.7 7.7 0 0 0 4.4 1.4V6.6a4.4 4.4 0 0 1-4.4-4.4Z" />
  ),
  linkedin: (
    <path d="M6.9 8.4H3.6V20h3.3V8.4ZM5.3 3.3a1.9 1.9 0 1 0 0 3.9 1.9 1.9 0 0 0 0-3.9ZM20.4 20h-3.3v-6.1c0-1.5 0-3.4-2-3.4-2.1 0-2.4 1.6-2.4 3.3V20H9.4V8.4h3.2v1.6h.1a3.5 3.5 0 0 1 3.2-1.7c3.4 0 4.5 2.2 4.5 5.1V20Z" />
  ),
} as const;

const PLATFORM_COLOR = {
  youtube: "text-social-youtube",
  tiktok: "text-social-tiktok-accent-2",
  linkedin: "text-social-linkedin",
} as const;

const PLATFORM_LABEL = {
  youtube: "YouTube",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
} as const;

export type SocialPlatform = keyof typeof PLATFORM_ICON;

export interface SocialIconProps {
  platform: SocialPlatform;
  href: string;
  className?: string;
}

/** Footer social link — recurs identically (YouTube, TikTok, LinkedIn) on every sampled page. */
export function SocialIcon({ platform, href, className }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={PLATFORM_LABEL[platform]}
      className={cn(
        "inline-flex size-6 items-center justify-center transition-opacity duration-(--transition-fast) ease-(--ease-standard) hover:opacity-75",
        PLATFORM_COLOR[platform],
        className
      )}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        {PLATFORM_ICON[platform]}
      </svg>
    </a>
  );
}
