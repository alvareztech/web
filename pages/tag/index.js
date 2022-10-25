import Layout from "../../components/layout";
import { getTags } from "../../lib/posts";
import Link from "next/link";
import { getColor } from "../../lib/util";
import Head from 'next/head'
import Hero from "../../components/hero";

export default function Tag({ tags }) {
  return (
    <Layout>
      <Head>
        <title>Tags | ALVAREZ.tech</title>
      </Head>
      <div
        className="w-full">

        <Hero title={`Tags`} subtitle={`${tags.length}`} />

        <div className="space-x-2 p-8 text-center">

          {tags.map(tag => (
            <Link key={tag} href={`/tag/${tag}`}>

              <span
                key={tag}
                className={`text-white uppercase ${getColor(tag)} inline-flex items-center px-1 my-1 rounded text-xl font-bold font-mono hover:opacity-60`}>
                {tag}
              </span>

            </Link>
          ))}

        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const tags = getTags()
  return {
    props: {
      tags
    }
  }
}
