import Layout from '../../components/layout';
import { getPostSlugs, getPost } from '../../lib/posts';
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponent from '../../components/mdxComponents';
import GitHub from '../../components/github';
import { useMemo } from "react";
import Head from 'next/head'
import Link from 'next/link';

const components = { GitHub, ...MDXComponent }

export default function Course({ course }) {
  const Component = useMemo(() => getMDXComponent(course.code), course.code);
  const stats = [
    { label: 'Apps desarrolladas', value: course.frontmatter.developed_apps },
    { label: 'Students', value: course.frontmatter.students },
    { label: 'Duration', value: `${course.frontmatter.duration} month(s)` },
    { label: 'Versions', value: course.frontmatter.versions },
  ]
  return (
    <Layout>
      <Head>
        <title>{course.frontmatter.title}</title>
      </Head>

      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-bold tracking-tighter font-mono sm:text-4xl">
                {course.frontmatter.title}
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  {course.frontmatter.summary}
                </p>
                <div className="content">
                  <Component components={components} />
                </div>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link href={`/contact`}>
                  <a className="text-base font-medium text-blue-600">
                    More info about new courses <span aria-hidden="true">&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPostSlugs('courses')
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  const course = await getPost(params.slug, 'courses')
  return {
    props: {
      course
    }
  }
}
