import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { LegalMarkdown } from '@/components/LegalMarkdown';
import { LegalPageShell } from '@/components/LegalPageShell';

const CONTENT_PATH = join(
  process.cwd(),
  'src/content/legal/app-disclaimer.md'
);

export default function AppDisclaimerPage() {
  const content = readFileSync(CONTENT_PATH, 'utf8');

  return (
    <LegalPageShell activeHref='/app-disclaimer'>
      <LegalMarkdown content={content} />
    </LegalPageShell>
  );
}
