import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from "mdx-bundler";

function getDirectory(folder) {
  return path.join(process.cwd(), 'data/' + folder)
}

export function getPostSlugs(folder) {
  let fileNames = fs.readdirSync(getDirectory(folder))
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export function getAllPosts(folder) {
  let fileNames = fs.readdirSync(getDirectory(folder), { withFileTypes: true })
  fileNames = fileNames.filter(fileName => fileName.isFile())
  let allPostsData = fileNames.map(fileName => {
    const slug = fileName.name.replace(/\.mdx$/, '')
    const filePath = path.join(getDirectory(folder), fileName.name)
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
  const filePath = path.join(getDirectory(folder), `${slug}.mdx`)
  const source2 = fs.readFileSync(filePath, 'utf8')

  const remarkPlugins = []
  const rehypePlugins = []

  const { code, frontmatter } = await bundleMDX({
    source: source2,
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
  }
}

// Tags

export function getTags() {
  let posts = getAllPosts('posts')
  const tags = new Set()
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tags.add(tag)
    })
  })
  return Array.from(tags)
}

export async function getPostsByTag(tag) {
  let posts = getAllPosts('posts')
  posts = posts.filter(post => post.tags?.includes(tag))
  return posts
}