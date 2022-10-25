import Link from "next/link"
import GitHubSponsor from "./githubSponsor"

export default function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

      <div className=" w-full py-2 flex items-center justify-between border-b border-colorA dark:border-colorAD lg:border-none">
        <div className="flex items-center">
          <Link
            href={`/`}
            className="text-colorA dark:text-colorAD text-2xl px-1 font-bold font-mono tracking-tighter hover:text-white hover:bg-colorA dark:hover:bg-colorAD">

            ALVAREZ.tech

          </Link>

          {/* LARGE SCREEN */}
          <div className="hidden ml-8 space-x-4 lg:block">

            {navigation.map((link) => (
              <NavItem link={link} key={link.name} />
            ))}

          </div>

        </div>
        <GitHubSponsor />
      </div>

      {/* SMALL SCREEN */}
      <div className="py-2 flex flex-wrap justify-center space-x-2 lg:hidden">

        {navigation.map((link) => (
          <NavItem link={link} key={link.name} />
        ))}

      </div>
    </nav>
  );
}

function NavItem({ link }) {
  return (
    <Link
      href={link.href}
      className={`text-base py-1 px-1 font-mono tracking-tighter font-bold lowercase text-colorA dark:text-colorAD hover:text-white hover:bg-colorA dark:hover:bg-colorAD`}>
      {link.name}

    </Link>
  );
}

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Courses', href: '/courses' },
  { name: 'Talks', href: '/talks' },
  { name: 'Videos', href: '/tag/video' },
  { name: 'About', href: '/about' },
]
