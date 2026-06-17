import SourcesCarousel from './SourcesCarousel';

const Sources = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <h3 className="text-small-uppercase flex items-center gap-3">
        <div className="w-2 h-2 bg-primary rounded-full"></div>Our sources
      </h3>
      <SourcesCarousel />
    </div>
  );
};

export default Sources;
