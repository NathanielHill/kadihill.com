import Head from 'next/head';
import React from 'react';
import ReadingProgress from 'components/ReadingProgress';

export default function BlogPostLayout({ title, children }) {
    return (
        <>
            <Head>
                <title>Kadi Hill | {title}</title>
                {/* <meta name="description" content={`Read more about ${post.title} on ${site.title}`} /> */}
            </Head>
            <ReadingProgress />
            <h1>{title}</h1>
            <div className='blog-content'>{children}</div>
            <style jsx>{`
            h1 {
                font-weight: 800;
                margin: 0.3em 0 1em 0;
            }
        `}</style>
        </>
    )
}
