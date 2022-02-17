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
                className={classNames('text-white', "uppercase", getColor(tag), 'inline-flex items-center px-2 my-1 rounded text-xl font-bold')}>
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

function getColor(tag) {
  switch (tag) {
    case "android":
    case "androidx":
    case "espresso":
    case "retrofit":
      return "bg-green-500"
    case "ios":
    case "facebook":
      return "bg-blue-500"
    case "angular":
    case "java":
    case "javafx":
      return "bg-red-500"
    case "kotlin":
      return "bg-purple-500"
    case "firebase":
      return "bg-yellow-500"
    case "swift":
      return "bg-orange-500"
  }
  return "bg-gray-500"
}
