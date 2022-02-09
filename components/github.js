import { CodeIcon, DownloadIcon, CloudIcon } from '@heroicons/react/solid'

export default function GitHub({ repo, branch = "master" }) {
  var repoUri = "alvareztech/" + repo
  if (branch != "master") {
    repoUri += "/tree/" + branch
  }
  return (
    <>
      <a href={"https://github.com/" + repoUri}
        target="_blank"
        rel="noreferrer">
        <div
          className="my-8 inline-flex items-center px-3 py-3 shadow-sm text-base leading-4 font-medium rounded-md text-white bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
          <CodeIcon className="mr-2 h-4 w-4" aria-hidden="true" />
          {repo}
        </div>
      </a>
      <a href={"https://github.dev/" + repoUri}
        target="_blank"
        rel="noreferrer">
        <div className='inline-flex ml-2 text-white bg-blue-500 px-4 py-3 rounded-md hover:shadow-lg hover:shadow-blue-500/50'>
          <CloudIcon className="h-4 w-4" aria-hidden="true" />
        </div>
      </a>
      <a href={"https://github.com/alvareztech/" + repo + "/archive/refs/heads/" + branch + ".zip"}
        target="_blank"
        rel="noreferrer">
        <div className='inline-flex ml-2 text-white bg-blue-500 px-4 py-3 rounded-md hover:shadow-lg hover:shadow-blue-500/50'>
          <DownloadIcon className="h-4 w-4" aria-hidden="true" />
        </div>
      </a>
    </>
  )
}
