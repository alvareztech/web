import Layout from '../../components/layout'
import { getPostsByTag, getTags } from "../../lib/posts";
import Head from 'next/head';
import { getTitle } from '../../lib/texts';
import Post from '../../components/post';

export default function Tag({ tag, posts }) {
  return (
    <Layout>
      <Head>
        <title>{getTitle(tag.toUpperCase())}</title>
      </Head>
      <div className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <h2 className={'uppercase tracking-tighter font-bold font-mono text-2xl'}>
            {tag}
          </h2>
          <div
            className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <Post post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </div>
    </Layout >
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
