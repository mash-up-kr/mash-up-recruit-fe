import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { applicantApiService } from '@/api/services';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      const {
        data: { accessToken },
      } = await applicantApiService.signIn({ googleIdToken: token.googleIdToken! });

      // eslint-disable-next-line no-param-reassign
      session.accessToken = accessToken;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        // eslint-disable-next-line no-param-reassign
        token.googleIdToken = account.id_token;
      }
      return token;
    },
  },
});
