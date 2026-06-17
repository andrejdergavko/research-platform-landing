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
  const VARIANT_STYLES = {
    outline:
      'border border-black px-6 text-[11px] font-normal uppercase text-black transition hover:bg-black hover:text-white [word-spacing:0.4em]',
    filled:
      'border border-black bg-black px-6 text-[11px] font-normal uppercase text-white hover:border-primary hover:bg-primary [word-spacing:0.4em]',
  };

  return (
    <button
      type="button"
      className={`${VARIANT_STYLES[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
