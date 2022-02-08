import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { classNames, tagColor } from "../lib/util";

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="bg-gray-50">
        <div
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Hi! I am Daniel </span>
            <span
              className="block text-blue-600">Here I share everything I do. Tutorials, code and more.</span>
          </h2>
        </div>
      </section>

      <div
        className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div
          className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2
              className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Recent publications
            </h2>
          </div>
          <div
            className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map(({ slug, date, title, tags, language, summary }) => (
              <div key={slug}>
                <div>
                  <Link href={"/tag/" + tags?.[0]}>
                    <a className="inline-block">
                      <span
                        className={classNames("uppercase", "bg-blue-100 text-blue-800", 'inline-flex items-center px-2 rounded text-sm font-bold')}
                      >
                        {tags?.[0]}
                      </span>
                    </a>
                  </Link>
                </div>
                <Link href={"/" + slug}>
                  <a className="block mt-4">
                    <p className="text-xl font-semibold text-gray-900">{title}</p>
                    <p className="mt-3 text-base text-gray-500">{summary}</p>
                  </a>
                </Link>
                {tags?.slice(1).map(tag => (
                  <span
                    key={tag}
                    className="uppercase inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 mr-1">
                    {tag}
                  </span>
                ))}
                <div className="mt-6 flex items-center">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <Date dateString={date} />
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts('posts')
  return {
    props: {
      posts
    }
  }
}
