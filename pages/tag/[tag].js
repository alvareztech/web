import Layout from '../../components/layout'
import {getPostsByTag, getTags} from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import {classNames, tagColor} from "../../lib/util";

export default function Tag({tag, posts}) {
  return (
    <Layout>

      <div
        className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div
          className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2
              className={classNames("uppercase", tag, 'inline-flex items-center px-2 rounded text-xl font-bold')}>{tag}</h2>
          </div>

          <div
            className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map(({slug, date, title, tags, language, summary}) => (
              <div key={slug}>
                <div>
                  <Link href={"/tag/" + tags?.[0]}>
                    <a className="inline-block">
                    <span
                      className={classNames("uppercase", tagColor(tags?.[0]), 'inline-flex items-center px-2 rounded text-sm font-bold')}
                    >
                      {tags?.[0]}
                    </span>
                    </a>
                  </Link>
                </div>
                <Link href={"/" + slug}>
                  <a className="block mt-4">
                    <p
                      className="text-xl font-semibold text-gray-900">{title}</p>
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
                    <Date dateString={date}/>
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
  const paths = tags.map(tag => "/tag/" + tag.name)
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({params}) {
  const tagName = params.tag
  const posts = await getPostsByTag(tagName)
  return {
    props: {
      tagName,
      posts
    }
  }
}
