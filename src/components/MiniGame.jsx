import { useCallback, useEffect, useRef, useState } from 'react'

const TRACK_HEIGHT = 256
const PLAYER_SIZE = 46
const PLAYER_X = 64
const HIT_PAD = 8
const FLY_FORCE = 7.6
const GRAVITY = 0.52
const MIN_CLEARANCE = PLAYER_SIZE + 42
const HIGH_SCORE_KEY = 'flappy-bills-best'
const BLOCK_COLORS = ['#ffb703', '#fb8500', '#ff6608', '#ff006e', '#06d6a0', '#3a86ff']

function readHighScore() {
  try {
    const saved = Number(window.localStorage.getItem(HIGH_SCORE_KEY))
    return Number.isFinite(saved) && saved > 0 ? Math.floor(saved) : 0
  } catch {
    return 0
  }
}

function writeHighScore(score) {
  try {
    window.localStorage.setItem(HIGH_SCORE_KEY, String(score))
  } catch {
    /* ignore private mode */
  }
}

function MiniGame() {
  const [started, setStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(readHighScore)
  const [obstacles, setObstacles] = useState([])
  const trackRef = useRef(null)
  const playerRef = useRef(null)
  const obstacleRefs = useRef(new Map())
  const rafRef = useRef(0)
  const lastFrameRef = useRef(null)
  const scoreTickRef = useRef(0)
  const idRef = useRef(0)
  const highScoreRef = useRef(highScore)
  const hoverRef = useRef(false)
  const stateRef = useRef({
    playerY: Math.floor(TRACK_HEIGHT * 0.48),
    velocity: 0,
    obstacles: [],
    score: 0,
    isStarted: false,
    isGameOver: false
  })

  highScoreRef.current = highScore

  const applyPlayer = (y, velocity) => {
    const el = playerRef.current
    if (!el) return
    const tilt = Math.max(-20, Math.min(26, -velocity * 2.3))
    el.style.transform = `translate3d(0, ${-y}px, 0) rotate(${tilt}deg)`
  }

  useEffect(() => {
    applyPlayer(stateRef.current.playerY, 0)
  }, [])

  const resetGame = useCallback(() => {
    const height = trackRef.current?.clientHeight || TRACK_HEIGHT
    const startY = Math.floor(height * 0.48)
    obstacleRefs.current.clear()
    idRef.current = 0
    stateRef.current = {
      playerY: startY,
      velocity: 2.2,
      obstacles: [],
      score: 0,
      isStarted: true,
      isGameOver: false
    }
    setStarted(true)
    setGameOver(false)
    setScore(0)
    setObstacles([])
    applyPlayer(startY, 2.2)
  }, [])

  const fly = useCallback(() => {
    const state = stateRef.current
    if (!state.isStarted || state.isGameOver) return
    state.velocity = FLY_FORCE
  }, [])

  const onPointerDown = useCallback((event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    event.preventDefault()
    const state = stateRef.current
    if (!state.isStarted || state.isGameOver) {
      resetGame()
      return
    }
    fly()
  }, [fly, resetGame])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code !== 'Space' && event.code !== 'ArrowUp') return
      const state = stateRef.current
      if (state.isStarted && !state.isGameOver) {
        event.preventDefault()
        fly()
        return
      }
      if (!hoverRef.current) return
      event.preventDefault()
      resetGame()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [fly, resetGame])

  useEffect(() => {
    if (!started || gameOver) return undefined

    const overlaps = (a, b) => (
      a.left < b.right && a.right > b.left && a.bottom < b.top && a.top > b.bottom
    )

    let trackHeight = TRACK_HEIGHT
    let trackWidth = 760
    const measure = () => {
      const el = trackRef.current
      if (!el) return
      trackHeight = el.clientHeight || TRACK_HEIGHT
      trackWidth = el.clientWidth || 760
    }
    measure()
    window.addEventListener('resize', measure)

    const loop = (now) => {
      const state = stateRef.current
      if (!state.isStarted || state.isGameOver) return

      const lastNow = lastFrameRef.current ?? now
      const dtFrames = Math.min(50, Math.max(0, now - lastNow)) / (1000 / 60)
      lastFrameRef.current = now
      const speed = 5.1 + Math.min(3.4, Math.floor(state.score / 14) * 0.32)

      state.playerY += state.velocity * dtFrames
      state.velocity -= GRAVITY * dtFrames

      const maxPlayerY = Math.max(trackHeight - PLAYER_SIZE, 0)
      if (state.playerY > maxPlayerY) {
        state.playerY = maxPlayerY
        state.velocity = Math.min(state.velocity, -1.15)
      }
      if (state.playerY <= 0) {
        state.playerY = 0
        state.isGameOver = true
      }

      const last = state.obstacles[state.obstacles.length - 1]
      const spawnGap = Math.max(168, 228 - Math.min(52, state.score * 0.22))
      let didSpawn = false

      if (!last || last.x < trackWidth - spawnGap) {
        let position = Math.random() < 0.5 ? 'bottom' : 'top'
        let maxHeight = Math.floor(trackHeight * 0.5)
        if (last && last.x > trackWidth - 280) {
          if (last.position === position) position = position === 'top' ? 'bottom' : 'top'
          maxHeight = Math.max(24, trackHeight - last.height - MIN_CLEARANCE)
        }
        const isTall = Math.random() < 0.3 && maxHeight > 44
        const height = isTall
          ? Math.floor(maxHeight * (0.7 + Math.random() * 0.28))
          : 22 + Math.floor(Math.random() * Math.min(20, Math.max(8, maxHeight - 22)))
        const width = isTall ? 28 + Math.floor(Math.random() * 14) : 24 + Math.floor(Math.random() * 12)
        const id = idRef.current++
        state.obstacles.push({
          id,
          x: trackWidth + width,
          width,
          height,
          position,
          passed: false,
          color: BLOCK_COLORS[id % BLOCK_COLORS.length]
        })
        didSpawn = true
      }

      const previousLength = state.obstacles.length
      for (let i = 0; i < state.obstacles.length; i += 1) {
        const obstacle = state.obstacles[i]
        obstacle.x -= speed * dtFrames
        if (!obstacle.passed && obstacle.x + obstacle.width < PLAYER_X) {
          obstacle.passed = true
          state.score += 1
        }
      }
      state.obstacles = state.obstacles.filter((obstacle) => obstacle.x + obstacle.width > -12)
      const didRemove = state.obstacles.length !== previousLength

      if (!state.isGameOver) {
        const playerRect = {
          left: PLAYER_X + HIT_PAD,
          right: PLAYER_X + PLAYER_SIZE - HIT_PAD,
          bottom: state.playerY + HIT_PAD,
          top: state.playerY + PLAYER_SIZE - HIT_PAD
        }
        for (let i = 0; i < state.obstacles.length; i += 1) {
          const obstacle = state.obstacles[i]
          const obstacleRect = {
            left: obstacle.x,
            right: obstacle.x + obstacle.width,
            bottom: obstacle.position === 'top' ? trackHeight - obstacle.height : 0,
            top: obstacle.position === 'top' ? trackHeight : obstacle.height
          }
          if (overlaps(playerRect, obstacleRect)) {
            state.isGameOver = true
            break
          }
        }
      }

      if (state.isGameOver) {
        state.isStarted = false
        setGameOver(true)
        setStarted(false)
        const finalScore = Math.floor(state.score)
        setScore(finalScore)
        if (finalScore > highScoreRef.current) {
          highScoreRef.current = finalScore
          setHighScore(finalScore)
          writeHighScore(finalScore)
        }
        return
      }

      state.score += 0.045 * dtFrames
      applyPlayer(state.playerY, state.velocity)

      for (let i = 0; i < state.obstacles.length; i += 1) {
        const obstacle = state.obstacles[i]
        const el = obstacleRefs.current.get(obstacle.id)
        if (el) el.style.transform = `translate3d(${obstacle.x}px, 0, 0)`
      }

      if (now - scoreTickRef.current > 120) {
        setScore(Math.floor(state.score))
        scoreTickRef.current = now
      }
      if (didSpawn || didRemove) setObstacles(state.obstacles.slice())
      rafRef.current = requestAnimationFrame(loop)
    }

    lastFrameRef.current = null
    scoreTickRef.current = 0
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', measure)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [started, gameOver])

  const label = gameOver ? `Game over. Score ${score}` : 'Click or Space to fly'

  return (
    <section id="minigame" className="bg-ink text-white">
      <div className="page-shell px-6 pb-14 md:px-14 md:pb-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-sm font-semibold tracking-[0.18em]">MINIGAME</h2>
        <p className="text-xs font-medium tracking-wide text-white/70">
          Score {score} / Best {highScore}
        </p>
      </div>
      <div
        className="relative mt-4 border border-white/15"
        onMouseEnter={() => { hoverRef.current = true }}
        onMouseLeave={() => { hoverRef.current = false }}
      >
        <div
          ref={trackRef}
          className="relative h-64 cursor-pointer overflow-hidden touch-none"
          onPointerDown={onPointerDown}
          role="button"
          tabIndex={0}
          aria-label="Flappy Bills. Click or press Space to fly."
        >
          <div
            ref={playerRef}
            className="absolute bottom-0 left-16 h-[46px] w-[46px]"
          >
            <img src="/money-cash.gif" alt="" className="h-full w-full object-contain" draggable="false" />
          </div>
          {obstacles.map((obstacle) => (
            <div
              key={obstacle.id}
              ref={(el) => {
                if (el) obstacleRefs.current.set(obstacle.id, el)
                else obstacleRefs.current.delete(obstacle.id)
              }}
              className={`absolute ${obstacle.position === 'top' ? 'top-0' : 'bottom-0'}`}
              style={{
                width: `${obstacle.width}px`,
                height: `${obstacle.height}px`,
                backgroundColor: obstacle.color,
                transform: `translate3d(${obstacle.x}px, 0, 0)`
              }}
            />
          ))}
          {!started && (
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-medium tracking-wide text-white">
              {label}
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  )
}

export default MiniGame
