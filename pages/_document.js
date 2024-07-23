import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#002366" />
        <meta name="description" content="Bhagavad Gita Shloks." />
        <meta name="author" content="Sacred verses of the Bhagavad Gita." />
        <meta name="keywords" content="Bhagavad, Gita" />

        <meta property="og:title" content="Bhagavad Gita Shlok" />
        <meta property="og:description" content="Sacred verses of the Bhagavad Gita." />
        <meta property="og:image" content="https://bhagavad.pages.dev/header.jpg" />
        <meta property="og:url" content="https://bhagavad.pages.dev" />
        <meta property="og:site_name" content="Bhagavad Gita Shloks" />

        <link rel="canonical" href="https://bhagavad.pages.dev" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}