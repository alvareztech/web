import Layout from '../../components/layout'
import { getPostsByTag, getTags } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { classNames } from "../../lib/util";
import Head from 'next/head';
import { getTitle } from '../../lib/texts';
import Post from '../../components/post';

export default function Tag({ tag, posts }) {
  return (
    <Layout>
      <Head>
        <title>{getTitle(tag.toUpperCase())}</title>
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
              <Post post={post} />
            ))}
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
