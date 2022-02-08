import Layout from '../components/layout'

export default function Contact() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2
                className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact</h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  Comments, questions or feedback, happy to help you out!
                </p>
                <p className="text-lg text-gray-500">
                  The best way to reach me is via <a href='https://twitter.com/alvarez_tech'>@alvarez_tech</a> on Twitter.
                </p>
                <p className="text-lg text-gray-500">
                  Message @alvareztech

                  Social networks:
                  <ul>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                  </ul>
                  You can also send me an email.

                  daniel@alvarez.tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
