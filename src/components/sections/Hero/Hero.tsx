import Container from '@/components/layout/Container';
import Button from '@/components/Button';

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col gap-7 max-w-[830px] h-[500px] pt-7 pb-24 mt-[130px]">
        <p className="text-small-uppercase">
          {/* Powered by{' '} */}
          {/* <span className="text-white bg-primary px-2 py-1 ">AI</span> */}
          Research Intelligence Platform
        </p>

        <div className="flex flex-col gap-2">
          <h1 className="text-title-sense text-[70px]">
            Understand what’s changing in minutes.
          </h1>
          {/* <h1 className="text-title-sense text-[70px]">
            One place for reports, trends and insights.
          </h1> */}
        </div>

        <p className="font-inter text-[18px] font-normal tracking-[-0.32px] leading-[25.6px] text-text-secondary">
          Vector collects reports, research and industry publications from
          hundreds of trusted sources, extracts key insights and turns them into
          a searchable knowledge platform that keeps you informed.
        </p>

        <div className="mt-6 flex gap-3">
          <Button variant="filled" className="h-[52px]">
            Get started <span className="text-[14px]">→</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
