import Container from '@/components/layout/Container';
import { SECTION_IDS } from '@/constants/navigation';
import Divider from '../HowItWorks/Divider';

const PERSONAS = [
  {
    title: 'Investors',
    description:
      'Identify opportunities earlier by tracking global trends, industries and research insights.',
  },
  {
    title: 'Founders & Entrepreneurs',
    description:
      'Make faster strategic decisions using clear insights on markets, competitors and trends.',
  },
  {
    title: 'Analytics',
    description:
      'Save time on reading and focus on analyzing insights from condensed research and reports.',
  },
  {
    title: 'Product Managers',
    description:
      'Access global reports and studies to support deeper analysis and understanding.',
  },
  {
    title: 'Researchers',
    description:
      'Turn market research and industry signals into clear product strategy and prioritization.',
  },
];

const BuiltFor = () => {
  return (
    <section id={SECTION_IDS.whoIsItFor}>
      <Container className="mb-20 mt-25">
        <h2 className="text-title-sense text-[56px] pb-8 max-w-[900px] leading-[1.05]">
          Built for people who make decisions.
        </h2>

        <Divider className="mb-0" />

        <div className="grid grid-cols-5">
          {PERSONAS.map((persona, index) => (
            <div
              key={persona.title}
              className={[
                'group flex flex-col gap-5 p-8 min-h-[280px] transition-colors hover:bg-white/60',
                index !== PERSONAS.length - 1 && 'border-r border-border-gray',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span className="text-small-uppercase text-primary font-bold !text-[12px] !mb-0">
                0{index + 1}
              </span>

              <h3 className="text-[28px] !tracking-[-2.5px] font-medium leading-tight">
                {persona.title}
              </h3>

              <p className="text-[15px] text-text-secondary font-medium leading-[1.6] mt-auto">
                {persona.description}
              </p>
            </div>
          ))}
        </div>

        <Divider className="mt-0" />
      </Container>
    </section>
  );
};

export default BuiltFor;
