import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Danish Ahmed</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-gray-300" />
          <div className="flex items-center gap-3">
            <a href="mailto:hello@danish.dev" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Email"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur-md">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="mailto:hello@danish.dev" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Email"><Mail size={18} /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
