export default function GitHub({ repo }) {
  return (
    <div className="text-white">
      <div
        className="my-8 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <a href={"https://github.com/alvareztech/" + repo}
          target="_blank"
          rel="noreferrer">
          GitHub {repo}
        </a>
      </div>
    </div>
  )
}
