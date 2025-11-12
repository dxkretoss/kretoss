import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
