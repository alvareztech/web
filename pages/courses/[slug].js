import Layout from '../../components/layout';
import { getCourseSlugs, getCourse } from '../../lib/posts';
import { classNames } from '../../lib/util';
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponent from '../../components/mdxComponents';
import GitHub from '../../components/github';
import { useMemo } from "react";

const components = { GitHub, ...MDXComponent }

export default function Course({ course }) {
  const Component = useMemo(() => getMDXComponent(course.code), course.code);
  return (
    <Layout>

      <div
        className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div
          className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2
              className={classNames("uppercase", 'inline-flex items-center px-2 rounded text-xl font-bold')}>{course.title}</h2>
          </div>

        </div>
        <div className="content">
          <Component components={components} />
        </div>
      </div>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getCourseSlugs()
  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  const course = await getCourse(params.slug)
  return {
    props: {
      course
    }
  }
}
