import { SECTION_NAV_LINKS } from '@/constants/navigation';
import SmoothScrollLink from '../SmoothScrollLink';
import Container from './Container';
import Button from '../Button';
import Logo from '../Logo';

const HEADER_HEIGHT = 86;

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-gray/60 bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <Container dotted={false}>
          <div className="flex h-[46px] w-full max-w-[1280px] items-center justify-between">
            <div className="flex items-center gap-12">
              <Logo />
              <nav className="flex gap-7 text-[14px] font-normal ">
                {SECTION_NAV_LINKS.map((link) => (
                  <SmoothScrollLink
                    key={link.id}
                    href={link.href}
                    className="transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </SmoothScrollLink>
                ))}
              </nav>
            </div>

            <div className="h-full flex items-center gap-3">
              <Button variant="outline" className="h-full">
                Sign up
              </Button>
              <Button variant="filled" className="h-full">
                Try Vector
              </Button>
            </div>
          </div>
        </Container>
      </header>
      <div aria-hidden className="shrink-0" style={{ height: HEADER_HEIGHT }} />
    </>
  );
};

export default Header;
