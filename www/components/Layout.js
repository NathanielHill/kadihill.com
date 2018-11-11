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
