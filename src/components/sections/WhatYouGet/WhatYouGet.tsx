import Container from '@/components/layout/Container';
import { SECTION_IDS } from '@/constants/navigation';
import Divider from '../HowItWorks/Divider';

const ITEMS = [
  {
    title: 'AI-powered research',
    description: 'We monitor leading AI research sources.',
  },
  {
    title: 'Summarize',
    description: 'Long reports are converted into concise executive summaries.',
  },
  {
    title: 'Track trends',
    description: 'Insights are organized by topics, trends and companies.',
  },
  {
    title: 'Track trends',
    description: 'Insights are organized by topics, trends and companies.',
  },
  {
    title: 'Track trends',
    description: 'Insights are organized by topics, trends and companies.',
  },
  {
    title: 'Track trends',
    description: 'Insights are organized by topics, trends and companies.',
  },
];

const COLS = 3;

const WhatYouGet = () => {
  const lastRowStart = ITEMS.length - (ITEMS.length % COLS || COLS);

  return (
    <section id={SECTION_IDS.whatYouGet}>
    <Container className="mt-20">
      <h2 className="text-title-sense text-[56px] pb-8">What you get.</h2>

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
            <span className="text-primary font-bold mt-3 mr-3 text-small-uppercase  !text-[14px] ">
              {index + 1}.
            </span>
            <div>
              <h3 className="text-[32px] !tracking-[-3.3px] mb-4 font-medium flex items-center gap-2">
                {item.title}
              </h3>
              <p className="text-[16px] text-text-secondary font-medium">
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
