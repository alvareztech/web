import Link from 'next/link'

export default function Project({ project }) {
  return (
    <div key={project.title} className="flex flex-col overflow-hidden rounded shadow-lg hover:shadow-xl">
      <div className="flex flex-1 flex-col justify-between p-6 hover:bg-colorAccent dark:hover:bg-colorAccentD">
        <div className="flex-1">
          <p className="text-sm font-semibold font-mono uppercase text-colorA dark:text-colorAD">
            {project.category}
          </p>
          <Link href={`/projects/${project.slug}`} className="mt-2 block">

            <p className="card-title">{project.title}</p>
            <p className="mt-3 text-base text-gray-500">{project.summary}</p>

          </Link>
          <div className="mt-4 flex flex-wrap items-center">
            {project.tags?.map(tag => (
              <Link href={`/tag/${tag}`} key={tag} className="tagx">
                {tag}
              </Link>
            ))}
          </div>
          <span className="uppercase inline-flex items-center mt-4 px-2 py-0.5 rounded text-xs font-medium font-mono bg-blue-100 text-colorA dark:text-colorAD">
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
}

