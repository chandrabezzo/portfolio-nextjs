import Image from 'next/image'
import { getBasePath } from '@/utils/base-path'

export function Footer() {
  return (
    <footer className="px-4 py-6 text-center text-xs text-gray-400 sm:text-sm">
      <div className="space-y-4">
        <p>Inspired by <a className='text-[#64ffda]' href='https://v4.brittanychiang.com'>Brittany Chiang</a></p>
        <div className="flex items-center justify-center gap-4">
          <Image
            src={getBasePath('/banner.svg')}
            alt="CAF Logo"
            className="h-full min-w-3/4"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  )
}

