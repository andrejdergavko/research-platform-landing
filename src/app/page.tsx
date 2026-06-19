'use client';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero/Hero';
import Sources from '@/components/sections/Sources/Sources';
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks';
import WhatYouGet from '@/components/sections/WhatYouGet/WhatYouGet';
import Footer from '@/components/layout/Footer';
import BuiltFor from '@/components/sections/BuiltFor/BuiltFor';
import WhyNow from '@/components/sections/WhyNow/WhyNow';
import FinalCTA from '@/components/sections/FinalCTA/FinalCTA';
import DotFieldBG from '@/components/DotFieldBG';

export default function Home() {
  return (
    <div className="">
      <Header />
      <DotFieldBG>
        <Hero />
        <Sources />
      </DotFieldBG>

      <HowItWorks />
      <div className="bg-dot-pattern py-15">
        <WhatYouGet />
        <BuiltFor />
      </div>

      <WhyNow />
      <FinalCTA />
      <Footer />
    </div>
  );
}
