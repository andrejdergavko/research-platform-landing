import Image from 'next/image';

import './SourcesCarousel.css';

const LOGO_HEIGHT = 40;

const sources = [
  {
    id: 1,
    name: 'Anthropic',
    logo: '/antropic-logo.png',
  },
  {
    id: 2,
    name: 'dalberg',
    logo: '/dalberg-logo.svg',
  },
  {
    id: 3,
    name: 'Anthropic',
    logo: '/antropic-logo.png',
  },
  {
    id: 4,
    name: 'dalberg',
    logo: '/dalberg-logo.svg',
  },
  {
    id: 5,
    name: 'Anthropic',
    logo: '/antropic-logo.png',
  },
  {
    id: 6,
    name: 'dalberg',
    logo: '/dalberg-logo.svg',
  },
  {
    id: 7,
    name: 'Anthropic',
    logo: '/antropic-logo.png',
  },
  {
    id: 8,
    name: 'dalberg',
    logo: '/dalberg-logo.svg',
  },
  {
    id: 9,
    name: 'Anthropic',
    logo: '/antropic-logo.png',
  },
  {
    id: 10,
    name: 'dalberg',
    logo: '/dalberg-logo.svg',
  },
];

const SourcesCarousel = () => {
  const items = [...sources, ...sources];

  return (
    <div className="w-full overflow-hidden has-[.logo-item:hover]:[&_.track]:[animation-play-state:paused]">
      <div className="track flex w-max items-center animate-[sourcesMarquee_65s_linear_infinite]">
        {items.map((source, index) => (
          <div
            key={`${source.id}-${index}`}
            className="logo-item group/logo flex shrink-0 items-center px-8"
          >
            <Image
              src={source.logo}
              alt={source.name}
              width={160}
              height={LOGO_HEIGHT}
              className="h-10 w-auto grayscale transition-[filter] duration-300 group-hover/logo:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourcesCarousel;
