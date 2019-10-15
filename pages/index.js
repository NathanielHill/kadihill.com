import Head from 'next/head';
import React from 'react';

export default () => (
  <>
    <Head>
      <title>Kadi Hill | Home</title>
    </Head>
    <h1>Welcome to KadiHill.com</h1>
    <h2>Currently growing a baby and this website!</h2>
    <h2>More content (and a baby) coming soon.</h2>
    <style jsx>{`
      h1 {
        text-align: center;
        font-size: 2.8em;
        margin: 0 0 0.5em 0;
      }
      @media (min-width: 480px) {
        h1 {
          font-size: 4em;
        }
      }
    `}</style>
  </>
);
