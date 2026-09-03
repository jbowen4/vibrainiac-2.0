import ReactMarkdown, { type Components } from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';

const components: Components = {
  h1: ({ children }) => (
    <Heading
      size='xl'
      className='!text-accent-secondary drop-shadow-[0_0_24px_rgba(0,0,0,0.8)]'>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size='sm' as='h2' className='mt-2'>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size='sm' as='h3'>
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text size='base' tone='secondary'>
      {children}
    </Text>
  ),
  strong: ({ children }) => (
    <span className='font-bold text-text-primary'>{children}</span>
  ),
  ul: ({ children }) => <ul className='list-disc pl-6'>{children}</ul>,
  ol: ({ children }) => <ol className='list-decimal pl-6'>{children}</ol>,
  li: ({ children }) => (
    <li>
      <Text as='span' size='base' tone='secondary'>
        {children}
      </Text>
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className='font-bold text-accent-primary underline-offset-2 hover:underline'>
      {children}
    </a>
  ),
  hr: () => null,
};

export interface LegalMarkdownProps {
  /** Raw markdown source, e.g. read from a file in `src/content/legal/`. */
  content: string;
}

/** Renders a legal doc's markdown source with the same type ramp used by the hardcoded Terms of Service page. */
export function LegalMarkdown({ content }: LegalMarkdownProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
