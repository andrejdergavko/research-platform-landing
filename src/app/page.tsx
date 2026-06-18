import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero/Hero';
import Sources from '@/components/sections/Sources/Sources';
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks';

export default function Home() {
  return (
    <div className="bg-dot-pattern mb-[1000px]">
      <Header />
      <Hero />
      <Sources />
      <HowItWorks />
    </div>
  );
}
