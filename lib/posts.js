import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from "mdx-bundler"
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const GithubSlugger = require('github-slugger')
const slugger = new GithubSlugger()

const directory = folder => path.join(process.cwd(), 'data/' + folder)

export function getPostSlugs(folder) {
  let fileNames = fs.readdirSync(directory(folder))
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    };
  });
}

export function getAllPosts(folder) {
  let fileNames = fs.readdirSync(directory(folder), { withFileTypes: true })
  fileNames = fileNames.filter(fileName => fileName.isFile())
  let allPostsData = fileNames.map(fileName => {
    const slug = fileName.name.replace(/\.mdx$/, '')
    const filePath = path.join(directory(folder), fileName.name)
    const file = fs.readFileSync(filePath, 'utf8')
    const matterResult = matter(file)
    return {
      slug,
      ...matterResult.data
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPost(slug, folder) {
  const filePath = path.join(directory(folder), `${slug}.mdx`)

  let fileContent
  try {
    fileContent = fs.readFileSync(filePath, 'utf8')
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found!');
      return null;
    } else {
      throw err;
    }
  }

  const headings = getHeadings(fileContent)

  const remarkPlugins = [remarkGfm]
  const rehypePlugins = [rehypeSlug, rehypePrism]

  const { code, frontmatter } = await bundleMDX({
    source: fileContent,
    xdmOptions(options, frontmatter) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), ...remarkPlugins]
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), ...rehypePlugins]
      return options
    },
  });

  return {
    slug,
    frontmatter,
    code,
    headings
  }
}

// Tags

export function getTags() {
  let posts = getAllPosts('posts')
  let projects = getAllPosts('projects')
  let courses = getAllPosts('courses')
  let talks = getAllPosts('talks')
  const tags = new Set();
  posts.forEach(a => {
    a.tags?.forEach(tag => tags.add(tag))
  })
  projects.forEach(a => {
    a.tags?.forEach(tag => tags.add(tag))
  })
  courses.forEach(a => {
    a.tags?.forEach(tag => tags.add(tag))
  })
  talks.forEach(a => {
    a.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export async function getPostsByTag(tag, folder) {
  let posts = getAllPosts(folder).filter((post) => post.draft !== true)
  posts = posts.filter(post => post.tags?.includes(tag))
  return posts
}

function getHeadings(content) {
  let headings = []
  let raw = content.split("\n");
  for (let heading of raw) {
    if (heading.startsWith("## ")) {
      heading = heading.replace("## ", "");
      headings.push({
        id: slugger.slug(heading),
        name: heading,
        level: 1
      })
    }
    if (heading.startsWith("### ")) {
      heading = heading.replace("### ", "");
      headings.push({
        id: slugger.slug(heading),
        name: heading,
        level: 2
      })
    }
  }
  return headings
}
