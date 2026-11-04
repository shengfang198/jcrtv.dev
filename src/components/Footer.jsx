import { profile, services, spotifyPlaylistId } from '../data/site.js'
import CopyEmail from './CopyEmail.jsx'

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contact" className="relative bg-ink text-white">
      <div className="page-shell flex flex-col px-6 py-14 md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8 md:px-14">
        <div className="order-last mt-10 md:order-none md:mt-0 md:w-72">
          <p className="text-sm font-semibold tracking-[0.16em]">NOW PLAYING</p>
          <iframe
            title="Spotify playlist"
            src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="mt-4 block rounded-xl border-0"
          />
        </div>
        <div className="mx-auto max-w-md text-center">
          <p className="font-display text-4xl font-black tracking-[0.08em] md:text-5xl">JCREATV</p>
          <CopyEmail className="mt-4 mx-auto block font-display text-sm font-medium" />
          <p className="mt-2 text-sm text-white/80">{profile.location}</p>
        </div>

        <div className="mt-10 md:mt-0 md:ml-auto md:w-56 md:text-right">
          <p className="text-sm font-semibold tracking-[0.16em]">SERVICES</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
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
