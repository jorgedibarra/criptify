/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import "../public/assets/styles/style.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {"Cifrado"}
        </title>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Encrypt and Decrypt files securely in your browser."
        />
        <meta
          name="Keywords"
          content="encrypt decrypt encryption file-encryption javascript client-side serverless decryption xchcha20 argon2id encryption-decryption webcrypto crypto browser in-browser"
        />
        <meta
          name="theme-color"
          content="#fafafa"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1c1c1c"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
