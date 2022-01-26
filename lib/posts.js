import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {serialize} from "next-mdx-remote/serialize";

const postsDirectory = path.join(process.cwd(), 'data/posts')

export function getAllPosts() {
  let fileNames = fs.readdirSync(postsDirectory, {withFileTypes: true})
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

export function getPostsByTag(tag) {
  let posts = getAllPosts()
  posts = posts.filter(post => post.tags.includes(tag))
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
  const file = fs.readFileSync(filePath, 'utf8')
  const matterResult = matter(file)
  const content = await serialize(matterResult.content)
  return {
    slug,
    content,
    ...matterResult.data
  }
}
