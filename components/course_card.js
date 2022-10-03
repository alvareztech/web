import Link from "next/link";
import Date from "../components/date";

export default function CourseCard({ course }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between hover:bg-yellow-100">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">
            <Link href={`/tag/${course.tags?.[0]}`}>
              <a className="uppercase">{course.tags?.[0]}</a>
            </Link>
          </p>
          <Link href={`/courses/${course.slug}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 font-mono tracking-tighter">{course.title}</p>
              <p className="mt-3 text-base text-gray-500">{course.summary}</p>
            </a>
          </Link>
          <div className="mt-6 flex items-center">
            <div className="flex space-x-1 text-sm text-gray-400">
              <Date dateString={course.date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
