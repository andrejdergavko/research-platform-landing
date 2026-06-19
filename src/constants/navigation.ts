export const SECTION_IDS = {
  howItWorks: 'how-it-works',
  whatYouGet: 'what-you-get',
  whoIsItFor: 'who-is-it-for',
  whyNow: 'why-now',
} as const;

export const SECTION_NAV_LINKS = [
  {
    id: SECTION_IDS.howItWorks,
    label: 'How it works',
    href: `/#${SECTION_IDS.howItWorks}`,
  },
  {
    id: SECTION_IDS.whatYouGet,
    label: 'Features',
    href: `/#${SECTION_IDS.whatYouGet}`,
  },
  {
    id: SECTION_IDS.whoIsItFor,
    label: "Who it's for",
    href: `/#${SECTION_IDS.whoIsItFor}`,
  },
  {
    id: SECTION_IDS.whyNow,
    label: 'Problems we solve',
    href: `/#${SECTION_IDS.whyNow}`,
  },
] as const;
