import { useState } from 'react'
import { profile, services } from '../data/site.js'

function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const onSubmit = async (event) => {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus('error')
      setMessage('Enter a valid email address.')
      return
    }

    setStatus('sending')
    setMessage('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value })
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        setStatus('error')
        setMessage(data.error || 'Could not send your message. Try again.')
        return
      }
      setStatus('success')
      setMessage('Message sent. I will get back to you.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Could not send your message. Try again.')
    }
  }

  return (
    <footer id="contact" className="relative bg-ink text-white">
      <div className="page-shell relative px-6 py-14 md:px-14">
        <div className="mx-auto max-w-md text-center">
          <p className="font-display text-4xl font-black tracking-[0.08em] md:text-5xl">JCREATV</p>
          <a href={`mailto:${profile.email}`} className="mt-4 block font-display text-sm font-medium">
            {profile.email}
          </a>
          <p className="mt-2 text-sm text-white/80">{profile.location}</p>
        </div>

        <div className="mt-10 md:absolute md:top-14 md:right-14 md:mt-0 md:w-56 md:text-right">
          <p className="text-sm font-semibold tracking-[0.16em]">SERVICES</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="mt-12 flex flex-wrap items-end gap-4">
          <p className="text-sm font-semibold leading-tight tracking-[0.12em]">
            GET IN
            <br />
            TOUCH
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="contact-email" className="sr-only">Email</label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="email"
              autoComplete="email"
              disabled={status === 'sending'}
              className="w-52 border border-white bg-transparent px-3 py-1.5 text-sm outline-none placeholder:text-white/50 focus:ring-1 focus:ring-white"
            />
            <button type="submit" disabled={status === 'sending'} className="btn disabled:opacity-50">
              {status === 'sending' ? 'SENDING' : 'SEND'}
            </button>
          </div>
          {(status === 'sending' || message) && (
            <p className={`w-full text-xs ${status === 'error' ? 'text-red-300' : 'text-white/70'}`} role="status">
              {status === 'sending' ? 'Sending...' : message}
            </p>
          )}
        </form>
      </div>

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className="fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg ring-2 ring-white transition-colors hover:bg-[#06d6a0] hover:text-black md:right-8 md:bottom-8"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M6 14l6-6 6 6" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer
