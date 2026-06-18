const Dot = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-2 h-2 min-w-2 min-h-2 bg-primary rounded-full ${className}`}
    ></div>
  );
};

export default Dot;
