import Layout from '../../components/layout'
import { getPostsByTag, getTags } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { classNames } from "../../lib/util";
import Head from 'next/head';

export default function Tag({ tag, posts }) {
  return (
    <Layout>
      <Head>
        <title>{tag.toUpperCase()} - ALVAREZ.tech</title>
      </Head>
      <div
        className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div
          className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2
              className={classNames('text-white', "uppercase", getColor(tag), 'inline-flex items-center px-2 rounded text-xl font-bold')}>{tag}</h2>
          </div>

          <div
            className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.slug}>
                {post.youtubeId &&
                  <Link href={"/" + post.slug}>
                    <img className='mb-2 drop-shadow-md rounded-lg h-48 w-full object-cover' src={'https://img.youtube.com/vi/' + post.youtubeId + '/mqdefault.jpg'} />
                  </Link>
                }
                <div>
                  <Link href={"/tag/" + post.tags?.[0]}>
                    <a className="inline-block">
                      <span
                        className={classNames('text-white', "uppercase", getColor(post.tags?.[0]), 'inline-flex items-center px-2 rounded text-sm font-bold')}
                      >
                        {post.tags?.[0]}
                      </span>
                    </a>
                  </Link>
                </div>
                <Link href={"/" + post.slug}>
                  <a className="block mt-4">
                    <p
                      className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.summary}</p>
                  </a>
                </Link>
                {post.tags?.slice(1).map(tag => (
                  <span
                    key={tag}
                    className="uppercase inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 mr-1">
                    {tag}
                  </span>
                ))}
                <div className="mt-6 flex items-center">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <Date dateString={post.date} />
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export async function getStaticPaths() {
  const tags = getTags()
  const paths = tags.map(tag => "/tag/" + tag)
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  const tag = params.slug
  const posts = await getPostsByTag(tag)
  return {
    props: {
      tag,
      posts
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
