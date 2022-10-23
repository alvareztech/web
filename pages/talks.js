import { getAllPosts } from "../lib/posts"
import Layout from "../components/layout"
import Head from "next/head"
import TalkCard from "../components/talk_card";
import Hero from "../components/hero";

export default function Talks({ talks }) {
  return (
    <Layout>
      <Head>
        <title>{`Talks | Daniel Alvarez | ALVAREZ.tech`}</title>
      </Head>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <Hero title={`Talks`} subtitle={`Some tech talks that I have done over the years. Soon I will upload more talks and resources of them. 🙂`} />
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
