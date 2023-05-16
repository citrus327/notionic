import { RssIcon } from '@heroicons/react/outline'
import BLOG from '@/blog.config'

const RssSub = () => {
  return (
    <>
      <button
        onClick={() => {
          navigator.clipboard.writeText(BLOG.link + '/feed')
        }}
        aria-label='LangSwitcher'
        className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100'
      >
        <RssIcon className='h-5 w-5' />
      </button>
    </>
  )
}

export default RssSub
