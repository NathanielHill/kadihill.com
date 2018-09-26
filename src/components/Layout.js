import Head from 'next/head'

export const Layout = ({ children, title = 'Kadi Hill' }) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Kadi Hill' />
      <title>{title}</title>
      <link rel='stylesheet' href='static/app.css' />
    </Head>
    {children}
  </div>
)
