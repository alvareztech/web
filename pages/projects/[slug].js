import Layout from '../../components/layout';
import { getPostSlugs, getPost } from '../../lib/posts';
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponent from '../../components/mdxComponents';
import GitHub from '../../components/github';
import { useMemo } from "react";
import Head from 'next/head';
import GooglePlay from "../../components/googleplay";
import AppGallery from '../../components/appgallery';

const components = { GitHub, GooglePlay, AppGallery, ...MDXComponent }

export default function Project({ project }) {
  const Component = useMemo(() => getMDXComponent(project.code), [project.code]);
  return (
    <Layout>
      <Head>
        <title>{project.frontmatter.title}</title>
        <meta name="description" content={project.frontmatter.summary} />
        <meta property="og:title" content={project.frontmatter.title} />
        <meta property="og:description" content={project.frontmatter.summary} />
      </Head>

      <div className="overflow-hidden py-16 px-4 sm:px-6 lg:px-8 xl:py-36">
        <div className="mx-auto max-w-max lg:max-w-7xl">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <p className='mb-2 text-base font-mono font-bold text-colorA dark:text-colorAD tracking-tighter uppercase'>{project.frontmatter.category}</p>
            <h2 className='font-mono text-4xl tracking-tighter font-black dark:text-white'>{project.frontmatter.title}</h2>
            <p className='inline-flex items-center px-2 py-0.5 mt-4 text-base font-mono bg-blue-100 text-colorA dark:text-colorAD rounded-md uppercase'>{project.frontmatter.status}</p>
          </div>
          <div className="relative">
            <div className="relative md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className='content text-lg'>
                  <Component components={components} />
                </div>
                <div className='mt-3'>
                  <h2 className='text-2xl font-bold dark:text-white'>Repository</h2>
                  <GitHub repo={project.frontmatter.repo} />
                  {(project.frontmatter.goopleplay || project.frontmatter.appgallery) &&
                    <h2 className='text-2xl font-bold dark:text-white'>Download</h2>
                  }
                  {project.frontmatter.goopleplay &&
                    <GooglePlay appId={project.frontmatter.goopleplay} />
                  }
                  {project.frontmatter.appgallery &&
                    <AppGallery appId={project.frontmatter.appgallery} />
                  }
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPostSlugs('projects')
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = await getPost(params.slug, 'projects')
  return {
    props: {
      project
    }
  }
}
