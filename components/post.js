import Link from 'next/link'
import { getColor } from '../lib/util';
import Date from './date';

export default function Post({ post }) {
  return (
    <div className="flex flex-col overflow-hidden rounded shadow-lg hover:shadow-xl">

      {post.youtubeId &&
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={`https://img.youtube.com/vi/${post.youtubeId}/mqdefault.jpg`} alt={post.title} />
        </div>
      }

      <div className="flex flex-1 flex-col justify-between p-6 hover:bg-colorAccent dark:hover:bg-colorAccentD">
        <div className="flex-1">
          <Link href={`/tag/${post.tags?.[0]}`} className="inline-block">

            <span
              className={`text-white uppercase ${getColor(post.tags?.[0])} inline-flex items-center px-1 rounded text-sm font-semibold font-mono`}>
              {post.tags?.[0]}
            </span>

          </Link>
          <Link href={`/${post.slug}`} className="mt-2 block">

            <p className="card-title">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.summary}</p>

          </Link>

          <div className="mt-4 flex flex-wrap items-center">
            {post.tags?.slice(1).map(tag => (
              <Link href={`/tag/${tag}`} key={tag} className='tagx'>
                {tag}
              </Link>
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
  );
}
