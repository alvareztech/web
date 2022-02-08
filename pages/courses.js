import Layout from "../components/layout";
import { getAllCourses } from "../lib/posts";
import Link from "next/link";
import { classNames } from "../lib/util";

export default function Courses({ courses }) {
  return (<Layout>
    <div
      className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h2
        className="text-3xl font-bold text-gray-900 sm:text-4xl py-4">{courses.length} courses</h2>
      <div className="space-x-2">
        {courses.map(({ slug, date, title, tags, language, summary }) => (
          <Link key={slug} href={"/courses/" + slug}>
            <a>
              <span
                key={title}
                className={classNames("uppercase", "bg-slate-500", 'inline-flex items-center px-2 my-1 rounded text-xl font-bold')}>
                {title}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  </Layout>)
}

export async function getStaticProps() {
  const courses = getAllCourses()
  console.log("COURSESSSS", courses)
  return {
    props: {
      courses
    }
  }
}
