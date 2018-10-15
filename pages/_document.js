import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render = () => (
    <html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Kadi Hill' />
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}
