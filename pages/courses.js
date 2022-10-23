import Layout from "../components/layout";
import { getAllPosts } from "../lib/posts";
import Head from "next/head";
import CourseCard from "../components/course_card";
import Hero from "../components/hero";

export default function Courses({ courses }) {
  return (
    <Layout>
      <Head>
        <title>{`Courses | Daniel Alvarez | ALVAREZ.tech`}</title>
      </Head>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <Hero title={`Courses`} subtitle={`Some courses I have taught in the past and their resources. 🧐`} />
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
