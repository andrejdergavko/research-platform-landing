import Button from '@/components/Button';
import Dot from '@/components/Dot';
import NoizeBG from '../NoizeBG';

const FinalCTA = () => {
  return (
    <NoizeBG>
      <div className="py-40 flex flex-col items-center justify-center gap-2">
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
    </NoizeBG>
  );
};

export default FinalCTA;
