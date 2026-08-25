import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Heading } from "@/components/Heading";
import { LegalNav } from "@/components/LegalNav";
import { NavDropdown, Navbar } from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";
import { SocialIcon, type SocialPlatform } from "@/components/SocialIcon";
import { Text } from "@/components/Text";

const ABOUT_ITEMS = [
  { label: "The Team", href: "/about/team" },
  { label: "Our Values", href: "/about/values" },
  { label: "For Partners", href: "/about/partners" },
];

const NAV_SOCIAL_LINKS: { platform: SocialPlatform; href: string }[] = [
  { platform: "x", href: "#" },
  { platform: "tiktok", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "youtube", href: "#" },
  { platform: "linkedin", href: "#" },
];

const LEGAL_NAV_LINKS = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "App Disclaimer", href: "/app-disclaimer" },
];

export default function TermsOfServicePage() {
  return (
    <GradientBackdrop gradient className="h-dvh min-h-dvh overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-(image:--gradient-fade)"
      />

      <div className="relative flex h-dvh min-h-dvh flex-col overflow-y-auto md:overflow-hidden">
        <Container className="shrink-0">
          <Navbar
            start={
              <>
                <NavLink href="/about/news">NEWS</NavLink>
                <NavLink href="/games" active>
                  GAMES
                </NavLink>
              </>
            }
            end={
              <>
                <NavDropdown label="ABOUT" items={ABOUT_ITEMS} />
                <NavLink href="/contact">CONTACT US</NavLink>
              </>
            }
            social={NAV_SOCIAL_LINKS.map((social) => (
              <SocialIcon key={social.platform} platform={social.platform} href={social.href} />
            ))}
          />
        </Container>

        <div className="flex min-h-0 flex-1 flex-col gap-6 py-6 md:py-8">
          <Container className="shrink-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Button variant="ghost" href="/games">
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
                Return
              </Button>
              <LegalNav links={LEGAL_NAV_LINKS} activeHref="/terms-of-service" />
            </div>
          </Container>

          <Container className="flex min-h-0 flex-1 flex-col">
            <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto rounded-md pr-2">
              <div className="flex flex-col gap-2">
                <Heading size="xl" className="!text-accent-secondary drop-shadow-[0_0_24px_rgba(0,0,0,0.8)]">
                  Terms of Service &amp; End User License Agreement
                </Heading>
                <Text size="sm" tone="secondary">
                  August 19, 2026
                </Text>
              </div>

              <div className="flex flex-col gap-5">
                <Text size="base" tone="secondary">
                  This Terms of Service and End User License Agreement (&ldquo;Agreement&rdquo;) is
                  a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or
                  &ldquo;your&rdquo;) and{" "}
                  <span className="font-bold text-text-primary">Vibrainiac Games</span> (&ldquo;Company,&rdquo;
                  &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) governing your access to
                  and use of the <span className="font-bold text-text-primary">INNERVERSE&trade;</span> platform,
                  website, applications, subscription services, and related content (collectively,
                  the &ldquo;Service&rdquo;).
                </Text>
                <Text size="base" tone="secondary">
                  By accessing, downloading, subscribing to, or using the Service, you agree to be
                  bound by this Agreement.
                </Text>
                <Text size="base" tone="secondary">
                  If you do not agree, do not use the Service.
                </Text>

                <Heading size="sm" as="h2" className="mt-2">
                  Service Overview
                </Heading>
                <Text size="base" tone="secondary">
                  INNERVERSE&trade; (&ldquo;Service&rdquo;) is an entertainment and supportive
                  wellness experience designed to provide users with interactive, game-based
                  activities, educational content, and guided exercises intended to support general
                  well-being and personal engagement.
                </Text>
                <Text size="base" tone="secondary">
                  The Service is provided for informational, entertainment, and general wellness
                  purposes only. It is not a medical or mental health service and is not intended to
                  provide medical advice, diagnosis, treatment, therapy, counseling, or
                  prescriptions.
                </Text>
                <Text size="base" tone="secondary">
                  The Service does not replace professional healthcare or individualized guidance
                  from a qualified healthcare provider. Users should consult an appropriate
                  healthcare professional regarding any medical or mental health concerns.
                </Text>

                <Heading size="sm" as="h2" className="mt-2">
                  1. Eligibility
                </Heading>
                <Text size="base" tone="secondary">
                  The <span className="font-bold text-text-primary">Game/Service</span> is intended
                  for users who meet the minimum age requirements set by the app store and
                  applicable laws. By using the{" "}
                  <span className="font-bold text-text-primary">Game/Service</span>, you confirm
                  that you meet these requirements and have legal capacity to enter into this
                  agreement.
                </Text>
                <Text size="base" tone="secondary">
                  The Service is intended for users who are at least{" "}
                  <span className="font-bold text-text-primary">13 years old</span>.
                </Text>
                <Text size="base" tone="secondary">
                  By creating an account or using the Service, you represent and warrant that:
                </Text>
                <ul className="list-disc pl-6">
                  <li>
                    <Text as="span" size="base" tone="secondary">
                      You are at least 13 years of age, and
                    </Text>
                  </li>
                  <li>
                    <Text as="span" size="base" tone="secondary">
                      You have the legal capacity to enter into this Agreement.
                    </Text>
                  </li>
                </ul>
                <Text size="base" tone="secondary">
                  Users Under 18
                </Text>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </GradientBackdrop>
  );
}
