import Container from '@/components/layout/Container';
import Divider from './Divider';

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
    <Container className="mt-34">
      <h2 className="text-title-sense text-[56px]">How it works.</h2>

      <Divider className="mb-8" />

      {STEPS.map((step, index) => (
        <div key={index} className="flex flex-col w-[400px] mb-2">
          <div className="flex gap-7 items-start">
            <span className="mt-5 text-primary font-bold text-small-uppercase ">
              L{index + 1}
            </span>
            <div className="w-full border-b border-border-gray pb-5">
              <h3 className="text-title-sense text-[36px] !tracking-[-2.3px]">
                {step.title}
              </h3>
              <p className="text-[16px]">{step.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default HowItWorks;
