import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Kretoss Technology - Top Web & Mobile Application Development Company
        </title>
        <link
          href="/assets/images/mobile-app/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="/assets/images/mobile-app/favicon.png"
          rel="apple-touch-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          content="We are a top Web and Mobile Application Development Company in USA, India provides custom design and developments services in UK, worldwide."
          name="description"
        />
        <meta
          content="Kretoss Technology - Top Web & Mobile Application Development Company"
          property="og:title"
        />
        <meta
          content="We are a top Web and Mobile Application Development Company in USA, India provides custom design and developments services in UK, worldwide."
          property="og:description"
        />
        <meta
          content="/assets/images/mobile-app/favicon.png"
          property="og:image"
        />
        <meta
          content="Kretoss Technology - Top Web & Mobile Application Development Company"
          property="twitter:title"
        />
        <meta
          content="We are a top Web and Mobile Application Development Company in USA, India provides custom design and developments services in UK, worldwide."
          property="twitter:description"
        />
        <meta
          content="/assets/images/mobile-app/favicon.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Unbounded:200,300,regular,500,600,700,800,900%7COnest:200,300,regular,500,600,700,800,900%7CFunnel+Display:300,regular,500,600,700,800"
          media="all"
        ></link>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
