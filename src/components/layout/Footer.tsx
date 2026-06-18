import type { ReactNode } from 'react';
import Link from 'next/link';
import { SECTION_NAV_LINKS } from '@/constants/navigation';
import Divider from '../sections/HowItWorks/Divider';
import Container from './Container';
import Logo from '../Logo';
import Dot from '../Dot';

const footerLinkClassName =
  'text-[14px] font-normal transition-colors hover:text-text-primary';

const FooterColumnTitle = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2 text-small-uppercase">
    <Dot /> {children}
  </div>
);

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="flex flex-col justify-start gap-4">
    <FooterColumnTitle>{title}</FooterColumnTitle>
    {children}
  </div>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link href={href} className={footerLinkClassName}>
    {children}
  </Link>
);

const FooterItem = ({ children }: { children: ReactNode }) => (
  <div className={`${footerLinkClassName} cursor-pointer`}>{children}</div>
);

const Footer = () => {
  return (
    <Container className="bg-white">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] my-10">
        <Logo />

        <FooterColumn title="Product">
          {SECTION_NAV_LINKS.map((link) => (
            <FooterLink key={link.id} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          <FooterItem>Contacts</FooterItem>
        </FooterColumn>

        <FooterColumn title="Legal">
          <FooterItem>Privacy Policy</FooterItem>
        </FooterColumn>
      </div>

      <Divider className="!border-border-gray" />
      <p className="text-small-uppercase text-[14px] font-normal flex items-center justify-end ">
        © 2026 Vector Enterprises Inc.
      </p>
    </Container>
  );
};

export default Footer;
