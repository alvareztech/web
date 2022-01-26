import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>
        <div
          className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div
              className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2
                className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">About
                me</h2>
              <h3
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Daniel Alvarez
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                iOS/Android Software Engineer. Around 10 years working
                professionally for technology companies of different areas,
                financial, health care, IoT, retail, government. Developing
                native iOS and Android apps (Swift/Obj-C, Kotlin/Java) and
                creating native plugins for hybrid frameworks. Developing mobile
                SDKs for iOS and Android.
              </p>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <p>
                  To improve development processes. I create automated ways to
                  distribute and handle releases, builds for apps or SDKs. CI/CD
                  with Github Actions, Gitlab, Bamboo, Azure DevOps (and Python
                  scripts).
                </p>
                <p>
                  I write unit tests, integration tests, and UI tests (XCTest,
                  JUnit, Espresso, Mockito) at different stages of development.
                  Trying to adopt TDD for new and specific projects.
                </p>
                <p>
                  I led some teams, I led a Bootcamp to train new developers. My
                  main strength is knowing both platforms deeply and that helps
                  me drive development between mixed teams, Android and iOS.
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
