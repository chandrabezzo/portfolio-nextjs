'use client'

export function EmailSidebar() {
  return (
    <div className="fixed bottom-0 right-0 hidden md:block">
      <div className="flex flex-col items-center space-y-6 px-6 after:h-24 after:w-px after:bg-gray-300">
        <a
          href="mailto:chandrashibezzo@gmail.com?subject=Support%20Request"
          className="text-gray-300 transition-colors hover:text-[#64ffda]"
          style={{ writingMode: 'vertical-rl' }}
        >
          chandrashibezzo@gmail.com
        </a>
      </div>
    </div>
  )
}
