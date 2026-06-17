import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero/Hero';
import Sources from '@/components/sections/Sources/Sources';

export default function Home() {
  return (
    <div className="bg-dot-pattern">
      <Header />
      <Hero />
      <Sources />
    </div>
  );
}
