import Layout from '../components/layout'
import {MailIcon, PhoneIcon} from '@heroicons/react/outline'
import {CameraIcon} from '@heroicons/react/solid'
import Head from 'next/head'
import Image from "next/image";

export default function Daniel() {
  return (
    <Layout>
      <Head>
        <title>Daniel Alvarez - ALVAREZ.tech</title>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async
                defer type="text/javascript"></script>
      </Head>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div
            className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"/>
          <div
            className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2
                className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Software
                Engineer</h2>
              <h3
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Daniel A. Alvarez A.
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4}
                          className="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width={404} height={384}
                      fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
              </svg>
              <div
                className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="/images/danielsf.JPG"
                      alt="Daniel Alvarez"
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon className="flex-none w-5 h-5 text-gray-400"
                                aria-hidden="true"/>
                    <span className="ml-2">San Francisco</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  I have developed world-class iOS and Android applications for
                  different areas such as healthcare, finance, IoT, retail and
                  government. Developed SDKs for Android and iOS, created native
                  plugins for hybrid mobile frameworks, and automated
                  development processes.
                </p>
                <p>
                  I use my deep knowledge in both platforms to work efficiently,
                  sync features, optimize resources usage and lead teams.
                </p>
              </div>
              <div
                className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  I write unit tests, integration tests, and UI tests (XCTest,
                  JUnit, Espresso, Mockito) at different stages of development.
                  Trying to adopt TDD for new and specific projects.
                </p>
                <p>
                  I like to test and adopt new technologies for personal
                  projects and suggest them when they reach a mature level for
                  professional projects. I have several talks and conferences as
                  a speaker. Collaborator in technology communities and attendee
                  to the most important developer events, Google I/O and Apple
                  WWDC. I like to share, I create content, video tutorials,
                  developer resources for my website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
