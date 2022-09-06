import Layout from '../../components/layout';
import { getPostSlugs, getPost } from '../../lib/posts';
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponent from '../../components/mdxComponents';
import GitHub from '../../components/github';
import { useMemo } from "react";
import Image from 'next/image';
import Head from 'next/head';
import GooglePlay from "../../components/googleplay";

const components = { GitHub, GooglePlay, ...MDXComponent }

export default function Project({ project }) {
  const Component = useMemo(() => getMDXComponent(project.code), project.code);
  return (
    <Layout>
      <Head>
        <title>{project.frontmatter.title}</title>
      </Head>

      <div class="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 xl:py-36">
        <div class="mx-auto max-w-max lg:max-w-7xl">
          <div class="relative z-10 mb-8 md:mb-2 md:px-6">
            <p className='text-base font-mono font-bold text-blue-600 tracking-tighter uppercase'>{project.frontmatter.category}</p>
            <h2 className='font-mono text-3xl tracking-tighter font-extrabold'>{project.frontmatter.title}</h2>
            <p className='text-base font-mono text-blue-600 uppercase'>{project.frontmatter.status}</p>
          </div>
          <div class="relative">
            <div class="relative md:bg-white md:p-6">
              <div class="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className='content'>
                  <Component components={components} />
                </div>
                <div>
                  <GitHub repo={project.frontmatter.repo} />
                  {project.frontmatter.goopleplay &&
                    <GooglePlay appId={project.frontmatter.goopleplay} />
                  }
                </div>
              </div>
              <div class="mt-8 inline-flex rounded-md shadow">

              </div>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  )
}

{/* <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
<div className="max-w-max lg:max-w-7xl mx-auto">
  <div className="relative z-10 mb-8 md:mb-2 md:px-6">
    <div className="text-base max-w-prose lg:max-w-none">
      <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">{project.frontmatter.category}</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {project.frontmatter.title}
      </p>
      <span className="uppercase inline-flex items-center mt-4 px-2 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
        {project.frontmatter.status}
      </span>
    </div>
  </div>
  <div className="relative">
    <div className="relative md:bg-white md:p-6">
      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
          <div className="content">
            <Component components={components} />
          </div>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">

        </div>
      </div>
    </div>
  </div>
</div>
</div> */}


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
