import { getAllPosts } from "../lib/posts"
import Layout from "../components/layout"
import Link from "next/link"
import Head from "next/head"
import { getTitle, subtitleTalks, titleTalks } from "../lib/texts";
import Date from "../components/date";
import TalkCard from "../components/talk_card";

export default function Talks({ talks }) {
  return (
    <Layout>
      <Head>
        <title>{getTitle(titleTalks)}</title>
      </Head>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{titleTalks}</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {subtitleTalks}
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

            {talks.map((talk) => (
              <TalkCard talk={talk} key={talk.slug} />
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
