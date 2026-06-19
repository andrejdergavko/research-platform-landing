const NoizeBG = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="w-full bg-noise-pattern">
      <div
        className={`w-full flex flex-col justify-center items-center py-20 text-white bg-dot-pattern-black ${className ?? ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default NoizeBG;
