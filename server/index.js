import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = Number(process.env.PORT) || 8787
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/myzrvera'
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5
const hits = new Map()

app.disable('x-powered-by')
app.use(express.json({ limit: '16kb' }))

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket.remoteAddress || 'unknown'
}

function rateLimit(req, res, next) {
  const now = Date.now()
  const key = clientIp(req)
  const recent = (hits.get(key) || []).filter((time) => now - time < WINDOW_MS)
  if (recent.length >= MAX_REQUESTS) {
    res.status(429).json({ error: 'Too many messages. Try again in a minute.' })
    return
  }
  recent.push(now)
  hits.set(key, recent)
  next()
}

app.post('/api/contact', rateLimit, async (req, res) => {
  const email = String(req.body?.email || '').trim().slice(0, 254)
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!valid) {
    res.status(400).json({ error: 'Enter a valid email address.' })
    return
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email,
        message: `New contact request from ${email}`,
        _subject: 'New Contact Form Submission'
      }),
      signal: AbortSignal.timeout(8000)
    })

    if (!response.ok) {
      res.status(502).json({ error: 'Could not send your message. Try again.' })
      return
    }

    res.json({ ok: true })
  } catch (error) {
    console.error(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        route: '/api/contact',
        code: 'CONTACT_FORWARD_FAILED',
        message: error instanceof Error ? error.message : 'unknown'
      })
    )
    res.status(502).json({ error: 'Could not send your message. Try again.' })
  }
})

app.use((err, req, res, _next) => {
  const status = Number(err.status || err.statusCode) || 500
  console.error(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      route: req.path,
      code: 'REQUEST_ERROR',
      message: err instanceof Error ? err.message : 'unknown'
    })
  )
  const safeStatus = status >= 400 && status < 600 ? status : 500
  res.status(safeStatus).json({
    error: safeStatus === 400 ? 'Invalid request.' : 'Something went wrong.'
  })
})

const dist = path.resolve(__dirname, '../dist')
if (fs.existsSync(dist)) {
  app.use(express.static(dist))
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) {
      next()
      return
    }
    res.sendFile(path.join(dist, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`API listening on ${PORT}`)
})
