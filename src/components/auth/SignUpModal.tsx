'use client';

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { X } from 'lucide-react';

import Button from '@/components/Button';

type SignUpModalProps = {
  open: boolean;
  onClose: () => void;
};

const GoogleIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="size-4 shrink-0">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const SignUpModal = ({ open, onClose }: SignUpModalProps) => {
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

  if (!open) return null;

  const handleGoogleSignUp = () => {
    void signIn('google', { callbackUrl: window.location.href });
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close sign up dialog"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sign-up-title"
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
          id="sign-up-title"
          className="font-playfair text-[28px] leading-tight text-text-primary"
        >
          Sign up
        </h2>
        <p className="mt-2 text-[14px] text-text-secondary">
          Create your account to get started with Vector.
        </p>

        <Button
          variant="outline"
          className="mt-8 flex h-auto w-full items-center justify-center gap-3 py-3 normal-case tracking-normal"
          onClick={handleGoogleSignUp}
        >
          <GoogleIcon />
          Sign up with Google
        </Button>
      </div>
    </div>
  );
};

export default SignUpModal;
