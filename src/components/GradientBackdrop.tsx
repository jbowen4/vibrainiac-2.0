import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

const BLOB_STYLES = {
  magenta: 'bg-[image:var(--gradient-blob-magenta)]',
  sunset: 'bg-[image:var(--gradient-blob-sunset)]',
  violet: 'bg-[image:var(--gradient-blob-violet)]',
} as const;

export type BlobVariant = keyof typeof BLOB_STYLES;

export interface DecorativeBlobProps {
  variant: BlobVariant;
  /** Position/size the blob via utility classes (e.g. "top-[-10%] right-[-5%] size-[40rem]"). */
  className?: string;
}

/**
 * One of the three decorative radial-gradient "blobs" that recur behind
 * page content across every sampled Figma mockup. Purely decorative —
 * position and size it per-section with `className`.
 */
export function DecorativeBlob({ variant, className }: DecorativeBlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full opacity-decorative blur-3xl',
        BLOB_STYLES[variant],
        className,
      )}
    />
  );
}

export interface GradientBackdropProps {
  /** Renders the recurring dark-to-blue-to-dark hero gradient. `true` is the default top-to-bottom orientation; `'horizontal'` uses the left-to-right variant (Home hero, Figma node 473-302). */
  gradient?: boolean | 'horizontal';
  /** Adds the bottom fade-to-black overlay used to ground content at the base of a section. */
  fade?: boolean;
  /** Full-bleed decorative texture layered over the gradient — give the root a defined height via `className` for it to fill. */
  backgroundImage?: StaticImageData | string;
  /** Extra classes merged onto the background image, e.g. to dial down its opacity. */
  backgroundImageClassName?: string;
  /** Full-bleed layer stacked above the gradient/background image and below page content, e.g. a solid scrim or vignette rectangle. Sized to match the backdrop itself (including padding), unlike `children`. */
  overlay?: ReactNode;
  className?: string;
  children?: ReactNode;
}

/**
 * Full-bleed background treatment shared by every page mockup: the hero
 * gradient, an optional bottom fade, an optional decorative texture image,
 * and a slot for `DecorativeBlob`s, with content stacked on top. This is
 * chrome/texture only — it does not lay out page content.
 */
export function GradientBackdrop({
  gradient = true,
  fade = false,
  backgroundImage,
  backgroundImageClassName,
  overlay,
  className,
  children,
}: GradientBackdropProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-background-primary',
        className,
      )}>
      {gradient && (
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0',
            gradient === 'horizontal'
              ? 'bg-(image:--gradient-hero-horizontal)'
              : 'bg-(image:--gradient-hero)',
          )}
        />
      )}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=''
          fill
          priority
          sizes='100vw'
          className={cn(
            'pointer-events-none object-cover scale-150',
            backgroundImageClassName,
          )}
        />
      )}
      {overlay}
      {fade && (
        <div
          aria-hidden
          className='pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-(image:--gradient-fade)'
        />
      )}
      <div className='relative'>{children}</div>
    </div>
  );
}
