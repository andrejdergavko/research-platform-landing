const Button = ({
  children,
  onClick,
  className,
  variant = 'outline',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'outline' | 'filled';
}) => {
  const commonStyles = 'tracking-[1.2px] uppercase';

  const VARIANT_STYLES = {
    outline:
      'border border-black px-6 py-2 text-[11px] font-normal text-black hover:bg-black hover:text-white [word-spacing:0.4em] h-full',
    filled:
      'border border-black bg-black px-6 py-2 text-[11px] font-normal text-white hover:border-primary hover:bg-primary [word-spacing:0.4em]',
  };

  return (
    <button
      type="button"
      className={`${VARIANT_STYLES[variant]} ${commonStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
