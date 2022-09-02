import Head from 'next/head'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { classNames } from "../lib/util";
import { titleSite } from '../lib/texts'

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
                <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">

                  {post.youtubeId &&
                    <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={'https://img.youtube.com/vi/' + post.youtubeId + '/mqdefault.jpg'} alt={post.title} />
                    </div>
                  }

                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <Link href={"/tag/" + post.tags?.[0]}>
                        <a className="inline-block">
                          <span
                            className={classNames("text-white", "uppercase", getColor(post.tags?.[0]), 'inline-flex items-center px-2 rounded text-sm font-semibold font-mono')}>
                            {post.tags?.[0]}
                          </span>
                        </a>
                      </Link>
                      <Link href={post.slug}>
                        <a className="mt-2 block">
                          <p className="text-xl font-black font-mono tracking-tighter text-gray-900">{post.title}</p>
                          <p className="mt-3 text-base text-gray-500">{post.summary}</p>
                        </a>
                      </Link>

                      <div className="mt-4 flex items-center">
                        {post.tags?.slice(1).map(tag => (
                          <span
                            key={tag}
                            className="uppercase inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-gray-100 text-gray-800 mr-1">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center">
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <Date dateString={post.date} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

function getColor(tag) {
  switch (tag) {
    case "android":
    case "androidx":
    case "espresso":
    case "retrofit":
      return "bg-green-500"
    case "ios":
    case "facebook":
      return "bg-blue-500"
    case "angular":
    case "java":
    case "javafx":
      return "bg-red-500"
    case "kotlin":
      return "bg-purple-500"
    case "firebase":
      return "bg-yellow-500"
    case "swift":
      return "bg-orange-500"
  }
  return "bg-gray-500"
}
