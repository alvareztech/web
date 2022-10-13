import Layout from '../components/layout'
import { CameraIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from "next/image";

export default function Daniel() {
  return (
    <Layout>
      <Head>
        <title>Daniel Alvarez - ALVAREZ.tech</title>
      </Head>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div
            className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div
            className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2
                className="text-base text-blue-600 font-semibold tracking-wide uppercase">Software
                Engineer</h2>
              <h3
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight font-mono text-gray-900 sm:text-4xl">
                Daniel Alvarez
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
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
                      aria-hidden="true" />
                    <span className="ml-2">San Francisco</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-lg text-gray-700 max-w-prose mx-auto lg:max-w-none">
                <p>
                  I am a software engineer with over ten years of experience. I have developed world-class iOS and Android applications for different areas such as healthcare, finance, IoT, retail, and government. Developed SDKs for Android and iOS, created native plugins for hybrid mobile frameworks, and automated development processes.
                </p>
                <p className='mt-4'>
                  I use my deep knowledge in both platforms to sync features, optimize resources usage, and lead teams.
                </p>
                <p className='mt-4'>
                  <a href='/resume.pdf'>Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
