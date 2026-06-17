import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  dotted?: boolean;
};

const Container = ({
  children,
  className = '',
  dotted = true,
}: ContainerProps) => {
  return (
    <div
      className={`px-16 py-5 w-full flex justify-center ${dotted ? 'bg-dot-pattern' : ''} ${className}`.trim()}
    >
      <div className="w-full max-w-[1280px]">{children}</div>
    </div>
  );
};

export default Container;
