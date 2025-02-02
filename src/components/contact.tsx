import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-6 text-center sm:space-y-8">
        <div className="space-y-2">
          <p className="font-mono text-sm text-[#64ffda] sm:text-base">04. What&apos;s Next?</p>
          <h2 className="text-3xl font-bold text-gray-200 sm:text-4xl md:text-5xl">Get In Touch</h2>
        </div>
        <p className="mx-auto max-w-md text-sm text-gray-400 sm:text-base">
          My inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-4 bg-[#000000] border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#000000]"
          asChild
        >
          <a href="mailto:chandrashibezzo@gmail.com?subject=Support%20Request">Mail Me</a>
        </Button>
      </div>
    </section>
  )
}

