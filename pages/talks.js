import { getAllPosts } from "../lib/posts"
import Layout from "../components/layout"
import Link from "next/link"
import Head from "next/head"
import { classNames } from "../lib/util";

export default function Talks({ talks }) {
  return (
    <Layout>
      <Head>
        <title>Talks - ALVAREZ.tech</title>
      </Head>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Talks</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Some tech talks that I have done over the years. Soon I will upload more talks and resources of them. 🙂
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {talks.map((talk) => (
              <div key={talk.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">
                      <Link href={"/talks/" + talk.slug}>
                        <a className="hover:underline">
                          <span className="uppercase">{talk.category}</span>
                        </a>
                      </Link>
                    </p>
                    <Link href={"/talks/" + talk.slug}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{talk.title}</p>
                        <p className="mt-3 text-base text-gray-500">{talk.summary}</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const talks = getAllPosts('talks')
  return {
    props: {
      talks
    }
  }
}
