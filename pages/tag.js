import Layout from "../components/layout";
import { getTags } from "../lib/posts";
import Link from "next/link";
import { getColor } from "../lib/util";
import Head from 'next/head'

export default function Tag({ tags }) {
  return (
    <Layout>
      <Head>
        <title>Tags | ALVAREZ.tech</title>
      </Head>
      <div
        className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-gray-900 sm:text-4xl py-4 font-mono">{tags.length} tags</h2>
        <div className="space-x-2">
          {tags.map(tag => (
            <Link key={tag} href={`/tag/${tag}`}>
              <a>
                <span
                  key={tag}
                  className={`text-white uppercase ${getColor(tag)} inline-flex items-center px-2 my-1 rounded text-xl font-bold font-mono`}>
                  {tag}
                </span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>)
}

export async function getStaticProps() {
  const tags = getTags()
  return {
    props: {
      tags
    }
  }
}
