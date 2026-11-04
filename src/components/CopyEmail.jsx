import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/site.js'

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text)
    return
  }
  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()
  document.execCommand('copy')
  field.remove()
}

function CopyEmail({ className = '' }) {
  const [copied, setCopied] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const onClick = async (event) => {
    const button = event.currentTarget
    try {
      await copyText(profile.email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        setCopied(false)
        setDismissed(true)
        button.blur()
      }, 1500)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <span className={`group relative w-fit ${className}`} onMouseLeave={() => setDismissed(false)}>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <span
        className={`absolute bottom-full left-1/2 z-10 -translate-x-1/2 pb-2 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${copied ? 'visible opacity-100' : 'invisible opacity-0'} ${dismissed ? 'hidden' : ''}`}
      >
        <button
          type="button"
          onClick={onClick}
          aria-label={`Copy email address ${profile.email}`}
          className="cursor-pointer whitespace-nowrap bg-[#ffb703] px-2 py-1 font-display text-[10px] font-semibold tracking-[0.16em] text-black no-underline transition-colors hover:bg-[#fb8500]"
        >
          {copied ? 'COPIED!' : 'COPY EMAIL'}
        </button>
      </span>
      <span className="sr-only" role="status">{copied ? 'Email copied to clipboard' : ''}</span>
    </span>
  )
}

export default CopyEmail
