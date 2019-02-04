import getPosts from './_posts.js'

export function get (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(getPosts().map(post => ({
    slug: post.metadata.slug,
    title: post.metadata.title,
    pubDate: post.metadata.pubDate,
    description: post.metadata.description
  }))))
}
