import Head from 'next/head';
import type { AppProps } from 'next/app';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const KadiHillApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Kadi Hill' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <meta name='msapplication-square150x150logo' content='/icons/ms-icon-150x150.png' />
      <meta name='msapplication-square310x310logo' content='/icons/ms-icon-310x310.png' />
      <meta name='msapplication-square70x70logo' content='/icons/ms-icon-70x70.png' />
      <meta name='theme-color' content='#fdede7' />
      <link rel='apple-touch-icon' href='/icons/apple-icon.png' />
      <link rel='icon' type='image/png' href='/favicon.png' />
      <link rel='icon' sizes='192x192' href='/icons/icon-192x192.png' />
      <link rel='manifest' href='/manifest.json' />
      <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet' />
      <title>Kadi Hill</title>
    </Head>
    <Nav />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      html,
      body {
        width: 100vw;
        min-height: 100vh;
        overscroll-behavior: contain;
        font-size: 2vmin;
        font-family: 'Comfortaa', Verdana, Geneva, sans-serif;
        overflow-x: hidden;
      }
      body {
        background-color: rgb(253, 237, 231);
        background-image: linear-gradient(-15deg, rgb(248, 198, 178), rgb(253, 237, 231));
        font-size: 14px;
        line-height: 1.5;
        color: #333;
      }
      #__next {
        display: flex;
        width: 100vw;
        min-height: 100vh;
        flex-direction: column;
        margin: 0 auto;
        max-width: 90rem;
      }
      main {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        padding: 2em;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 1em 0;
        font-weight: 400;
        line-height: 1.2;
      }
      h1 {
        font-size: 2em;
      }

      a {
        color: inherit;
      }
      p {
        line-height: 2;
        margin: 2em 0 0 0;
        text-indent: 1em;
      }
      p:first-child {
        margin: 0em 0 0 0;
      }
      code {
        font-family: menlo, inconsolata, monospace;
        font-size: calc(1em - 2px);
        color: #555;
        background-color: #f0f0f0;
        padding: 0.2em 0.4em;
        border-radius: 2px;
      }
      .blog-content h2 {
        font-size: 1.4em;
        font-weight: 500;
      }
      .blog-content ul {
        margin: 2em 0 0 0;
        line-height: 1.5;
      }
      .blog-content li {
        margin: 0 0 0.5em 2em;
      }
      @media (min-width: 600px) {
        body {
          font-size: 16px;
        }
      }
      @media (min-width: 900px) {
        body {
          font-size: 20px;
        }
        main {
          padding: 2em 3em;
        }
      }
      @media (min-width: 1200px) {
        body {
          font-size: 24px;
        }
        #sapper {
          max-width: 70rem;
        }
        main {
          padding: 2em 4em;
        }
      }
    `}</style>
  </>
);

export default KadiHillApp;
