'use client'

export function EmailSidebar() {
  return (
    <div className="fixed right-10 bottom-0 hidden md:block">
      <div className="flex flex-col items-center">
        <a
          href="mailto:chandrashibezzo@gmail.com?subject=Support%20Request"
          className="vertical-text my-6 text-sm text-[#a8b2d1] transition-colors duration-200 hover:text-[#64ffda]"
          style={{ writingMode: 'vertical-rl' }}
        >
          chandrashibezzo@gmail.com
        </a>
        <div className="h-24 w-[1px] bg-[#a8b2d1]" />
      </div>
    </div>
  )
}
