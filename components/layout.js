import Head from 'next/head'
import Link from 'next/link'
import Footer from './footer';
import Navigation from './navigation';

export default function Layout({ children, home }) {
  return <>
    <Head>
      <meta name="description" content="Projects I'm working on, iOS, Android, web, automation, mostly related to tech." />

      <meta property="og:site_name" content="ALVAREZ.tech" />
      <meta property="og:image" content="https://alvarez.tech/image.png" />
      <meta property="og:title" content="ALVAREZ.tech | Daniel Alvarez | Software Engineer" />

      <meta property="fb:app_id" content="269827340075535" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alvarez_tech" />
      <meta name="twitter:image" content="https://alvarez.tech/image.png" />
      <meta name="twitter:creator" content="@alvarez_tech" />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Daniel Alvarez" />

      <meta name="theme-color" content="#0a84ff" />
      <meta name="apple-mobile-web-app-status-bar-style"
        content="black-translucent" />

      <link rel="apple-touch-icon" sizes="180x180"
        href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32"
        href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16"
        href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <div className='dark:bg-black flex flex-col h-screen'>
      <header>
        <Navigation />

        {home &&
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1
                className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline tracking-tighter font-mono">Daniel</span>{' '}
                <span className="block text-colorA dark:text-colorAD xl:inline font-mono tracking-tighter">Alvarez</span>
              </h1>
              <p
                className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Hi! I&apos;m a software engineer. I share some projects and
                content I develop in my spare time. Most things are related
                to <span className="text-colorA dark:text-colorAD font-bold font-mono">tech</span> and
                code.
              </p>
            </div>
          </div>
        }
      </header>

      <main className='grow'>
        {children}
      </main>

      <Footer />
    </div>
  </>
}
