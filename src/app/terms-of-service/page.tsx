import type { Metadata } from "next";

import { Heading } from "@/components/Heading";
import { LegalPageShell } from "@/components/LegalPageShell";
import { Text } from "@/components/Text";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service and End User License Agreement for Vibrainiac Games.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell activeHref="/terms-of-service">
      <div className="flex flex-col gap-2">
        <Heading size="xl" className="!text-accent-secondary drop-shadow-[0_0_24px_rgba(0,0,0,0.8)]">
          Terms of Service &amp; End User License Agreement
        </Heading>
        <Text size="sm" tone="secondary">
          August 19, 2026
        </Text>
      </div>

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
    </LegalPageShell>
  );
}
