import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { NewsArticle } from "@/components/NewsArticle";
import { NavDropdown, Navbar } from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";
import { SocialIcon, type SocialPlatform } from "@/components/SocialIcon";
import forestBackground from "../../../../../public/news/forest-background.png";
import { NEWS_ARTICLES, getNewsArticle } from "../news-data";

const ABOUT_ITEMS = [
  { label: "The Team", href: "/about/team" },
  { label: "Our Values", href: "/about/values" },
];

const NAV_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: "x", href: "#" },
  { platform: "tiktok", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "youtube", href: "#" },
  { platform: "linkedin", href: "#" },
];

const FOOTER_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: "youtube", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "x", href: "#" },
  { platform: "twitter", href: "#" },
  { platform: "tiktok", href: "#" },
  { platform: "facebook", href: "#" },
  { platform: "linkedin", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Safe and Fair Play Policy", href: "/safe-and-fair-play" },
  { label: "Accessibility Statement", href: "/accessibility" },
  { label: "Other Legal Docs", href: "/legal" },
  { label: "Media Center", href: "/media-center" },
  { label: "Our Domains", href: "/domains" },
  { label: "Site Map", href: "/site-map" },
];

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({ slug: article.slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="relative overflow-hidden bg-background-primary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(220px,38vh,480px)]"
        >
          <div className="absolute inset-0 bg-(image:--gradient-hero)" />
          <Image
            src={forestBackground}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-b from-background-primary/0 to-background-primary" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Container>
            <Navbar
              start={
                <>
                  <NavDropdown label="ABOUT" items={ABOUT_ITEMS} />
                  <NavLink href="/games">GAMES</NavLink>
                </>
              }
              end={
                <>
                  <NavLink href="/about/partners">PARTNERS</NavLink>
                  <NavLink href="/contact">CONTACT US</NavLink>
                </>
              }
              social={NAV_SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.platform} platform={social.platform} href={social.href} />
              ))}
            />
          </Container>

          <div className="flex-1 py-10 sm:py-16 lg:py-20">
            <Container>
              <NewsArticle
                title={article.title}
                date={article.date}
                body={article.body}
                image={article.image}
                imageAlt={article.imageAlt}
                returnHref="/about/news"
              />
            </Container>
          </div>
        </div>
      </div>

      <Footer
        links={FOOTER_LINKS}
        socialLinks={FOOTER_SOCIAL_LINKS}
        address={"225 N. French Avenue, Suite C\nSanford, FL 32771\nUnited States"}
      />
    </>
  );
}
