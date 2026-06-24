'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import Dot from '@/components/Dot';
import EarlyAccessModal from '@/components/auth/EarlyAccessModal';
import NoizeBG from '../NoizeBG';

const FinalCTA = () => {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  return (
    <>
      <NoizeBG>
        <div className="py-40 flex flex-col items-center justify-center gap-2">
          <h3 className="text-small-uppercase flex items-center gap-3 text-white font-medium">
            <Dot />
            The world is changing faster than ever.
          </h3>

          <h1 className="flex flex-col gap-4 text-center text-title-sense text-[60px] text-white leading-[33.05px]">
            Understand what’s happening before it becomes obvious.
          </h1>

          <Button
            variant="filled"
            className="h-[52px] mt-10 bg-white !text-black"
            data-analytics="cta-click"
            onClick={() => setIsEarlyAccessOpen(true)}
          >
            Get early access <span className="text-[14px]">→</span>
          </Button>
        </div>
      </NoizeBG>

      <EarlyAccessModal
        open={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </>
  );
};

export default FinalCTA;
