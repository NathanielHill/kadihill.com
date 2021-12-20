import Link from 'next/link';
import Head from 'next/head';

import dayjs from 'dayjs';
import parse, { domToReact } from 'html-react-parser';

import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';

export default function BlogIndexPage({ posts }) {
  function renderCleanExcerpt(post) {
    if (!post.excerpt || post.excerpt.length === 0) {
      return <p>No preview available</p>;
    }
    return parse(post.excerpt, {
      replace: ({ attribs }) => attribs && attribs.class === 'more-link' && <>{domToReact({})}</>,
    });
  }

  return (
    <>
      <Head>
        <title>Kadi Hill | Blog</title>
      </Head>
      <ul>
        {posts.length === 0 && <p>There are no posts yet</p>}
        {posts
          .sort((a, b) => dayjs(b).valueOf() - dayjs(a).valueOf())
          .map((post) => (
            <li key={post.slug}>
              <h1>
                <Link href='/blog/[slug]' as={post.path}>
                  <a>{post.title}</a>
                </Link>
              </h1>
              {post.date && <p className='pubDate'>{dayjs(post.date).format('MMMM D, YYYY')}</p>}
              <div className='description'>
                {renderCleanExcerpt(post)}
                <div className='keep-reading-container'>
                  <Link href='/blog/[slug]' as={post.path}>
                    <a className='keep-reading'>keep reading &#8594;</a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <style jsx>{`
        .keep-reading-container {
          display: flex;
          justify-content: flex-end;
          margin-top: -0.2em;
        }
        .keep-reading {
          font-size: 0.75em;
          display: block;
          padding-right: 0.75em;
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
}

export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        posts(first: 10000) {
          edges {
            node {
              databaseId
              slug
              date
              modified
              author {
                node {
                  id
                  name
                }
              }
              title
              excerpt
            }
          }
        }
      }
    `,
  });

  const posts = data?.data.posts.edges
    .map(({ node }) => node)
    .map((post) => {
      return {
        ...post,
        path: `/blog/${post.slug}`,
      };
    });

  return {
    props: {
      posts,
    },
  };
}
