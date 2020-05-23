/* global preval */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const postFileNames = preval`module.exports = require('fs').readdirSync('./src/pages/blog')` || [];

const posts = postFileNames
  .map((post) => {
    const slug = post.replace(/\.[^/.]+$/, '');
    const {
      meta: { postNumber, title, author, pubDate, description },
    } = require('./blog/' + post);
    return { postNumber, title, author, pubDate, description, slug };
  })
  .sort((a, b) => b.postNumber - a.postNumber);

export default () => (
  <>
    <Head>
      <title>Kadi Hill | Blog</title>
    </Head>

    <ul>
      {posts.map((post) => (
        <li key={post.postNumber}>
          <h1>
            <Link href={`blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h1>
          <p className='pubDate'>{post.pubDate}</p>
          <p className='description'>
            {post.description}
            <Link href={`blog/${post.slug}`}>
              <a className='keep-reading'>keep reading &#8594;</a>
            </Link>
          </p>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .keep-reading {
        font-size: 0.75em;
        display: block;
        text-indent: 0;
      }
      ul {
        margin: 0 0 1em 0;
        line-height: 1.5;
        list-style: none;
      }
      li {
        margin: 1em;
      }
      h1 {
        margin-top: 1em;
      }
      a {
        font-weight: 800;
        outline: 0;
        text-decoration: none;
      }
      .pubDate {
        font-style: italic;
        margin-left: 2em;
      }
      .description {
        margin: 1em;
      }
    `}</style>
  </>
);
