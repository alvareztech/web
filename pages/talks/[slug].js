import Layout from '../../components/layout';
import { getPostSlugs, getPost } from '../../lib/posts';
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponent from '../../components/mdxComponents';
import GitHub from '../../components/github';
import { useMemo } from "react";
import Head from 'next/head';
import Slideshare from "../../components/slideshare";
import SpeakerDeck from "../../components/speakerdeck";
import Slides from "../../components/slides";

const components = { GitHub, Slideshare, SpeakerDeck, Slides, ...MDXComponent }

export default function Talk({ talk }) {
  const Component = useMemo(() => getMDXComponent(talk.code), talk.code);
  return (
    <Layout>
      <Head>
        <title>{talk.frontmatter.title}</title>
      </Head>
      <div
        className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2
                className="leading-6 text-colorA dark:text-colorAD font-bold tracking-tighter font-mono uppercase">{talk.frontmatter.tags?.[0]}</h2>
              <p
                className="mt-2 text-3xl leading-8 font-bold dark:text-white sm:text-4xl font-mono tracking-tighter">
                {talk.frontmatter.title}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div
                  className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <div className="content">
                    <Component components={components} />
                  </div>
                </div>
                <div
                  className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPostSlugs('talks')
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  const talk = await getPost(params.slug, 'talks')
  return {
    props: {
      talk
    }
  }
}
