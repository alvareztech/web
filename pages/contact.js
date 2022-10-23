import Layout from '../components/layout'
import { MailIcon } from '@heroicons/react/outline'
import Head from 'next/head'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`Contact | Daniel Alvarez | ALVAREZ.tech`}</title>
      </Head>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold dark:text-white sm:text-3xl">Get in touch</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                You can send me an email to talk.
              </p>
            </div>
            <div className="mt-9">
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>daniel@alvarez.tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
