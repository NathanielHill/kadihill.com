import Head from 'next/head';
import Link from 'next/link';

const Error = ({ statusCode }) => (
  <>
    <Head>
      <title>`Kadi Hill | ${statusCode}`</title>
    </Head>
    <h1>{statusCode}</h1>
    <p>Looks like there's been an error!</p>
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500;
  return { statusCode };
};

export default Error;
