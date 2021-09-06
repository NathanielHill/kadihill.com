import Head from 'next/head';
import Link from 'next/link';

const Error = () => (
  <>
    <Head>
      <title>Kadi Hill | 404</title>
    </Head>
    <h1>404</h1>
    <p>Looks like there&apos;s nothing here!</p>
    <p>
      Why dont you{' '}
      <Link href='/'>
        <a>start over</a>
      </Link>
      ?
    </p>
    <style jsx>{`
      h1,
      p {
        margin: 0 auto;
      }
      h1 {
        font-size: 2.8em;
        font-weight: 700;
        margin: 0 0 0.5em 0;
      }
      p {
        margin: 1em auto 0 auto;
      }
      @media (min-width: 480px) {
        h1 {
          font-size: 4em;
        }
      }
    `}</style>
  </>
);

export default Error;
