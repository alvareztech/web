import { getAllPosts } from "../lib/posts"
import Layout from "../components/layout"
import Link from "next/link"
import Head from "next/head"
import Project from "../components/project"
import Hero from "../components/hero"

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>{`Projects | Daniel Alvarez | ALVAREZ.tech`}</title>
      </Head>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <Hero title={`Projects`} subtitle={`Some small personal projects I was working on and am working on now. All open source 😉.`}>
            This site is also&nbsp;
            <Link href={"/about"}>
              <a className="text-colorA dark:text-colorAD font-medium hover:text-blue-300">a project.</a>
            </Link>
          </Hero>
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
