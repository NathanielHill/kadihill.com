import fs from 'fs'
import path from 'path'
import marked from 'marked'

function processMarkdown (markdown) {
  const match = /---\n([\s\S]+?)\n---/.exec(markdown)
  const metadata = {}
  match[1].split('\n').forEach(pair => {
    const colonIndex = pair.indexOf(':')
    metadata[pair.slice(0, colonIndex).trim()] = pair.slice(colonIndex + 1).trim()
  })
  return { content: markdown.slice(match[0].length), metadata }
}

export default function () {
  return fs.readdirSync('posts').map(file => {
    if (path.extname(file) !== '.md') { return null }
    const markdown = fs.readFileSync(`posts/${file}`, 'utf-8')
    const { content, metadata } = processMarkdown(markdown)
    const date = new Date(`${metadata.pubdate} EDT`) // cheeky hack
    metadata.dateString = date.toDateString()
    const renderer = new marked.Renderer()
    const html = marked(content.replace(/^\t+/gm,
      match => match.split('\t').join('  ')), { renderer })
    return { html, metadata, slug: file.replace(/^[\d-]+/, '').replace(/\.md$/, '') }
  }).sort((a, b) => a.metadata.pubdate > b.metadata.pubdate)
}
