import Layout from "../components/layout";
import { getAllPosts } from "../lib/posts";
import Head from "next/head";
import { titleCourses, subtitleCourses, getTitle } from "../lib/texts";
import CourseCard from "../components/course_card";

export default function Courses({ courses }) {
  return (
    <Layout>
      <Head>
        <title>{getTitle(titleCourses)}</title>
      </Head>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-bold dark:text-white sm:text-4xl">{titleCourses}</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {subtitleCourses}
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

            {courses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}

          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const courses = getAllPosts('courses')
  return {
    props: {
      courses
    }
  }
}
