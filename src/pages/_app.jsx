
"use client "
  import Head from "next/head";  


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head> 
        <title>Momentos</title>
        <meta name="description" content="Enjoy our authentic and warm atmosphere for an unforgettable tasting experience in true Portuguese tradition." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;





