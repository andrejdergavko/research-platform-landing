export const SITE_URL = 'https://vector-reports.org';

export const SITE_NAME = 'Vector';
export const SITE_TITLE = 'Vector — Research Intelligence Platform';
export const SITE_DESCRIPTION =
  'Vector collects reports, research and industry publications from hundreds of trusted sources, extracts key insights and turns them into a searchable knowledge platform that keeps you informed.';
export const SITE_KEYWORDS = [
  'research intelligence',
  'industry reports',
  'market research',
  'business insights',
  'trend analysis',
  'research platform',
  'Vector',
];

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;
  return url.replace(/\/$/, '');
}
