import Link from "next/link";
import Date from "../components/date";

export default function TalkCard({ talk }) {
  return (
    <div className="flex flex-col rounded shadow-lg overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between hover:bg-yellow-100">
        <div className="flex-1">
          <Link href={`/talks/${talk.slug}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 font-mono tracking-tighter">{talk.title}</p>
              <p className="mt-3 text-base text-gray-500">{talk.summary}</p>
            </a>
          </Link>
          <div className="mt-4 flex flex-wrap items-center">
            {talk.tags?.map(tag => (
              <Link href={`/tag/${tag}`} key={tag}>
                <a className="tagx">{tag}</a>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex space-x-1 text-sm text-gray-400">
              <Date dateString={talk.date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}