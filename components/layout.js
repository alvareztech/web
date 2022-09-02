import Head from 'next/head'
import Link from 'next/link'
import {titleSite} from "../lib/texts";

const navigation2 = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/alvareztech',
    icon: (props) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>),
  }, {
    name: 'Instagram',
    href: 'https://www.instagram.com/alvarez_tech/',
    icon: (props) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>),
  }, {
    name: 'Twitter',
    href: 'https://twitter.com/alvarez_tech',
    icon: (props) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
    </svg>),
  }, {
    name: 'GitHub',
    href: 'https://github.com/alvareztech',
    icon: (props) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>),
  },
]

const navigation = [
  {name: 'Projects', href: '/projects'},
  {name: 'Courses', href: '/courses'},
  {name: 'Talks', href: '/talks'},
  {name: 'Videos', href: '/tag/video'},
  {name: 'About', href: '/about'},
]

export default function Layout({children, home}) {
  return <>
    <Head>
      <meta name="description" content="Software Engineer"/>

      <meta property="og:site_name" content="ALVAREZ.tech"/>
      <meta property="og:image" content="https://alvarez.tech/image.png"/>
      <meta property="og:title" content={titleSite}/>

      <meta property="fb:app_id" content="269827340075535"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@alvarez_tech"/>
      <meta name="twitter:image" content="https://alvarez.tech/image.png"/>
      <meta name="twitter:creator" content="@alvarez_tech"/>
      <meta name="twitter:label1" content="Written by"/>
      <meta name="twitter:data1" content="Daniel Alvarez"/>

      <meta name="theme-color" content="#0a84ff"/>
      <meta name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"/>

      <link rel="apple-touch-icon" sizes="180x180"
            href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32"
            href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16"
            href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </Head>


    <header>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div
          className="w-full py-6 flex items-center justify-between border-b border-blue-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span
                  className="text-blue-600 text-2xl font-bold font-mono tracking-tighter">ALVAREZ.tech</span>
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link href={link.href} key={link.name}>
                  <a
                    className="text-base font-medium text-blue-600 hover:text-blue-400">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="https://twitter.com/alvarez_tech"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              Follow Me
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href}
               className="text-base font-medium text-blue-600 hover:text-blue-400">
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {home &&
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline tracking-tighter font-mono">Daniel</span>{' '}
              <span className="block text-blue-600 xl:inline font-mono tracking-tighter">Alvarez</span>
            </h1>
            <p
              className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Hi! I&apos;m a software engineer. I share some projects and
              content I develop in my spare time. Most things are related
              to <span className="text-blue-500 font-bold font-mono">tech</span> and
              code.
            </p>
          </div>
        </div>
      }
    </header>


    <main>
      {children}
    </main>

    <footer className="bg-white">
      <div
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation2.map((item) =>
            <a key={item.name} href={item.href}
               className="text-gray-400 hover:text-gray-500"
               rel="noreferrer"
               target="_blank">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true"/>
            </a>
          )}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">&copy; 2022 ALVAREZ
            technologies, Inc. All rights
            reserved.</p>
        </div>
      </div>
    </footer>

  </>
}
