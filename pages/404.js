import Link from 'next/link'
import Image from 'next/image'

export default function Custom404() {
  return (
    <div
      className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-bold text-colorA dark:text-colorAD sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1
                className="text-4xl font-extrabold dark:text-white tracking-tight sm:text-5xl">Page not found</h1>
              <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
            </div>
            <Image src={"/images/cheems0.png"}
              alt="Cheems 404"
              width={200}
              height={250}
            />
            <div
              className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href={"/"}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-colorA hover:bg-blue-700">
                Go back home
              </Link>
              <Link href={"/contact"}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-colorA bg-blue-100 hover:bg-blue-200">
                Contact support
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
