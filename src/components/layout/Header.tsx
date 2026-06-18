import Link from 'next/link';
import { SECTION_NAV_LINKS } from '@/constants/navigation';
import Container from './Container';
import Button from '../Button';
import Logo from '../Logo';

const Header = () => {

  return (
    <header className="border-b border-border-gray bg-background">
      <Container dotted={false}>
        <div className="flex h-[46px] w-full max-w-[1280px] items-center justify-between">
          <div className="flex items-center gap-12">
            <Logo />
            <nav className="flex gap-7 text-[14px] font-normal ">
              {SECTION_NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
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
