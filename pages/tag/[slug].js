import Layout from '../../components/layout'
import { getPostsByTag, getTags } from "../../lib/posts";
import Head from 'next/head';
import Post from '../../components/post';
import Project from '../../components/project';
import CourseCard from '../../components/course_card';
import TalkCard from '../../components/talk_card';
import Hero from '../../components/hero';

export default function Tag({ tag, posts, projects, courses, talks }) {
  return (
    <Layout>
      <Head>
        <title>{`${tag.toUpperCase()} | Daniel Alvarez | ALVAREZ.tech`}</title>
      </Head>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">

          <Hero title={tag.toUpperCase()} subtitle={`${posts.length} posts, ${projects.length} projects, ${courses.length} courses, ${talks.length} talks.`} />

          {projects.length > 0 &&
            <h2 className='mt-12 text-xl font-mono font-bold tracking-tighter dark:text-white'>Projects</h2>
          }

          <div
            className="mb-8 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {projects.map((project) => (
              <Project project={project} key={project.slug} />
            ))}
          </div>

          {posts.length > 0 &&
            <h2 className='mt-12 text-xl font-mono font-bold tracking-tighter dark:text-white'>Posts</h2>
          }

          <div
            className="mb-8 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <Post post={post} key={post.slug} />
            ))}
          </div>

          {courses.length > 0 &&
            <h2 className='mt-12 text-xl font-mono font-bold tracking-tighter dark:text-white'>Courses</h2>
          }

          <div
            className="mb-8 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {courses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>

          {talks.length > 0 &&
            <h2 className='mt-12 text-xl font-mono font-bold tracking-tighter dark:text-white'>Talks</h2>
          }

          <div
            className="mb-8 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {talks.map((talk) => (
              <TalkCard talk={talk} key={talk.slug} />
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
  const posts = await getPostsByTag(tag, 'posts')
  const projects = await getPostsByTag(tag, 'projects')
  const courses = await getPostsByTag(tag, 'courses')
  const talks = await getPostsByTag(tag, 'talks')
  return {
    props: {
      tag,
      posts,
      projects,
      courses,
      talks
    }
  }
}
