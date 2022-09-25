import Layout from '../components/layout'
import { getPost, getPostSlugs } from '../lib/posts'
import Head from 'next/head'
import GitHub from "../components/github";
import YouTube from '../components/youtube';
import MDXComponent from "../components/mdxComponents";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import Link from 'next/link';
import Slideshare from "../components/slideshare";
import SpeakerDeck from "../components/speakerdeck";
import Slides from "../components/slides";
import Comments from '../components/comments';

const components = { GitHub, YouTube, Slideshare, SpeakerDeck, Slides, ...MDXComponent }
const editUrl = (slug) => `https://github.com/alvareztech/web/edit/main/data/posts/${slug}.mdx`;

export default function Post({ post }) {
  const Component = useMemo(() => getMDXComponent(post.code), [post.code]);
  return (<Layout>
    <Head>
      <title>{post.frontmatter.title}</title>
      <meta name="description" content={post.frontmatter.summary} />

      <meta property="og:title" content={post.frontmatter.title} />
      <meta property="og:description" content={post.frontmatter.summary} />
      <meta property="og:url" content={"https://alvarez.tech/" + post.slug} />
      <meta property='og:type' content='article' />
      <meta property="article:publisher" content="https://alvarez.tech" />
      <meta property="article:author" content="https://alvarez.tech" />
      {post.frontmatter.tags?.map(tag => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      <meta name='twitter:title' content={post.frontmatter.title} />
      <meta name='twitter:description' content={post.frontmatter.summary} />
      <meta name='twitter:url' content={"https://alvarez.tech/" + post.slug} />
    </Head>

    <div className="relative py-16 bg-white overflow-hidden">
      <div
        className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                  fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                  fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                  fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <article className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <Link href={"/tag/" + post.frontmatter.tags?.[0]}>
              <span
                className="block text-base text-center text-blue-600 font-semibold font-mono tracking-wide uppercase">
                {post.frontmatter.tags?.[0]}
              </span>
            </Link>
            <span
              className="mt-2 block text-3xl text-center leading-8 font-bold font-mono tracking-tighter text-gray-900 sm:text-4xl">
              {post.frontmatter.title}
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            {post.frontmatter.summary}
          </p>

          <div className="content">
            <Component components={components} />
          </div>

          <div className="flex items-start justify-center mt-14 w-full">
            <div className="space-x-2 flex-1 -mt-0.5">
              {post.frontmatter.tags?.map(tag => (
                <Link href={`/tag/${tag}`} key={tag}>
                  <a className="tag">{tag}</a>
                </Link>
              ))}
            </div>
            <div
              className="ml-4 text-sm text-gray-500 dark:text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300">
              <a
                href={editUrl(post.slug)}
                target="_blank"
                rel="noreferrer"
              >
                {'Edit on Github'}
              </a>
            </div>
          </div>
          <Comments />
        </div>

      </article>
    </div>

  </Layout>)
}

export async function getStaticPaths() {
  const postsPaths = getPostSlugs('posts')
  const pagesPaths = getPostSlugs('pages')
  const paths = postsPaths.concat(pagesPaths)
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug, 'posts')
  return {
    props: {
      post
    }
  }
}
