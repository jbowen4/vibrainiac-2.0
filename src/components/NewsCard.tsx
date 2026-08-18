import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card, CardBody, CardMedia } from "@/components/Card";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { cn } from "@/lib/cn";

export interface NewsCardProps {
  image?: string;
  imageAlt?: string;
  /** Shows the "New!" status badge above the title. */
  isNew?: boolean;
  title: string;
  description: string;
  href: string;
  buttonLabel?: string;
  className?: string;
}

/**
 * News/press item — image, title, description, and a CTA pinned to the
 * card's bottom edge. Title and description clamp so cards stay a
 * consistent height in a grid regardless of copy length.
 */
export function NewsCard({
  image,
  imageAlt = "",
  isNew = false,
  title,
  description,
  href,
  buttonLabel = "Read More",
  className,
}: NewsCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardMedia src={image} alt={imageAlt} placeholder={!image} />
      <CardBody className="flex-1">
        {isNew && (
          <Badge tone="live" dot>
            New!
          </Badge>
        )}
        <Heading size="md" className="line-clamp-2">
          {title}
        </Heading>
        <Text size="sm" tone="secondary" className="line-clamp-3 flex-1">
          {description}
        </Text>
        <Button href={href} className="mt-auto self-start">
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  );
}
