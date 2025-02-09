'use client'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col justify-center px-4 sm:px-6 md:px-8">
      <div className="space-y-5 sm:space-y-6">
        <p className="font-mono text-sm text-[#64ffda] sm:text-base">Hello World! My name is</p>
        <h1 className="text-4xl font-bold text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
          Chandra Abdul Fattah.
        </h1>
        <h2 className="text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl">
          Experienced on building application, SDKs, plugins, and custom systems for mobile and frontend technologies.
        </h2>
        <p className="max-w-xl text-base text-gray-400 sm:text-lg">
          I have strong skills developing mobile apps using hybrid or native (
          <a href="https://flutter.dev/" target='_blank' className="text-[#64ffda] hover:underline">Flutter</a> | <a href="https://developer.android.com/" target='_blank' className="text-[#64ffda] hover:underline">Android</a> | <a href="https://developer.apple.com/" target='_blank' className="text-[#64ffda] hover:underline">iOS</a>).
          Experienced on other hybrid technologies like (<a href="https://reactnative.dev/" target='_blank' className="text-[#64ffda] hover:underline">React Native</a> | <a href="https://cordova.apache.org/" target='_blank' className="text-[#64ffda] hover:underline">Cordova</a> | <a href="https://kotlinlang.org/docs/multiplatform.html" target='_blank' className="text-[#64ffda] hover:underline">KMP</a>).
        </p>
        <Button
          size="lg"
          variant="outline"
          className="mt-6 bg-[#000000] border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#000000]"
          onClick={() => window.open('https://www.upwork.com/freelancers/~012eaf425acc314d8f?mp_source=share', '_blank')}
        >
          Hire me!
        </Button>
      </div>
    </section>
  )
}

