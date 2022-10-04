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

export default function Post({ post, isPage }) {

  const Content = useMemo(() => getMDXComponent(post.code), [post.code]);

  return (<Layout>
    <Head>
      <title>{post.frontmatter.title}</title>
      <meta name="description" content={post.frontmatter.summary} />

      <meta property="og:title" content={post.frontmatter.title} />
      <meta property="og:description" content={post.frontmatter.summary} />
      <meta property="og:url" content={`https://alvarez.tech/${post.slug}`} />
      <meta property='og:type' content='article' />
      <meta property="article:publisher" content="https://alvarez.tech" />
      <meta property="article:author" content="https://alvarez.tech" />
      {post.frontmatter.tags?.map(tag => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      <meta name='twitter:title' content={post.frontmatter.title} />
      <meta name='twitter:description' content={post.frontmatter.summary} />
      <meta name='twitter:url' content={`https://alvarez.tech/${post.slug}`} />
    </Head>

    <div className="relative py-16 bg-white overflow-hidden">
      <article className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <Link href={`/tag/${post.frontmatter.tags?.[0]}`}>
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
            <Content components={components} />
          </div>

          <div className="flex items-start justify-center mt-14 w-full">
            <div className="space-x-2 flex-1 -mt-0.5">
              {post.frontmatter.tags?.map(tag => (
                <Link href={`/tag/${tag}`} key={tag}>
                  <a className="tagx">{tag}</a>
                </Link>
              ))}
            </div>
            {!isPage &&
              <div
                className="ml-4 text-sm text-gray-500 dark:text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300">
                <a href={editUrl(post.slug)} target="_blank" rel="noreferrer">{'Edit on Github'}</a>
              </div>
            }
          </div>
          {!isPage &&
            <Comments />
          }
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
  let isPage = false;
  let post = await getPost(params.slug, 'posts');
  if (post == null) {
    post = await getPost(params.slug, 'pages');
    isPage = true;
  }
  return {
    props: {
      post,
      isPage
    }
  }
}
