import { getAllPosts } from "../lib/posts"
import Layout from "../components/layout"
import Link from "next/link"
import Head from "next/head"
import { getTitle, titleProjects } from "../lib/texts"
import Project from "../components/project"

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>{getTitle(titleProjects)}</title>
      </Head>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-bold dark:text-white sm:text-4xl">{titleProjects}</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Some small personal projects I was working on and am working on now.
            </p>
            <p className="text-xl text-gray-500">
              All open source 😉
            </p>
            <p className="mt-4 text-xl text-gray-500">
              This site is also a project.
            </p>
            <Link href={"/about"}>
              <a className="text-colorA dark:text-colorAD text-base font-medium hover:text-blue-300">About this site</a>
            </Link>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {projects.map((project) => (
              <Project project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = getAllPosts('projects')
  return {
    props: {
      projects
    }
  }
}
