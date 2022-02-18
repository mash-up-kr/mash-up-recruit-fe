// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    DESTINATION_URL: string;
    SOURCE_PATH: string;
  }
}
