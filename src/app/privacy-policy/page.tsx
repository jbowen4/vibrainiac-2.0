import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { LegalMarkdown } from '@/components/LegalMarkdown';
import { LegalPageShell } from '@/components/LegalPageShell';

const CONTENT_PATH = join(
  process.cwd(),
  'src/content/legal/privacy-policy.md'
);

export default function PrivacyPolicyPage() {
  const content = readFileSync(CONTENT_PATH, 'utf8');

  return (
    <LegalPageShell activeHref='/privacy-policy'>
      <LegalMarkdown content={content} />
    </LegalPageShell>
  );
}
