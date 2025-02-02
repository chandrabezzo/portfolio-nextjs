'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { getBasePath } from '@/utils/base-path'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { number: '01', label: 'About', href: '#about' },
    { number: '02', label: 'Experience', href: '#experience' },
    { number: '03', label: 'Work', href: '#work' },
    { number: '04', label: 'Contact', href: '#contact' },
  ] as const;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      window.location.href = getBasePath(href);
    }
  };

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#0a192f]/90 backdrop-blur shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <Link href="/" className="text-[#64ffda]">
          <div className="h-12 w-12">
            <Image
              src={getBasePath('/logo.svg')}
              alt="CAF Logo"
              className="h-full w-full"
              width={100}
              height={100}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.number}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group flex items-center text-sm text-gray-300 hover:text-[#64ffda]"
                >
                  <span className="mr-1 font-mono text-[#64ffda]">{item.number}.</span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                variant="outline"
                className="bg-[#000000] border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#000000]"
                onClick={() => window.open('https://drive.google.com/drive/folders/1VZaL5inHTdbDvRIAHPsYARvZ89IhHa-5?usp=sharing', '_blank')}
              >
                Resume
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-[#64ffda]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-md md:hidden">
          {/* Mobile Menu Content */}
          <div className="relative h-full w-full">
            <div className="flex h-20 items-center justify-between px-6">
              <Link href="/" className="text-[#64ffda]">
                <div className="h-12 w-12">
                  <Image
                    src={getBasePath('/logo.svg')}
                    alt="CAF Logo"
                    className="h-full w-full"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded border-2 border-dashed border-[#64ffda] p-2 text-[#64ffda]"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center bg-[#0a192f]">
              <ul className="space-y-10 text-center">
                {navItems.map((item) => (
                  <li key={item.number}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsOpen(false);
                      }}
                      className="flex flex-col items-center text-xl text-gray-200"
                    >
                      <span className="font-mono text-sm text-[#64ffda]">{item.number}.</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-[#000000] border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#000000]"
                    onClick={() => window.open('https://drive.google.com/drive/folders/1VZaL5inHTdbDvRIAHPsYARvZ89IhHa-5?usp=sharing', '_blank')}
                  >
                    Resume
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
