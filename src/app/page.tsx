import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero/Hero';
import Sources from '@/components/sections/Sources/Sources';
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks';
import WhatYouGet from '@/components/sections/WhatYouGet/WhatYouGet';
import Footer from '@/components/layout/Footer';
import FinalCTA from '@/components/sections/FinalCTA/FinalCTA';

export default function Home() {
  return (
    <div className="bg-dot-pattern ">
      <Header />
      <Hero />
      <Sources />
      <HowItWorks />
      <WhatYouGet />
      <FinalCTA />
      <Footer />
    </div>
  );
}
