import Container from '@/components/layout/Container';
import { SECTION_IDS } from '@/constants/navigation';
import Divider from '../HowItWorks/Divider';

const ITEMS = [
  {
    title: 'Access research in one place',
    description:
      'Discover reports, studies and industry publications from hundreds of trusted sources through a single platform.',
  },
  {
    title: 'Save hours of reading',
    description:
      'Most industry reports are 20–100 pages long. Vector turns them into concise summaries so you can understand the key insights in minutes.',
  },
  {
    title: 'Spot trends early',
    description:
      'Identify emerging global and industry trends before they become widely recognized.',
  },
  {
    title: 'Discover hidden insights',
    description:
      'Find valuable reports and research you might never have discovered on your own.',
  },
  {
    title: 'Read research in your language',
    description:
      'Skip the language barrier and understand international research in your own language.',
  },
  {
    title: 'Stay continuously informed',
    description:
      'Subscribe to topics you care about and receive new research and insights automatically as they appear.',
  },
];

const COLS = 3;

const WhatYouGet = () => {
  const lastRowStart = ITEMS.length - (ITEMS.length % COLS || COLS);

  return (
    <section id={SECTION_IDS.whatYouGet}>
      <Container className="mt-20">
        <h2 className="text-title-sense text-[56px] pb-8">
          Why people use vector.
        </h2>

        <Divider className="mb-0" />

        <div className="grid grid-cols-3">
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className={[
                'flex  justify-center p-12',
                index % COLS !== COLS - 1 && 'border-r border-border-gray',
                index < lastRowStart && 'border-b border-border-gray',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span className="text-primary font-bold mt-3 mr-3 text-small-uppercase  !text-[14px]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-[32px] !tracking-[-2.3px] mb-4 font-medium flex items-center gap-2 [word-spacing:0.16rem]">
                  {item.title}
                </h3>
                <p className="text-[16px] text-text-secondary font-medium [word-spacing:0.1rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Divider className="mt-0" />
      </Container>
    </section>
  );
};

export default WhatYouGet;
