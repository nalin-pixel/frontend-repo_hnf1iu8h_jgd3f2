import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center text-xs font-medium bg-black text-white rounded-full px-3 py-1 mb-4">Open to opportunities</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I’m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Danish Ahmed</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            A product-focused developer crafting modern web interfaces and delightful user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-black text-white hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white border hover:bg-gray-50 transition">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
