import Head from 'next/head'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { classNames } from "../lib/util";
import { titleSite } from '../lib/texts'
import Post from '../components/post'

export default function Home({ posts, projects }) {
  return (
    <Layout home>
      <Head>
        <title>{titleSite}</title>
      </Head>

      <div
        className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div
          className="relative max-w-lg mx-auto lg:max-w-7xl">

          <div className='flex mt-12 px-6'>
            <h2 className='flex-auto text-3xl font-bold tracking-tight'>Projects</h2>
            <Link href="/projects">
              <a className='items-center px-2.5 py-1.5 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium'>See more projects</a>
            </Link>
          </div>


          <div className="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {
              projects.map((project) => (
                <div key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-sm font-semibold font-mono text-blue-600 uppercase">
                        {project.category}
                      </p>
                      <Link href={"/projects/" + project.slug}>
                        <a className="mt-2 block">
                          <p className="text-xl font-black font-mono text-gray-900 tracking-tighter">{project.title}</p>
                          <p className="mt-3 text-base text-gray-500">{project.summary}</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>


          <div className="text-left mt-12 px-6">
            <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
          </div>


          <div className="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {
              posts.map((post) => (
                <Post post={post} />
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