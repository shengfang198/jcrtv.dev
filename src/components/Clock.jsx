import React, { useEffect, useState } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-[30%] mx-auto">
          <div className="animate-on-scroll relative flex items-center justify-center bg-white/[0.02] rounded-[2.5rem] border border-white/5 border-dashed">
            <div className="text-center py-8">
              <p className="text-white text-sm opacity-50">{currentTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clock;
