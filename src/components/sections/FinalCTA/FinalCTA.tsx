import Button from '@/components/Button';
import Dot from '@/components/Dot';

const FinalCTA = () => {
  return (
    <div className="h-[500px] w-full bg-noise-pattern">
      <div
        className="h-[500px] w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'radial-gradient(circle, #393939 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-small-uppercase flex items-center gap-3 text-white font-medium">
            <Dot />
            Tell us where the work piles up.
          </h3>

          <h1 className="text-title-sense text-[70px] text-white">
            The layer above them all.
          </h1>

          <Button
            variant="filled"
            className="h-[52px] mt-10 bg-white !text-black"
          >
            Get started <span className="text-[14px]">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
