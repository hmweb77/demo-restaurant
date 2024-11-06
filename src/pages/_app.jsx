
"use client "
  import Head from "next/head";  


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head> 
        <title>SaFlyPourMoi</title>
        <meta name="description" content="safly blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;





