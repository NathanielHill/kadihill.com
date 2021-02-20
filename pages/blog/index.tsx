import Link from 'next/link';
import Head from 'next/head';

import blogStyles from '@/styles/blog.module.css';

import { getBlogLink, getDateStr, postIsPublished } from '@/lib/blog-helpers';
import { textBlock } from '@/lib/notion/renderers';
import getNotionUsers from '@/lib/notion/getNotionUsers';
import getBlogIndex from '@/lib/notion/getBlogIndex';

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex();

  const authorsToGet: Set<string> = new Set();
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug];
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null;
      }
      post.Authors = post.Authors || [];
      for (const author of post.Authors) {
        authorsToGet.add(author);
      }
      return post;
    })
    .filter(Boolean)
    .sort((a, b) => b.Date - a.Date);

  const { users } = await getNotionUsers([...authorsToGet]);

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name);
  });

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  };
}

const BlogIndexPage = ({ posts = [], preview }) => {
  return (
    <>
      <Head>
        <title>Kadi Hill | Blog</title>
      </Head>
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <ul>
        {posts.length === 0 && <p>There are no posts yet</p>}
        {posts.map((post) => (
          <li key={post.Slug}>
            <h1>
              <Link href='/blog/[slug]' as={getBlogLink(post.Slug)}>
                {!post.Published ? <span>Draft</span> : <a>{post.Page}</a>}
              </Link>
            </h1>
            {post.Date && <p className='pubDate'>{getDateStr(post.Date)}</p>}
            <p className='description'>
              {(!post.preview || post.preview.length === 0) && 'No preview available'}
              {(post.preview || []).map((block, idx) => textBlock(block, true, `${post.Slug}${idx}`))}
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
};

export default BlogIndexPage;
