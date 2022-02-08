import Layout from "../components/layout";
import { getAllPosts } from "../lib/posts";
import Link from "next/link";
import { classNames } from "../lib/util";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline'

export default function Courses({ courses }) {
  return (
    <Layout>
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {courses.map((course, courseIdx) => (
          <div
            key={course.title}
            className={classNames(
              courseIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              courseIdx === 1 ? 'sm:rounded-tr-lg' : '',
              courseIdx === courses.length - 2 ? 'sm:rounded-bl-lg' : '',
              courseIdx === courses.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  "bg-teal-50",
                  "text-teal-700",
                  'rounded-lg inline-flex p-3 ring-4 ring-white'
                )}
              >
                <AcademicCapIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <Link href={"/courses/" + course.slug}>
                  <a className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {course.title}
                  </a>
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {course.description}
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
            </span>
          </div>
        ))}
      </div>
    </Layout>
  )

  // return (
  //   <Layout>
  //     <div
  //       className="max-w-7xl mx-auto sm:px-6 lg:px-8">
  //       <h2
  //         className="text-3xl font-bold text-gray-900 sm:text-4xl py-4">{courses.length} courses</h2>
  //       <div className="space-x-2">
  //         {courses.map(({ slug, date, title, tags, language, summary }) => (
  //           <Link key={slug} href={"/courses/" + slug}>
  //             <a>
  //               <span
  //                 key={title}
  //                 className={classNames("uppercase", "bg-slate-500", 'inline-flex items-center px-2 my-1 rounded text-xl font-bold')}>
  //                 {title}
  //               </span>
  //             </a>
  //           </Link>
  //         ))}
  //       </div>
  //     </div>
  //   </Layout>
  // )
}

export async function getStaticProps() {
  const courses = getAllPosts('courses')
  return {
    props: {
      courses
    }
  }
}
