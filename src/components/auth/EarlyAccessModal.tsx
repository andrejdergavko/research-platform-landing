'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import Button from '@/components/Button';

type EarlyAccessModalProps = {
  open: boolean;
  onClose: () => void;
};

const EarlyAccessModal = ({ open, onClose }: EarlyAccessModalProps) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setEmail('');
  }, [open]);

  if (!open) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close early access dialog"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="early-access-title"
        className="relative w-full max-w-[400px] border border-border-gray bg-background p-8 shadow-lg"
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute top-4 right-4 text-text-secondary transition-colors hover:text-text-primary"
          onClick={onClose}
        >
          <X className="size-5" />
        </button>

        <h2
          id="early-access-title"
          className="font-playfair text-[28px] leading-tight text-text-primary"
        >
          Get early access
        </h2>
        <p className="mt-2 text-[14px] text-text-secondary">
          Be among the first to try Vector.
        </p>

        <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] uppercase tracking-[1.2px] text-text-primary">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className="h-11 w-full border border-border-gray bg-background px-3 text-[14px] text-text-primary placeholder:text-text-secondary outline-none transition-colors focus:border-text-primary"
            />
          </label>

          <Button
            type="submit"
            variant="filled"
            className="h-auto w-full py-3 normal-case tracking-normal"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EarlyAccessModal;
