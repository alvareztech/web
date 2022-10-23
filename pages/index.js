import Head from 'next/head'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'
import Post from '../components/post'
import Project from '../components/project'

export default function Home({ posts, projects }) {
  return (
    <Layout home>
      <Head>
        <title>{`ALVAREZ.tech | Daniel Alvarez | Software Engineer`}</title>
      </Head>

      <div
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div
          className="relative max-w-lg mx-auto lg:max-w-7xl">

          <div className='flex mt-12 px-6'>
            <h2 className='flex-auto text-3xl font-bold tracking-tight text-black dark:text-white'>Projects</h2>
            <Link href="/projects">
              <a className='items-center px-2.5 py-1.5 rounded bg-blue-100 text-colorA hover:bg-blue-200 font-medium'>See more projects</a>
            </Link>
          </div>

          <div className="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {
              projects.map((project) => (
                <Project project={project} key={project.slug} />
              ))
            }
          </div>

          <div className="flex mt-12 px-6">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">Posts</h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {
              posts.map((post) => (
                <Post post={post} key={post.slug} />
              ))
            }
          </div>

        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts('posts')
  const projects = getAllPosts('projects').slice(0, 3)
  return {
    props: {
      posts,
      projects
    }
  }
}
