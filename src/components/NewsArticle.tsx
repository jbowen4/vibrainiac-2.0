import Image from "next/image";

import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { cn } from "@/lib/cn";

export interface NewsArticleProps {
  title: string;
  /** Pre-formatted display date, e.g. "Aug 11, 2026 | 5:57pm". */
  date: string;
  /** One paragraph of body copy per entry. */
  body: string[];
  image?: string;
  imageAlt?: string;
  /** Where the "Return to News" control navigates. */
  returnHref: string;
  className?: string;
}

/**
 * Reusable template for a single News article — glass panel with a blue
 * top accent, a "Return to News" control, and the article's title, date,
 * body copy, and optional hero image. Content is entirely prop-driven so
 * the same component renders every article in `news-data.ts`.
 */
export function NewsArticle({
  title,
  date,
  body,
  image,
  imageAlt = "",
  returnHref,
  className,
}: NewsArticleProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-background-secondary/70 shadow-elevated backdrop-blur-glass-sm",
        className
      )}
    >
      <div aria-hidden className="h-[5px] w-full rounded-t-md bg-accent-primary" />

      <div className="flex flex-col gap-8 p-6 sm:p-10 lg:p-16">
        <Button variant="ghost" href={returnHref} className="self-start">
          <svg aria-hidden viewBox="0 0 16 12" className="size-4">
            <path
              d="M6.5 1 1 6l5.5 5M1.5 6h13.5"
              stroke="currentColor"
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Return to News
        </Button>

        <div className="flex flex-col gap-2">
          <Heading
            size="xl"
            className="!text-accent-secondary drop-shadow-[0_0_24px_rgba(0,0,0,0.8)]"
          >
            {title}
          </Heading>
          <Text size="sm" weight="regular">
            {date}
          </Text>
        </div>

        <div className="flex flex-col gap-5">
          {body.map((paragraph, index) => (
            <Text key={index} size="lg">
              {paragraph}
            </Text>
          ))}
        </div>

        {image && (
          <div className="relative w-full overflow-hidden rounded-md" style={{ aspectRatio: "16 / 9" }}>
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}
