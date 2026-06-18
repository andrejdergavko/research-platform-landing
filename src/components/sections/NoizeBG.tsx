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
        className={`w-full flex flex-col justify-center items-center py-20 text-white ${className ?? ''}`}
        style={{
          backgroundImage:
            'radial-gradient(circle, #393939 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default NoizeBG;
