import Link from 'next/link'
import { classNames } from '../lib/util';
import Date from './date';

export default function Post({ post }) {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl">

            {post.youtubeId &&
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={'https://img.youtube.com/vi/' + post.youtubeId + '/mqdefault.jpg'} alt={post.title} />
                </div>
            }

            <div className="flex flex-1 flex-col justify-between bg-white p-6 hover:bg-yellow-100">
                <div className="flex-1">
                    <Link href={"/tag/" + post.tags?.[0]}>
                        <a className="inline-block">
                            <span
                                className={classNames("text-white", "uppercase", getColor(post.tags?.[0]), 'inline-flex items-center px-2 rounded text-sm font-semibold font-mono')}>
                                {post.tags?.[0]}
                            </span>
                        </a>
                    </Link>
                    <Link href={'/' + post.slug}>
                        <a className="mt-2 block">
                            <p className="text-xl font-bold font-mono tracking-tighter text-gray-900">{post.title}</p>
                            <p className="mt-3 text-base text-gray-500">{post.summary}</p>
                        </a>
                    </Link>

                    <div className="mt-4 flex items-center">
                        {post.tags?.slice(1).map(tag => (
                            <span
                                key={tag}
                                className="uppercase inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-gray-100 text-gray-800 mr-1">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center">
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <Date dateString={post.date} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
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
        case "hms":
            return "bg-red-500"
        case "kotlin":
            return "bg-purple-500"
        case "firebase":
            return "bg-yellow-500"
        case "swift":
        case "swiftui":
            return "bg-orange-500"
    }
    return "bg-gray-500"
}
