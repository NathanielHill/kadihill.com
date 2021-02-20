import Head from 'next/head';

const Contact = () => (
  <>
    <Head>
      <title>Kadi Hill | Contact</title>
    </Head>
    <h1>Contact Me</h1>
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

export default Contact;
