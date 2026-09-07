import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { Metadata } from 'next';

import { LegalMarkdown } from '@/components/LegalMarkdown';
import { LegalPageShell } from '@/components/LegalPageShell';

const CONTENT_PATH = join(
  process.cwd(),
  'src/content/legal/privacy-policy.md'
);

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Vibrainiac Games collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  const content = readFileSync(CONTENT_PATH, 'utf8');

  return (
    <LegalPageShell activeHref='/privacy-policy'>
      <LegalMarkdown content={content} />
    </LegalPageShell>
  );
}
