import Link from 'next/link';
import Container from './Container';
import Button from '../Button';

const Header = () => {
  const navLinks = [
    { href: '/#section-1', label: 'Section 1' },
    { href: '/#section-2', label: 'Section 2' },
    { href: '/#section-3', label: 'Section 3' },
    { href: '/#section-4', label: 'Section 4' },
  ];

  return (
    <header className="border-b border-[#f1f1f1] bg-white">
      <Container>
        <div className="flex h-[46px] w-full max-w-[1280px] items-center justify-between">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-[24px] font-bold uppercase tracking-wide  no-underline"
              aria-label="Vector home"
            >
              Vector
            </Link>
            <nav className="flex gap-7 text-[14px] font-normal ">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="h-full flex items-center gap-3">
            <Button variant="outline" className="h-full">
              Sign in
            </Button>
            <Button variant="filled" className="h-full">
              Request a demo
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
