import fs from "fs";
import { getPostSlugs, getTags } from "../../lib/posts";

export default function handler(req, res) {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')

  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://alvarez.tech",
  }[process.env.NODE_ENV];

  // const staticPages = fs.readdirSync({
  //   development: 'pages',
  //   production: './',
  // }[process.env.NODE_ENV], {withFileTypes: true})
  //   .filter(fileName => fileName.isFile())
  //   .filter((staticPage) => {
  //     return ![
  //       "_app.js",
  //       "_document.js",
  //       "_error.js",
  //       "[slug].js",
  //       "404.js",
  //       "index.js",
  //       "tag.js",
  //     ].includes(staticPage.name);
  //   })
  //   .map((staticPagePath) => {
  //     return `${baseUrl}/${staticPagePath.name.replace('.js', '')}`;
  //   });

  const staticPages = [
    `${baseUrl}/contact`,
    `${baseUrl}/social`,
    `${baseUrl}/talks`,
    `${baseUrl}/courses`,
    `${baseUrl}/projects`,
  ]

  const pages = getPostSlugs('pages')
  const pagesPaths = pages.map((page) => `${baseUrl}/${page.params.slug}`);

  const posts = getPostSlugs('posts')
  const postPaths = posts.map((post) => `${baseUrl}/${post.params.slug}`);

  const projects = getPostSlugs('projects')
  const projectPaths = projects.map((project) => `${baseUrl}/projects/${project.params.slug}`);

  const talks = getPostSlugs('talks')
  const talksPaths = talks.map((talk) => `${baseUrl}/talks/${talk.params.slug}`);

  const tags = getTags()
  const tagPaths = tags.map(tag => `${baseUrl}/tag/${tag}`)

  const allPaths = [...staticPages, ...pagesPaths, ...postPaths, ...projectPaths, ...talksPaths, ...tagPaths];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths.map((url) => {
    return `<url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>`;
  }).join("")}
    </urlset>`

  res.end(xml)
}
