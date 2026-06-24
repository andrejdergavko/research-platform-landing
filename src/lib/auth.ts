import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const THIRTY_DAYS_IN_SECONDS = 30 * 24 * 60 * 60;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: THIRTY_DAYS_IN_SECONDS,
  },
  jwt: {
    maxAge: THIRTY_DAYS_IN_SECONDS,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
