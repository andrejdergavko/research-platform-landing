import Container from '@/components/layout/Container';
import Dot from '@/components/Dot';
import { SECTION_IDS } from '@/constants/navigation';

const BEFORE_ITEMS = [
  'Search dozens of websites just to find one report',
  'Spend hours reading 50–100 page documents',
  'Most research published only in English',
  'Manually track trends across scattered sources',
  'Continuous monitoring takes up your entire week',
];

const AFTER_ITEMS = [
  'Reports from trusted sources, already collected in one place',
  'Executive summaries — understand key findings in minutes',
  'Trends and topics detected automatically',
  'Read summaries in your native language',
  'Always linked back to the original source',
];

const WhyNow = () => {
  return (
    <section id={SECTION_IDS.whyNow}>
      <Container className="py-20 bg-[var(--color-primary)]/10">
        <h2 className="text-title-sense text-[56px] pb-8 max-w-[900px] leading-[1.05]">
          Research used to take days.{' '}
          <span className="text-primary">Now it takes minutes.</span>
        </h2>

        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-8 p-10 border-r border-stone-300">
            <div>
              <span className="text-small-uppercase text-text-secondary font-bold !text-[12px] !mb-3">
                Before
              </span>
              <h3 className="text-[32px] !tracking-[-2.5px] font-medium leading-tight">
                The old way
              </h3>
            </div>
            <ul className="flex flex-col gap-5">
              {BEFORE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-[18px] text-text-secondary font-medium leading-[1.6]"
                >
                  <span className="mt-2 w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full bg-text-secondary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8 p-10 ">
            <div>
              <span className="text-small-uppercase text-primary font-bold !text-[12px] !mb-3">
                With the platform
              </span>
              <h3 className="text-[32px] !tracking-[-2.5px] font-medium leading-tight">
                The new way
              </h3>
            </div>
            <ul className="flex flex-col gap-5">
              {AFTER_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-[18px] text-text-primary font-medium leading-[1.6]"
                >
                  <Dot className="mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyNow;
