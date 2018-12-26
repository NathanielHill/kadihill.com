import getPosts from './_posts.js'

export function get (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(getPosts().map(post => ({
    slug: post.slug,
    title: post.metadata.title,
    pubdate: post.metadata.pubdate,
    description: post.metadata.description
  }))))
}
