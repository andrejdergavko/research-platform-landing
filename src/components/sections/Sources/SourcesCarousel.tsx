import Image from 'next/image';

import './SourcesCarousel.css';

type SourceLogo = {
  id: number;
  name: string;
  logo: string;
  /** Display width in px — tune per brand */
  width: number;
  /** Display height in px — tune per brand */
  height: number;
};

const sources: SourceLogo[] = [
  {
    id: 1,
    name: 'Anthropic',
    logo: '/logos/antropic2.png',
    width: 140,
    height: 90,
  },
  {
    id: 2,
    name: 'Bain & Company',
    logo: '/logos/bain-company.png',
    width: 180,
    height: 30,
  },
  {
    id: 3,
    name: 'Deloitte',
    logo: '/logos/deloitte2.png',
    width: 110,
    height: 48,
  },
  { id: 4, name: 'EY', logo: '/logos/ey.png', width: 44, height: 52 },
  { id: 5, name: 'IBM', logo: '/logos/ibm.png', width: 90, height: 44 },
  { id: 6, name: 'IMF', logo: '/logos/imf.png', width: 52, height: 52 },
  {
    id: 7,
    name: 'McKinsey',
    logo: '/logos/mc-kinsey2.png',
    width: 100,
    height: 55,
  },
  {
    id: 8,
    name: 'Microsoft',
    logo: '/logos/microsoft.png',
    width: 130,
    height: 40,
  },
  {
    id: 9,
    name: 'Morgan Stanley',
    logo: '/logos/morgan-stanly.png',
    width: 170,
    height: 36,
  },
  {
    id: 10,
    name: 'Morningstar',
    logo: '/logos/morningstar.png',
    width: 160,
    height: 30,
  },
  {
    id: 11,
    name: 'NVIDIA',
    logo: '/logos/nvidia2.svg',
    width: 110,
    height: 55,
  },
  {
    id: 12,
    name: 'OpenAI',
    logo: '/logos/open-ai.png',
    width: 100,
    height: 55,
  },
  { id: 13, name: 'PwC', logo: '/logos/pngegg.png', width: 72, height: 54 },
  {
    id: 14,
    name: 'Statista',
    logo: '/logos/statista.png',
    width: 130,
    height: 35,
  },
];

const SourcesCarousel = () => {
  const items = [...sources, ...sources];

  return (
    <div className="w-full overflow-hidden has-[.logo-item:hover]:[&_.track]:[animation-play-state:paused]">
      <div className="track flex w-max items-center animate-[sourcesMarquee_100s_linear_infinite]">
        {items.map((source, index) => (
          <div
            key={`${source.id}-${index}`}
            className="logo-item group/logo flex shrink-0 items-center px-8"
          >
            <Image
              src={source.logo}
              alt={source.name}
              width={source.width}
              height={source.height}
              style={{ width: source.width, height: source.height }}
              className="object-contain grayscale transition-[filter] group-hover/logo:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourcesCarousel;
