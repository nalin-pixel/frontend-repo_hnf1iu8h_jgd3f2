import { Code2, Rocket, Sparkles } from 'lucide-react'

export default function About() {
  const skills = ['React', 'TypeScript', 'Node.js', 'FastAPI', 'MongoDB', 'Tailwind', 'Framer Motion']

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I build interactive, performant web apps with an eye for detail and a love for playful motion. 
              I enjoy turning complex problems into simple, elegant interfaces.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-3"><Sparkles className="text-purple-600" size={18}/> Design-minded engineering</li>
              <li className="flex items-center gap-3"><Rocket className="text-blue-600" size={18}/> Performance and DX focus</li>
              <li className="flex items-center gap-3"><Code2 className="text-pink-600" size={18}/> Clean, modern stacks</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s} className="text-sm px-3 py-1 rounded-full bg-gray-100">{s}</span>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Currently exploring</h3>
              <p className="mt-2 text-gray-700">Edge runtimes, serverless AI tooling, and 3D on the web.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
