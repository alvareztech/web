import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from "mdx-bundler";
import { tagColor } from './util';

const postsDirectory = path.join(process.cwd(), 'data/posts')
const coursesDirectory = path.join(process.cwd(), 'data/courses')
const pagesDirectory = path.join(process.cwd(), 'data/pages')

export function getAllPosts() {
  let fileNames = fs.readdirSync(postsDirectory, { withFileTypes: true })
  fileNames = fileNames.filter(fileName => fileName.isFile())
  let allPostsData = fileNames.map(fileName => {
    const slug = fileName.name.replace(/\.mdx$/, '')
    const filePath = path.join(postsDirectory, fileName.name)
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

export async function getPostsByTag(tag) {
  let posts = getAllPosts()
  posts = posts.filter(post => post.tags?.includes(tag))
  return posts
}

export function getPostSlugs() {
  let fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export function getTags() {
  let posts = getAllPosts()
  const tags = new Set()
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tags.add(tag)
    })
  })
  return Array.from(tags)
}

export async function getPost(slug) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)
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

export function getAllCourses() {
  let fileNames = fs.readdirSync(coursesDirectory, { withFileTypes: true })
  fileNames = fileNames.filter(fileName => fileName.isFile())
  let allPostsData = fileNames.map(fileName => {
    const slug = fileName.name.replace(/\.mdx$/, '')
    const filePath = path.join(coursesDirectory, fileName.name)
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

export async function getCourse(slug) {
  const filePath = path.join(coursesDirectory, `${slug}.mdx`)
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

export function getCourseSlugs() {
  let fileNames = fs.readdirSync(coursesDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}