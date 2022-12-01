import { Html, Head, Main, NextScript } from "next/document";

// This loads custom HTML links - like custom fonts and anything that would go in HTML head tag.
// except for site title tag.

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="A blog to capture the roving mind" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@700&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tiny.cloud/1/07xjj6wsxo6o246cjml0rvt9rq0u4rnhnre171w9l80jom2g/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
