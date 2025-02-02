import { Github, Instagram, X, Linkedin, Bot } from 'lucide-react'
import Link from 'next/link'

export function SocialSidebar() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/chandrabezzo' },
    { icon: Instagram, href: 'https://www.instagram.com/bezzo_170/' },
    { icon: X, href: 'https://x.com/BezzoKecil' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chandra-abdul-fattah/' },
    { icon: Bot, href: 'https://codeium.com/profile/chandra-abdul-fattah' },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 hidden md:block">
      <div className="flex flex-col items-center space-y-6 px-8 after:h-24 after:w-px after:bg-gray-300">
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <Link
              key={index}
              href={social.href}
              className="text-gray-300 transition-colors hover:text-[#64ffda]"
            >
              <Icon className="h-5 w-5" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

