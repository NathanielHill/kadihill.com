import { Layout } from 'components/Layout'
import Twemoji from 'react-twemoji'

export const BlogLayout = ({ children, title }) => (
  <Layout title={'Kadi Hill | ' + title}>
    <Twemoji className='post' options={{
      className: 'emoji',
      folder: 'png/64',
      ext: '.png',
      base: 'https://cdn.jsdelivr.net/emojione/assets/4.0/'
    }}>
      {children}
    </Twemoji>
    <style jsx global>{`
      .post {
        display: flex;
        flex-direction: column;
        font-size: 1.4em;
        width: 60rem;
      }
      .emoji {
        display: inline-block;
        height: 1.4em;
        vertical-align: middle;
        position: relative;
        bottom: .05em;
        border-radius: 0;
      }
      h1 {
        color: black;
      }
      p {
        margin: 0.5em 0 0.5em 0;
      }
      p::first-letter {
        font-size: 1.2em;
      }
      blockquote {
        background: lightgrey;
        border-radius: 1em;
        margin: 0.5em;
        padding: 0.5em;
        font-style: italic;
        color: darkgrey;
      }
      img {
        display: block;
        border-radius: 1em;
        max-width: 40em;
        margin: 0 auto;
      }
    `}</style>
  </Layout>
)
