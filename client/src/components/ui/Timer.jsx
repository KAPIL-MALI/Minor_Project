import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon, Play, Square, RotateCcw } from 'lucide-react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex items-center gap-2 bg-base-200/50 px-3 py-1.5 rounded-lg border border-base-content/10">
      <TimerIcon size={16} className={isRunning ? 'text-primary animate-pulse' : 'text-base-content/60'} />
      <span className="font-mono text-sm font-medium w-12 text-center select-none">
        {formatTime(time)}
      </span>
      <div className="flex items-center border-l border-base-content/20 pl-2 ml-1">
        <button 
          onClick={toggleTimer}
          className="p-1 hover:bg-base-300 rounded text-base-content/70 hover:text-primary transition-colors"
          title={isRunning ? "Pause" : "Start"}
        >
          {isRunning ? <Square size={14} /> : <Play size={14} />}
        </button>
        <button 
          onClick={resetTimer}
          className="p-1 hover:bg-base-300 rounded text-base-content/70 hover:text-error transition-colors"
          title="Reset"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
};

export default Timer;
