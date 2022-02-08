import Layout from '../../components/layout';
import { getPostSlugs, getPost } from '../../lib/posts';
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

      <h2 className='text-2xl'>{course.frontmatter.title}</h2>
      <div className="content">
        <Component components={components} />
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
