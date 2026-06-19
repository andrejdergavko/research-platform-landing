import Container from '@/components/layout/Container';
import { SECTION_IDS } from '@/constants/navigation';
import Divider from './Divider';
import NoizeBG from '../NoizeBG';
import { Dot } from 'lucide-react';

const STEPS = [
  {
    title: 'Collect research',
    description:
      'We gather public reports, studies and industry publications from leading sources.',
  },
  {
    title: 'Extract key insights',
    description: (
      <div>
        <p>Long reports are converted into concise executive summaries.</p>
        <br />
        <p>Each report is available in two formats:</p>
        <ul>
          <li>
            <Dot className="inline-block" />
            <span className="font-bold">Short summary</span> — key insights in a
            few minutes
          </li>
          <li>
            <Dot className="inline-block" />
            <span className="font-bold">Extended summary</span> — deeper context
            and supporting details
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Knowledge organization',
    description:
      'Insights are structured by topics, industries and emerging trends for easy exploration.',
  },
  {
    title: 'Stay Updated',
    description: (
      <div>
        <p>New research is continuously processed and added to the platform.</p>
        <br />
        <p>
          <p>Subscribe to personalized updates and receive:</p>
          <ul>
            <li>
              <Dot className="inline-block" />
              Weekly email digests{' '}
            </li>
            <li>
              <Dot className="inline-block" />
              Telegram alerts by topic, industry or trend
            </li>
          </ul>
        </p>
      </div>
    ),
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
            <div key={index} className="flex flex-col w-[700px] mb-2">
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
