// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  export interface ProcessEnv {
    BASE_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
    NEXT_PUBLIC_CHANNEL_PLUGIN: string;
    DESTINATION_URL: string;
    SOURCE_PATH: string;
    ADMIN_DESTINATION_PATH: string;
    ADMIN_TOKEN: string;
  }
}
