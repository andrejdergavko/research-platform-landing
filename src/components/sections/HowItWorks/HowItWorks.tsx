import Container from '@/components/layout/Container';
import { SECTION_IDS } from '@/constants/navigation';
import Divider from './Divider';
import NoizeBG from '../NoizeBG';

const STEPS = [
  {
    title: 'Discover research',
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
    title: 'Stay Updated',
    description: 'Follow new developments without reading hundreds of pages.',
  },
];

const HowItWorks = () => {
  return (
    <section id={SECTION_IDS.howItWorks}>
      <NoizeBG>
        <Container className="!py-0">
          <h2 className="text-title-sense text-[56px] text-white">
            How it works.
          </h2>

          <Divider className="mb-8 !border-white/30" />

          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col w-[400px] mb-2">
              <div className="flex gap-7 items-start">
                <span className="mt-5 text-primary font-bold text-small-uppercase">
                  0{index + 1}
                </span>
                <div
                  className={[
                    'w-full pb-5',
                    index !== STEPS.length - 1 && 'border-b border-white/20',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <h3 className="text-title-sense text-[36px] text-white !tracking-[-2.3px]">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </NoizeBG>
    </section>
  );
};

export default HowItWorks;
