import Link from "next/link"
import GitHubSponsor from "./githubSponsor"

export default function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        className="w-full py-6 flex items-center justify-between border-b border-blue-500 lg:border-none">
        <div className="flex items-center">
          <Link href={`/`}>
            <a className="text-blue-600 text-2xl font-bold font-mono tracking-tighter hover:bg-blue-600 hover:text-white">
              ALVAREZ.tech
            </a>
          </Link>
          <div className="hidden ml-10 space-x-8 lg:block">
            {navigation.map((link) => (
              <Link href={link.href} key={link.name}>
                <a
                  className="text-base py-1 font-mono font-bold tracking-tighter lowercase text-blue-600 hover:text-white hover:bg-blue-600">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <GitHubSponsor />
      </div>

      <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        {navigation.map((link) => (
          <Link href={link.href} key={link.name}>
            <a className={`text-base font-mono tracking-tighter font-bold lowercase text-blue-600 hover:text-white hover:bg-blue-600`}>
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Courses', href: '/courses' },
  { name: 'Talks', href: '/talks' },
  { name: 'Videos', href: '/tag/video' },
  { name: 'About', href: '/about' },
]