import { HeartIcon } from '@heroicons/react/outline'

export default function GitHubSponsor() {
  return (
    <a href={`https://github.com/sponsors/alvareztech/`}
      target="_blank"
      rel="noreferrer"
      className='inline-flex items-center px-2 py-2 font-medium text-sm text-gray-700 rounded-md border border-gray-300 bg-white hover:bg-gray-50'
    >
      <HeartIcon className='h-5 w-5 mr-1.5 text-gray-500 hover:animate-pulse' />
      Sponsor on GitHub
    </a>
  )
}