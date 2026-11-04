import { useState } from 'react'
import CopyEmail from './CopyEmail.jsx'

function ContactPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

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
    <article className="page-shell px-6 py-14 md:px-14 md:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">CONTACT</p>
      <h1 className="mt-3 font-display text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.85] tracking-[-0.04em]">
        GET IN TOUCH
      </h1>
      <p className="mt-3 text-lg">Leave your email and I will get back to you.</p>

      <form onSubmit={onSubmit} noValidate className="mt-12 max-w-md">
        <label htmlFor="contact-email" className="text-sm font-semibold tracking-[0.12em]">
          EMAIL
        </label>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            disabled={status === 'sending'}
            className="min-w-0 flex-1 border border-ink bg-transparent px-3 py-2 text-sm outline-none placeholder:text-neutral-400 focus:ring-1 focus:ring-ink"
          />
          <button type="submit" disabled={status === 'sending'} className="btn disabled:opacity-50">
            {status === 'sending' ? 'SENDING' : 'SEND'}
          </button>
        </div>
        {(status === 'sending' || message) && (
          <p className={`mt-3 text-xs ${status === 'error' ? 'text-red-600' : 'text-neutral-600'}`} role="status">
            {status === 'sending' ? 'Sending...' : message}
          </p>
        )}
      </form>

      <p className="mt-12 text-sm text-neutral-600">
        Or write directly to{' '}
        <CopyEmail className="font-medium text-ink underline" />
      </p>
    </article>
  )
}

export default ContactPage
