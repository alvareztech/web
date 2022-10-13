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
import { getColor } from '../lib/util';

const components = { GitHub, YouTube, Slideshare, SpeakerDeck, Slides, ...MDXComponent }
const editUrl = (slug) => `https://github.com/alvareztech/web/edit/main/data/posts/${slug}.mdx`;

export default function Post({ post, isPage }) {

  const Content = useMemo(() => getMDXComponent(post.code), [post.code]);
  const mainTag = post.frontmatter.tags?.[0];

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

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl break-words">

        <h1 className='mt-28'>
          {mainTag &&
            <Link href={`/tag/${mainTag}`}>
              <a
                className={`px-1 py-0.5 text-base text-white ${getColor(mainTag)} rounded font-semibold font-mono tracking-wide uppercase`}>
                {mainTag}
              </a>
            </Link>
          }
          <span
            className="mt-4 block text-4xl leading-8 font-bold font-mono tracking-tighter text-gray-900 sm:text-4xl">
            {post.frontmatter.title}
          </span>
        </h1>
        <p className="mb-20 mt-4 text-2xl text-gray-500 leading-8">
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

      </article>
    </div>

    {/* Table of Contents */}
    {isTocEnabled(post, isPage) &&
      <div className='bg-slate-100 p-4 w-60 rounded fixed top-60 right-6 hidden xl:block break-words'>
        <ul>
          <li>
            <a href='#' className='text-sm text-slate-500 hover:text-blue-500'>Intro</a>
          </li>
          {
            post.headings.map(heading => (
              <li key={heading.id}>
                {heading.level === 2 &&
                  <>&nbsp;&nbsp;</>
                }
                <a href={`#${heading.id}`} className="text-sm text-slate-500 hover:text-blue-500">{heading.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    }

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

function isTocEnabled(post, isPage) {
  if (post.headings.length > 0) {
    if (isPage) {
      if (post.frontmatter.toc) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}
