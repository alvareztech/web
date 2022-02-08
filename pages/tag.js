import Layout from "../components/layout";
import { getTags } from "../lib/posts";
import Link from "next/link";
import { classNames } from "../lib/util";

export default function Tag({ tags }) {
  return (<Layout>
    <div
      className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h2
        className="text-3xl font-bold text-gray-900 sm:text-4xl py-4">{tags.length} tags</h2>
      <div className="space-x-2">
        {tags.map(tag => (
          <Link key={tag} href={"/tag/" + tag}>
            <a>
              <span
                key={tag}
                className={classNames("uppercase", "bg-green-400", 'inline-flex items-center px-2 my-1 rounded text-xl font-bold')}>
                {tag}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  </Layout>)
}

export async function getStaticProps() {
  const tags = getTags()
  return {
    props: {
      tags
    }
  }
}
