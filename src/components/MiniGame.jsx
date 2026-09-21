import React, { useCallback, useEffect, useRef, useState } from 'react';
import moneyCashGif from '../assets/money-cash.gif';

const RUNNER_TRACK_HEIGHT = 304;
const RUNNER_PLAYER_SIZE = 50;
const RUNNER_PLAYER_X = 72;
const RUNNER_HIT_PAD = 8;
const RUNNER_FLY_FORCE = 7.6;
const RUNNER_GRAVITY = 0.52;
const RUNNER_MIN_CLEARANCE = RUNNER_PLAYER_SIZE + 42;
const HIGH_SCORE_KEY = 'flappy-bills-best';
const ENEMY_COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'];

function readHighScore() {
  try {
    const saved = Number(window.localStorage.getItem(HIGH_SCORE_KEY));
    return Number.isFinite(saved) && saved > 0 ? Math.floor(saved) : 0;
  } catch {
    return 0;
  }
}

function writeHighScore(score) {
  try {
    window.localStorage.setItem(HIGH_SCORE_KEY, String(score));
  } catch {
    /* ignore quota / private mode */
  }
}

function MiniGame() {
  const [runnerStarted, setRunnerStarted] = useState(false);
  const [runnerGameOver, setRunnerGameOver] = useState(false);
  const [runnerScore, setRunnerScore] = useState(0);
  const [runnerHighScore, setRunnerHighScore] = useState(readHighScore);
  const [runnerObstacles, setRunnerObstacles] = useState([]);
  const runnerTrackRef = useRef(null);
  const runnerPlayerElRef = useRef(null);
  const runnerObstacleElsRef = useRef(new Map());
  const runnerRafRef = useRef(null);
  const runnerLastFrameRef = useRef(null);
  const runnerScoreLastUpdateRef = useRef(0);
  const runnerObstacleIdRef = useRef(0);
  const runnerHighScoreRef = useRef(runnerHighScore);
  const hoverCardRef = useRef(false);
  const runnerStateRef = useRef({
    playerY: Math.floor(RUNNER_TRACK_HEIGHT * 0.48),
    velocity: 0,
    obstacles: [],
    score: 0,
    isStarted: false,
    isGameOver: false
  });

  runnerHighScoreRef.current = runnerHighScore;

  const applyPlayerTransform = (y, velocity) => {
    const el = runnerPlayerElRef.current;
    if (!el) return;
    const tilt = Math.max(-20, Math.min(26, -velocity * 2.3));
    el.style.transform = `translate3d(0, ${-y}px, 0) rotate(${tilt}deg)`;
  };

  useEffect(() => {
    applyPlayerTransform(runnerStateRef.current.playerY, 0);
  }, []);

  const resetRunnerState = useCallback(() => {
    const trackHeight = runnerTrackRef.current?.clientHeight || RUNNER_TRACK_HEIGHT;
    const startY = Math.floor(trackHeight * 0.48);

    runnerObstacleElsRef.current.clear();
    runnerObstacleIdRef.current = 0;

    runnerStateRef.current = {
      playerY: startY,
      velocity: 2.2,
      obstacles: [],
      score: 0,
      isStarted: true,
      isGameOver: false
    };
    setRunnerStarted(true);
    setRunnerGameOver(false);
    setRunnerScore(0);
    setRunnerObstacles([]);
    applyPlayerTransform(startY, 2.2);
  }, []);

  const flyRunner = useCallback(() => {
    const s = runnerStateRef.current;
    if (!s.isStarted || s.isGameOver) return;
    s.velocity = RUNNER_FLY_FORCE;
  }, []);

  const handleTrackPointer = useCallback((e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    const s = runnerStateRef.current;
    if (!s.isStarted || s.isGameOver) {
      resetRunnerState();
      return;
    }
    flyRunner();
  }, [resetRunnerState, flyRunner]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code !== 'Space' && e.code !== 'ArrowUp') return;
      const s = runnerStateRef.current;
      if (s.isStarted && !s.isGameOver) {
        e.preventDefault();
        flyRunner();
        return;
      }
      if (!hoverCardRef.current) return;
      e.preventDefault();
      resetRunnerState();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resetRunnerState, flyRunner]);

  useEffect(() => {
    if (!runnerStarted || runnerGameOver) return undefined;

    const GRAVITY = RUNNER_GRAVITY;
    const BASE_FRAME_MS = 1000 / 60;
    const PLAYER_SIZE = RUNNER_PLAYER_SIZE;
    const PLAYER_X = RUNNER_PLAYER_X;

    const overlaps = (a, b) => (
      a.left < b.right &&
      a.right > b.left &&
      a.bottom < b.top &&
      a.top > b.bottom
    );

    let trackHeight = RUNNER_TRACK_HEIGHT;
    let trackWidth = 760;
    const measureTrack = () => {
      const el = runnerTrackRef.current;
      if (!el) return;
      trackHeight = el.clientHeight || RUNNER_TRACK_HEIGHT;
      trackWidth = el.clientWidth || 760;
    };
    measureTrack();
    window.addEventListener('resize', measureTrack);

    const loop = (now) => {
      const s = runnerStateRef.current;
      if (!s.isStarted || s.isGameOver) return;

      const lastNow = runnerLastFrameRef.current ?? now;
      const dtMs = Math.min(50, Math.max(0, now - lastNow));
      const dtFrames = dtMs / BASE_FRAME_MS;
      runnerLastFrameRef.current = now;

      const speed = 5.1 + Math.min(3.4, Math.floor(s.score / 14) * 0.32);

      s.playerY += s.velocity * dtFrames;
      s.velocity -= GRAVITY * dtFrames;

      const playableHeight = trackHeight;
      const maxPlayerY = Math.max(playableHeight - PLAYER_SIZE, 0);

      if (s.playerY > maxPlayerY) {
        s.playerY = maxPlayerY;
        s.velocity = Math.min(s.velocity, -1.15);
      }

      if (s.playerY <= 0) {
        s.playerY = 0;
        s.isGameOver = true;
      }

      const last = s.obstacles[s.obstacles.length - 1];
      const spawnGap = Math.max(168, 228 - Math.min(52, s.score * 0.22));
      let didSpawn = false;

      if (!last || last.x < trackWidth - spawnGap) {
        let position = Math.random() < 0.5 ? 'bottom' : 'top';
        let maxHeight = Math.floor(playableHeight * 0.5);

        if (last && last.x > trackWidth - 280) {
          if (last.position === position) {
            position = position === 'top' ? 'bottom' : 'top';
          }
          maxHeight = Math.max(24, playableHeight - last.height - RUNNER_MIN_CLEARANCE);
        }

        const isTall = Math.random() < 0.3 && maxHeight > 44;
        const height = isTall
          ? Math.floor(maxHeight * (0.7 + Math.random() * 0.28))
          : 22 + Math.floor(Math.random() * Math.min(20, Math.max(8, maxHeight - 22)));
        const width = isTall
          ? 28 + Math.floor(Math.random() * 14)
          : 24 + Math.floor(Math.random() * 12);

        const id = runnerObstacleIdRef.current++;
        s.obstacles.push({
          id,
          x: trackWidth + width,
          width,
          height,
          color: ENEMY_COLORS[Math.floor(Math.random() * ENEMY_COLORS.length)],
          position,
          passed: false
        });
        didSpawn = true;
      }

      const oldLen = s.obstacles.length;
      for (let i = 0; i < s.obstacles.length; i += 1) {
        const o = s.obstacles[i];
        o.x -= speed * dtFrames;
        if (!o.passed && o.x + o.width < PLAYER_X) {
          o.passed = true;
          s.score += 1;
        }
      }
      s.obstacles = s.obstacles.filter((o) => o.x + o.width > -12);
      const didRemove = s.obstacles.length !== oldLen;

      if (!s.isGameOver) {
        const playerRect = {
          left: PLAYER_X + RUNNER_HIT_PAD,
          right: PLAYER_X + PLAYER_SIZE - RUNNER_HIT_PAD,
          bottom: s.playerY + RUNNER_HIT_PAD,
          top: s.playerY + PLAYER_SIZE - RUNNER_HIT_PAD
        };

        for (let i = 0; i < s.obstacles.length; i += 1) {
          const o = s.obstacles[i];
          const obstacleRect = {
            left: o.x,
            right: o.x + o.width,
            bottom: o.position === 'top' ? playableHeight - o.height : 0,
            top: o.position === 'top' ? playableHeight : o.height
          };
          if (overlaps(playerRect, obstacleRect)) {
            s.isGameOver = true;
            break;
          }
        }
      }

      if (s.isGameOver) {
        s.isStarted = false;
        setRunnerGameOver(true);
        setRunnerStarted(false);
        const finalScore = Math.floor(s.score);
        setRunnerScore(finalScore);
        if (finalScore > runnerHighScoreRef.current) {
          runnerHighScoreRef.current = finalScore;
          setRunnerHighScore(finalScore);
          writeHighScore(finalScore);
        }
        return;
      }

      s.score += 0.045 * dtFrames;
      applyPlayerTransform(s.playerY, s.velocity);

      for (let i = 0; i < s.obstacles.length; i += 1) {
        const o = s.obstacles[i];
        const el = runnerObstacleElsRef.current.get(o.id);
        if (el) el.style.transform = `translate3d(${o.x}px, 0, 0)`;
      }

      if (now - runnerScoreLastUpdateRef.current > 120) {
        setRunnerScore(Math.floor(s.score));
        runnerScoreLastUpdateRef.current = now;
      }

      if (didSpawn || didRemove) {
        setRunnerObstacles(s.obstacles.slice());
      }

      runnerRafRef.current = requestAnimationFrame(loop);
    };

    runnerLastFrameRef.current = null;
    runnerScoreLastUpdateRef.current = 0;
    runnerRafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', measureTrack);
      if (runnerRafRef.current) cancelAnimationFrame(runnerRafRef.current);
    };
  }, [runnerStarted, runnerGameOver]);

  useEffect(() => {
    for (let i = 0; i < runnerObstacles.length; i += 1) {
      const o = runnerObstacles[i];
      const el = runnerObstacleElsRef.current.get(o.id);
      if (el) el.style.transform = `translate3d(${o.x}px, 0, 0)`;
    }
  }, [runnerObstacles]);

  const overlayLabel = runnerGameOver
    ? `Game over. Score ${runnerScore}`
    : 'Click or Space to fly';

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div
          className="animate-on-scroll flashlight-card runner-card runner-card-surface runner-card-shell rounded-2xl border border-white/5 relative group hover:border-white/10 transition-colors"
          onMouseEnter={() => { hoverCardRef.current = true; }}
          onMouseLeave={() => { hoverCardRef.current = false; }}
        >
          <div className="relative z-10 p-8 pb-4">
            <div className="flex items-center justify-between mb-6">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                Mini Game
              </div>
              <div className="text-sm text-neutral-400 font-medium">
                Score: <span className="text-white">{runnerScore}</span> | Best: <span className="text-white">{runnerHighScore}</span>
              </div>
            </div>

            <h3 className="text-2xl text-white mb-2 font-medium tracking-tight">Flappy Bills</h3>
            <p className="text-neutral-400 mb-0">Click the track, or use Space / Up Arrow to fly.</p>
          </div>

          <div className="relative z-10 px-8">
            <div className="relative h-72">
              <div
                ref={runnerTrackRef}
                className={`runner-track relative z-[1] h-72 rounded-2xl border border-white/10 overflow-hidden${runnerStarted ? ' is-running' : ''}`}
                onPointerDown={handleTrackPointer}
              >
                <div className="runner-track-grid" aria-hidden="true" />
                <div
                  ref={runnerPlayerElRef}
                  className={`runner-player absolute bottom-0 left-[72px] w-[50px] h-[50px]${runnerStarted ? ' is-running' : ''}`}
                >
                  <img
                    src={moneyCashGif}
                    alt="Runner character"
                    className="w-full h-full object-contain runner-player-sprite"
                    draggable="false"
                  />
                </div>
                {runnerObstacles.map((obstacle) => (
                  <div
                    key={obstacle.id}
                    ref={(el) => {
                      if (el) runnerObstacleElsRef.current.set(obstacle.id, el);
                      else runnerObstacleElsRef.current.delete(obstacle.id);
                    }}
                    className={`runner-obstacle absolute${obstacle.position === 'top' ? ' is-top' : ' is-bottom'}`}
                    style={{
                      width: `${obstacle.width}px`,
                      height: `${obstacle.height}px`,
                      backgroundColor: obstacle.color,
                      transform: `translate3d(${obstacle.x}px, 0, 0)`
                    }}
                  />
                ))}
                {(!runnerStarted) && (
                  <div className="runner-track-overlay">
                    {overlayLabel}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative z-10 p-8 pt-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!runnerStarted) resetRunnerState();
                  else flyRunner();
                }}
                className="runner-play-btn rounded-full font-semibold text-sm"
              >
                {!runnerStarted ? (runnerGameOver ? 'Play Again' : 'Play') : 'Fly'}
              </button>
              {runnerGameOver && (
                <span className="text-sm text-neutral-400">Game over. Press Play Again.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiniGame;
