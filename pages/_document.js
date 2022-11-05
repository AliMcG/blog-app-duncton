import { Html, Head, Main, NextScript } from 'next/document'

// This loads custom HTML links - like custom fonts

export default function Document() {
  return (
    <Html>
      <Head>
      {/* <title>Harry Duncton</title> */} 
        <meta name="description" content="A blog to capture the roving mind" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}