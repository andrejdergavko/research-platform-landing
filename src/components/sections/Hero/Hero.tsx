import Container from '@/components/layout/Container';
import Button from '@/components/Button';

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col gap-7 max-w-[750px] h-[500px] pt-7 pb-24 mt-[130px]">
        <p className="text-small-uppercase">
          Powered by <span className="text-primary">AI</span>
        </p>

        <div className="flex flex-col gap-2">
          <h1 className="text-title-sense text-[70px]">Not another AI tool.</h1>
          <h1 className="text-title-sense text-[70px]">
            The layer above them all.
          </h1>
        </div>

        <p className="font-inter text-[18px] font-normal tracking-[-0.32px] leading-[25.6px] text-text-secondary">
          Nexus is the AI infrastructure for the enterprise. One layer that
          connects every system to every agent you build, instead of a patchwork
          of disconnected tools.
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
