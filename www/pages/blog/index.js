/* global preval */
import { Layout } from 'components/Layout'
import Link from 'next/link'

const postFileNames = preval`
  module.exports = require('fs').readdirSync('./pages/blog')
    .filter(post => post !== 'index.js' && post !== 'template.mdx')` || []

const posts = postFileNames.map(post => {
  const slug = post.replace(/\.[^/.]+$/, '')
  const {
    default: Component,
    meta: { id, title, author, date, lead }
  } = require('./' + post)
  return { Component, id, title, author, date, lead, slug }
}).sort((a, b) => b.id - a.id)

const Index = props => (
  <Layout title={'Kadi Hill | Blog'}>
    <div className='container'>
      {posts.map(post => (
        <div className='post' key={post.id}>
          <Link prefetch href={`/blog/${post.slug}`}>
            <a>
              <h1>{post.title}</h1>
            </a>
          </Link>
          <h2>{post.date}</h2>
          <Link prefetch href={`/blog/${post.slug}`}>
            <a>
              <p>{post.lead}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
    <style jsx>{`
      a {
        color: inherit;
        text-decoration: none;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      .post {
        margin-bottom: 1.2em;
        width: 60rem;
      }
      .post h2 {
        font-size: 1em;
        margin: .5em 0 .5em 0;
        font-weight: 200;
        font-style: italic;
      }
      .post p {
        font-size: 1.4em;
      }
    `}</style>
  </Layout>
)

export default Index
