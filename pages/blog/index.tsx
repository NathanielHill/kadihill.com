import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
      posts: [{
        postNumber: 1,
        published: true,
        slug: 'being-born',
        title: 'Being Born',
        author: 'Kadi Hill',
        pubDate: 'October 14th, 2018',
        tags: [],
        description:
          'With my first pregnancy, I had this strange experience where I believed I would have this magical, transcendent birth but also that I would die.',
      }, {
        postNumber: 2,
        published: true,
        slug: 'learning-to-mother-in-a-bamboo-hut',
        title: 'Learning to Mother in a Bamboo Hut',
        author: 'Kadi Hill',
        pubDate: 'February 4th, 2019',
        tags: [],
        description:
          'To truly understand my birth story, my parenting journey, and where my opinions and views come from you have to understand this part of my journey.',
      }, {
        postNumber: 3,
        published: true,
        slug: 'giving-birth',
        title: 'Giving Birth',
        author: 'Kadi Hill',
        pubDate: 'February 5th, 2019',
        tags: [],
        description:
          'At 35 weeks pregnant I was sleeping in a camping hammock on a very beautiful, yet very primitive island.',
      }]
    },
    revalidate: 10,
  };
}

export default function BlogIndexPage({ posts = [], preview }) {
  return (
    <>
      <Head>
        <title>Kadi Hill | Blog</title>
      </Head>
      {preview && (
        <div>
          <div>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <ul>
        {posts.length === 0 && <p>There are no posts yet</p>}
        {posts.map((post) => (
          <li key={post.slug}>
            <h1>
              <Link href='/blog/[slug]' as={`/blog/${post.slug}`}>
                {!post.published ? <span>Draft</span> : <a>{post.Page}</a>}
              </Link>
            </h1>
            {post.pubDate && <p className='pubDate'>{post.pubDate}</p>}
            <p className='description'>
              {(!post.description || post.description.length === 0) && 'No preview available'}
              {post.description ? <p>{post.description}</p> : null}
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
