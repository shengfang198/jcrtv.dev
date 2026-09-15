import React, { useCallback, useEffect, useRef, useState } from 'react';
import moneyCashGif from '../assets/money-cash.gif';

function MiniGame() {
  const [runnerStarted, setRunnerStarted] = useState(false);
  const [runnerGameOver, setRunnerGameOver] = useState(false);
  const [runnerScore, setRunnerScore] = useState(0);
  const [runnerHighScore, setRunnerHighScore] = useState(0);
  const RUNNER_TRACK_HEIGHT = 304;
  const RUNNER_GROUND_OFFSET = 24;
  const RUNNER_PLAYER_SIZE = 50;
  const RUNNER_TOP_PADDING = 4;
  const getTopSpawnY = (trackHeight) => {
    const playableHeight = trackHeight - RUNNER_GROUND_OFFSET;
    return Math.max(playableHeight - RUNNER_PLAYER_SIZE - RUNNER_TOP_PADDING, 0);
  };
  const DEFAULT_TOP_SPAWN_Y = getTopSpawnY(RUNNER_TRACK_HEIGHT);
  const [runnerObstacles, setRunnerObstacles] = useState([]);
  const RUNNER_FLY_FORCE = 8.2;
  const RUNNER_GRAVITY = 0.6;
  const runnerTrackRef = useRef(null);
  const runnerPlayerElRef = useRef(null);
  const runnerObstacleElsRef = useRef(new Map());
  const runnerRafRef = useRef(null);
  const runnerLastFrameRef = useRef(null);
  const runnerScoreLastUpdateRef = useRef(0);
  const runnerObstacleIdRef = useRef(0);
  const runnerStateRef = useRef({
    playerY: DEFAULT_TOP_SPAWN_Y,
    velocity: 0,
    obstacles: [],
    spawnCounter: 0,
    score: 0,
    isStarted: false,
    isGameOver: false
  });

  useEffect(() => {
    const playerEl = runnerPlayerElRef.current;
    if (!playerEl) return;
    const y = runnerStateRef.current.playerY;
    playerEl.style.transform = `translateY(${-y}px)`;
  }, []);

  const resetRunnerState = useCallback(() => {
    const trackHeight = runnerTrackRef.current?.clientHeight || RUNNER_TRACK_HEIGHT;
    const playableHeight = trackHeight - RUNNER_GROUND_OFFSET;
    const startY = Math.max(playableHeight - RUNNER_PLAYER_SIZE - RUNNER_TOP_PADDING, 0);

    runnerObstacleElsRef.current.clear();
    runnerObstacleIdRef.current = 0;

    runnerStateRef.current = {
      playerY: startY,
      velocity: 0,
      obstacles: [],
      spawnCounter: 55,
      score: 0,
      isStarted: true,
      isGameOver: false
    };
    setRunnerStarted(true);
    setRunnerGameOver(false);
    setRunnerScore(0);
    setRunnerObstacles([]);

    if (runnerPlayerElRef.current) {
      runnerPlayerElRef.current.style.transform = `translateY(${-startY}px)`;
    }
  }, []);

  const flyRunner = useCallback(() => {
    const s = runnerStateRef.current;
    if (!s.isStarted || s.isGameOver) return;
    s.velocity = RUNNER_FLY_FORCE;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (!runnerStarted || runnerGameOver) {
          resetRunnerState();
          return;
        }
        flyRunner();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [runnerStarted, runnerGameOver, resetRunnerState, flyRunner]);

  useEffect(() => {
    if (!runnerStarted || runnerGameOver) return undefined;

    const GRAVITY = RUNNER_GRAVITY;
    const SPEED = 6;
    const SCORE_PER_FRAME = 0.12;
    const BASE_FRAME_MS = 1000 / 60;
    const PLAYER_SIZE = RUNNER_PLAYER_SIZE;
    const PLAYER_X = 72;
    const TRACK_HEIGHT = RUNNER_TRACK_HEIGHT;
    const GROUND_OFFSET = RUNNER_GROUND_OFFSET;

    const enemyColors = [
      '#ef4444',
      '#f97316',
      '#eab308',
      '#22c55e',
      '#06b6d4',
      '#3b82f6',
      '#8b5cf6',
      '#ec4899'
    ];

    const isEdgeCollision = (a, b) => {
      const overlapX = a.left <= b.right && a.right >= b.left;
      const overlapY = a.bottom <= b.top && a.top >= b.bottom;
      return overlapX && overlapY;
    };

    const loop = (now) => {
      const s = runnerStateRef.current;
      if (!s.isStarted || s.isGameOver) return;

      const lastNow = runnerLastFrameRef.current ?? now;
      const dtMs = Math.min(50, Math.max(0, now - lastNow));
      const dtFrames = dtMs / BASE_FRAME_MS;
      runnerLastFrameRef.current = now;

      s.playerY += s.velocity * dtFrames;
      s.velocity -= GRAVITY * dtFrames;

      if (s.playerY < 0) {
        s.playerY = 0;
        s.velocity = 0;
      }

      const trackHeight = runnerTrackRef.current?.clientHeight || TRACK_HEIGHT;
      const playableHeight = trackHeight - GROUND_OFFSET;
      const maxPlayerY = Math.max(playableHeight - PLAYER_SIZE, 0);
      if (s.playerY > maxPlayerY) {
        s.playerY = maxPlayerY;
        s.velocity = 0;
      }

      s.spawnCounter -= dtFrames;
      let didSpawn = false;

      if (s.spawnCounter <= 0) {
        const isTallBlock = Math.random() < 0.35;
        const blockHeight = isTallBlock
          ? Math.floor(playableHeight * (0.42 + Math.random() * 0.12))
          : 26 + Math.floor(Math.random() * 20);
        const blockWidth = isTallBlock
          ? 30 + Math.floor(Math.random() * 18)
          : blockHeight;
        const trackWidth = runnerTrackRef.current?.clientWidth || 760;
        const randomColor = enemyColors[Math.floor(Math.random() * enemyColors.length)];
        const obstaclePosition = Math.random() < 0.5 ? 'bottom' : 'top';
        const adjustedHeight = obstaclePosition === 'top'
          ? Math.max(Math.floor(blockHeight * 0.7), 20)
          : blockHeight;

        const id = runnerObstacleIdRef.current++;
        s.obstacles.push({
          id,
          x: trackWidth + blockWidth,
          width: blockWidth,
          height: adjustedHeight,
          color: randomColor,
          position: obstaclePosition
        });

        s.spawnCounter = 46 + Math.floor(Math.random() * 44);
        didSpawn = true;
      }

      const oldLen = s.obstacles.length;
      for (let i = 0; i < s.obstacles.length; i += 1) {
        s.obstacles[i].x -= SPEED * dtFrames;
      }
      s.obstacles = s.obstacles.filter((o) => o.x + o.width > -10);
      const didRemove = s.obstacles.length !== oldLen;

      const trackWidth = runnerTrackRef.current?.clientWidth || 760;
      const playerRect = {
        left: PLAYER_X,
        right: PLAYER_X + PLAYER_SIZE,
        bottom: s.playerY,
        top: s.playerY + PLAYER_SIZE
      };

      const collidedWithBlock = s.obstacles.some((o) => {
        const obstacleRect = {
          left: o.x,
          right: o.x + o.width,
          bottom: o.position === 'top' ? playableHeight - o.height : 0,
          top: o.position === 'top' ? playableHeight : o.height
        };
        return isEdgeCollision(playerRect, obstacleRect);
      });

      const groundRect = {
        left: 0,
        right: trackWidth,
        bottom: -1,
        top: 0
      };
      const collidedWithGround = isEdgeCollision(playerRect, groundRect);

      if (collidedWithBlock || collidedWithGround) {
        s.isGameOver = true;
        setRunnerGameOver(true);
        setRunnerStarted(false);

        const finalScore = Math.floor(s.score);
        setRunnerScore(finalScore);
        if (finalScore > runnerHighScore) setRunnerHighScore(finalScore);
        return;
      }

      s.score += SCORE_PER_FRAME * dtFrames;

      if (runnerPlayerElRef.current) {
        runnerPlayerElRef.current.style.transform = `translateY(${-s.playerY}px)`;
      }
      for (let i = 0; i < s.obstacles.length; i += 1) {
        const o = s.obstacles[i];
        const el = runnerObstacleElsRef.current.get(o.id);
        if (el) el.style.left = `${o.x}px`;
      }

      if (now - runnerScoreLastUpdateRef.current > 100) {
        setRunnerScore(Math.floor(s.score));
        runnerScoreLastUpdateRef.current = now;
      }

      if (didSpawn || didRemove) {
        setRunnerObstacles([...s.obstacles]);
      }

      runnerRafRef.current = requestAnimationFrame(loop);
    };

    runnerLastFrameRef.current = null;
    runnerScoreLastUpdateRef.current = 0;
    runnerRafRef.current = requestAnimationFrame(loop);

    return () => {
      if (runnerRafRef.current) cancelAnimationFrame(runnerRafRef.current);
    };
  }, [runnerStarted, runnerGameOver, runnerHighScore]);

  useEffect(() => {
    for (let i = 0; i < runnerObstacles.length; i += 1) {
      const o = runnerObstacles[i];
      const el = runnerObstacleElsRef.current.get(o.id);
      if (el) el.style.left = `${o.x}px`;
    }
  }, [runnerObstacles]);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="animate-on-scroll flashlight-card runner-card runner-card-surface runner-card-shell rounded-[2.5rem] border border-white/5 relative group hover:border-white/10 transition-colors">
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
            <p className="text-neutral-400 mb-0">Press Play, then use Space or Up Arrow to fly.</p>
          </div>

          <div className="relative z-10 px-8">
            <div className="relative h-72">
              <div className="runner-track-hole absolute inset-0 rounded-2xl" aria-hidden="true" />
              <div ref={runnerTrackRef} className="runner-track relative z-[1] h-72 rounded-2xl border border-white/10 overflow-hidden">
                <div className="absolute bottom-6 left-0 right-0 h-[2px] bg-white/20" />
                <div
                  ref={runnerPlayerElRef}
                  className="runner-player absolute bottom-6 left-[72px] w-[50px] h-[50px]"
                >
                  <img
                    src={moneyCashGif}
                    alt="Runner character"
                    className="w-full h-full object-contain runner-player-sprite"
                  />
                </div>
                {runnerObstacles.map((obstacle) => (
                  <div
                    key={obstacle.id}
                    ref={(el) => {
                      if (el) runnerObstacleElsRef.current.set(obstacle.id, el);
                      else runnerObstacleElsRef.current.delete(obstacle.id);
                    }}
                    className="runner-obstacle absolute rounded-sm"
                    style={{
                      width: `${obstacle.width}px`,
                      height: `${obstacle.height}px`,
                      ...(obstacle.position === 'top' ? { top: '0px' } : { bottom: '1.5rem' }),
                      backgroundColor: obstacle.color,
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                      backgroundSize: '6px 6px'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 p-8 pt-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!runnerStarted) {
                    resetRunnerState();
                  } else {
                    flyRunner();
                  }
                }}
                className="runner-play-btn px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
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
