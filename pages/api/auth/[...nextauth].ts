import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { applicantApiService } from '@/api/services';
import { ERROR_PAGE } from '@/constants';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    error: ERROR_PAGE,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (token.accessToken) {
        return { ...session, accessToken: token.accessToken };
      }

      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        const {
          data: { accessToken },
        } = await applicantApiService.signIn({ googleIdToken: account.id_token! });
        // eslint-disable-next-line no-param-reassign
        token.accessToken = accessToken;
      }
      return token;
    },
  },
});
