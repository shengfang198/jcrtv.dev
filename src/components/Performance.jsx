import { useEffect, useRef, useState } from 'react'

const LINE_A = 'M4,118 C48,112 88,90 133,82 C178,74 222,48 267,40 C312,32 352,20 396,14'
const LINE_B = 'M4,136 C48,130 88,108 133,100 C178,92 222,66 267,58 C312,50 352,38 396,32'

function Performance() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const lineStyle = (delay) => ({
    strokeDasharray: 1,
    strokeDashoffset: visible ? 0 : 1,
    transition: `stroke-dashoffset 1.6s ease ${delay}`
  })

  return (
    <section id="performance" className="bg-ink text-white">
      <div ref={ref} className="page-shell px-6 py-12 md:px-14 md:py-16">
        <h2 className="text-sm font-semibold tracking-[0.18em]">PERFORMANCE</h2>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/60">GROWTH</p>
            <p className="mt-3 font-display text-6xl font-black leading-none md:text-7xl">10x</p>
            <p className="mt-6 max-w-xs text-sm font-medium">Iterative progress and improvement.</p>
            <p className="mt-1 text-xs text-white/60">Performance metrics.</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/60">ANALYTICS</p>
            <svg viewBox="0 0 400 168" className="mt-4 h-44 w-full overflow-visible" role="img" aria-label="Year over year analytics from 2023 to 2026">
              <path
                d={LINE_B}
                fill="none"
                stroke="#06d6a0"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="1"
                style={lineStyle('0.12s')}
              />
              <path
                d={LINE_A}
                fill="none"
                stroke="#ff006e"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="1"
                style={lineStyle('0s')}
              />
              <text x="4" y="160" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="start">2023</text>
              <text x="133" y="160" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">2024</text>
              <text x="267" y="160" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">2025</text>
              <text x="396" y="160" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="end">2026</text>
            </svg>
            <p className="mt-3 text-xs text-white/60">Year-over-year analytics</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Performance
