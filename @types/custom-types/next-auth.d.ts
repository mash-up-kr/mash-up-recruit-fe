import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  export interface Session {
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  export interface JWT {
    accessToken?: string;
  }
}
