import Dot from '@/components/Dot';
import SourcesCarousel from './SourcesCarousel';

const Sources = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 pb-15">
      <h3 className="text-small-uppercase flex items-center gap-3">
        <Dot />
        Our sources
      </h3>
      <SourcesCarousel />
    </div>
  );
};

export default Sources;
