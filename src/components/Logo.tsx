import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-[24px] font-bold uppercase tracking-wide  no-underline"
      aria-label="Vector home"
    >
      Vector
    </Link>
  );
};

export default Logo;
