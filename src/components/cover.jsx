import React from "react";

function Cover() {
  // Realistic particle system with pre-defined values
  const particles = [
    {
      id: 1,
      left: 15,
      top: 25,
      size: "w-0.5 h-0.5",
      opacity: 0.2,
      delay: 2,
      duration: 18,
    },
    {
      id: 2,
      left: 45,
      top: 75,
      size: "w-1 h-1",
      opacity: 0.3,
      delay: 5.2,
      duration: 22,
    },
    {
      id: 3,
      left: 75,
      top: 35,
      size: "w-0.5 h-0.5",
      opacity: 0.15,
      delay: 1.8,
      duration: 19,
    },
    {
      id: 4,
      left: 25,
      top: 65,
      size: "w-1 h-1",
      opacity: 0.25,
      delay: 3.5,
      duration: 25,
    },
    {
      id: 5,
      left: 85,
      top: 45,
      size: "w-0.5 h-0.5",
      opacity: 0.18,
      delay: 0.8,
      duration: 21,
    },
    {
      id: 6,
      left: 35,
      top: 85,
      size: "w-1 h-1",
      opacity: 0.35,
      delay: 4.1,
      duration: 17,
    },
    {
      id: 7,
      left: 65,
      top: 55,
      size: "w-1.5 h-1.5",
      opacity: 0.22,
      delay: 2.7,
      duration: 24,
    },
    {
      id: 8,
      left: 55,
      top: 25,
      size: "w-0.5 h-0.5",
      opacity: 0.28,
      delay: 1.3,
      duration: 20,
    },
    {
      id: 9,
      left: 95,
      top: 75,
      size: "w-1 h-1",
      opacity: 0.16,
      delay: 3.9,
      duration: 23,
    },
    {
      id: 10,
      left: 10,
      top: 45,
      size: "w-0.5 h-0.5",
      opacity: 0.31,
      delay: 2.1,
      duration: 16,
    },
    {
      id: 11,
      left: 70,
      top: 15,
      size: "w-1 h-1",
      opacity: 0.24,
      delay: 4.7,
      duration: 19,
    },
    {
      id: 12,
      left: 40,
      top: 95,
      size: "w-0.5 h-0.5",
      opacity: 0.19,
      delay: 0.5,
      duration: 22,
    },
    {
      id: 13,
      left: 80,
      top: 60,
      size: "w-1 h-1",
      opacity: 0.27,
      delay: 3.2,
      duration: 18,
    },
    {
      id: 14,
      left: 20,
      top: 30,
      size: "w-1.5 h-1.5",
      opacity: 0.21,
      delay: 5.4,
      duration: 25,
    },
    {
      id: 15,
      left: 60,
      top: 70,
      size: "w-0.5 h-0.5",
      opacity: 0.33,
      delay: 1.9,
      duration: 21,
    },
  ];

  const floatingParticles = [
    {
      id: 1,
      left: 30,
      top: 40,
      size: "w-1 h-1",
      opacity: 0.3,
      delay: 2,
      duration: 16,
    },
    {
      id: 2,
      left: 70,
      top: 60,
      size: "w-1.5 h-1.5",
      opacity: 0.25,
      delay: 3.5,
      duration: 18,
    },
    {
      id: 3,
      left: 50,
      top: 80,
      size: "w-1 h-1",
      opacity: 0.35,
      delay: 1.5,
      duration: 19,
    },
    {
      id: 4,
      left: 90,
      top: 30,
      size: "w-1.5 h-1.5",
      opacity: 0.28,
      delay: 4.2,
      duration: 17,
    },
    {
      id: 5,
      left: 15,
      top: 55,
      size: "w-1 h-1",
      opacity: 0.32,
      delay: 2.8,
      duration: 15,
    },
    {
      id: 6,
      left: 85,
      top: 75,
      size: "w-1.5 h-1.5",
      opacity: 0.26,
      delay: 0.8,
      duration: 20,
    },
    {
      id: 7,
      left: 35,
      top: 25,
      size: "w-1 h-1",
      opacity: 0.31,
      delay: 3.1,
      duration: 16,
    },
    {
      id: 8,
      left: 65,
      top: 85,
      size: "w-1 h-1",
      opacity: 0.29,
      delay: 1.3,
      duration: 18,
    },
  ];



  return (
    <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-md -z-10 pointer-events-none">
      {/* Realistic Atmospheric Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <style>
          {`
          @keyframes drift1 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(10px, -5px) rotate(90deg); } 50% { transform: translate(-5px, -10px) rotate(180deg); } 75% { transform: translate(-15px, 5px) rotate(270deg); } }
          @keyframes drift2 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(-12px, 8px) rotate(120deg); } 66% { transform: translate(8px, -12px) rotate(240deg); } }
          @keyframes fadeGlow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.2); } }
          @keyframes slowFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
          `}
        </style>

        {particles.map((particle, index) => {
          const animationType = index % 3 === 0 ? 'drift1' : index % 3 === 1 ? 'drift2' : 'fadeGlow';
          const animationDuration = 20 + (index % 3) * 10; // 20s, 30s, 40s

          return (
            <div
              key={particle.id}
              className={`absolute rounded-full ${particle.size} bg-white/30 blur-[0.5px]`}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                opacity: particle.opacity,
                animation: `${animationType} ${animationDuration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          );
        })}

        {/* Large ambient particles with blur */}
        {floatingParticles.map((particle, index) => (
          <div
            key={`float-${particle.id}`}
            className={`absolute rounded-full bg-white/20 blur-[1px]`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${4 + (index % 3) * 2}px`,
              height: `${4 + (index % 3) * 2}px`,
              opacity: particle.opacity,
              animation: `slowFloat ${15 + index * 5}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Very subtle foreground particles */}
        {[
          { top: 25, opacity: 0.5, delay: 0 },
          { top: 45, opacity: 0.4, delay: 1.5 },
          { top: 65, opacity: 0.3, delay: 3 },
          { top: 85, opacity: 0.6, delay: 4.5 },
          { top: 15, opacity: 0.4, delay: 6 },
          { top: 75, opacity: 0.5, delay: 7.5 }
        ].map((particle, i) => (
          <div
            key={`micro-${i}`}
            className="absolute w-[1px] h-[1px] bg-white/50 rounded-full blur-[0.5px]"
            style={{
              left: `${20 + i * 12}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity,
              animation: `fadeGlow ${25 + i * 5}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Cover;
