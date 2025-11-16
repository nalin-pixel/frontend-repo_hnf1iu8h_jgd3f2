import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const items = [
  {
    title: 'Realtime Chat App',
    desc: 'Socket-powered chat with rooms, reactions, and message search.',
    tags: ['React', 'WebSocket', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI Image Stylizer',
    desc: 'Transform images with creative AI-driven styles and filters.',
    tags: ['FastAPI', 'Python', 'AI'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Starter',
    desc: 'A starter kit for fast, aesthetic portfolios with animations.',
    tags: ['Vite', 'Framer Motion', 'Tailwind'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">See all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border bg-white/70 backdrop-blur hover:shadow-lg transition overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a href={p.link} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Open"><ExternalLink size={18} /></a>
                    <a href={p.repo} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Code"><Github size={18} /></a>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
