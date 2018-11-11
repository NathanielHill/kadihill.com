import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import Head from 'next/head'

export const Layout = ({ children, title = 'Kadi Hill' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      html, body {
        width: 100vw;
        min-height: 100vh;
        overscroll-behavior: contain;
        font-size: 2vmin;
        font-family: Verdana, Geneva, sans-serif;
        overflow-x: hidden;
      }
      body {
        background-color: rgb(168, 245, 206);
        background-image: linear-gradient(-15deg, rgb(248, 198, 178), rgb(253, 237, 231));
      }
    `}</style>
    <style jsx>{`
      div {
        display: flex;
        width: 100vw;
        min-height: 100vh;
        flex-direction: column;
      }
      main {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: 3rem;
        align-items: center;
        width: 60rem;
      }
    `}</style>
  </div>
)
