import Head from 'next/head';

const HomePage = () => (
  <>
    <Head>
      <title>Kadi Hill | Home</title>
    </Head>
    <h1>Welcome to KadiHill.com</h1>
    <h2>
      Welcome! I want to share everything I&apos;ve learned about pregnancy, birth and parenting that led me to three ecsatic
      homebirths and a wealth of knowledge from the Guna indians whom we have lived with for over two years.
    </h2>
    <h2>More content coming soon.</h2>
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

export default HomePage;
