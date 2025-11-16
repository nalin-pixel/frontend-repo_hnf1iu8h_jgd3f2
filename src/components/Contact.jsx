import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! I will get back to you shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Let’s build together</h2>
            <p className="mt-4 text-gray-700">Have a project in mind or just want to say hi? Drop a message.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button className="mt-2 rounded-lg bg-black text-white px-4 py-2 hover:opacity-90">Send Message</button>
              {status && <p className="text-sm text-gray-600">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
