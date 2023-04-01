import React, { useState, useEffect } from 'react';
import './AnalogClock.css';

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = hours * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  const hourStyle = {
    transform: `rotate(${hourAngle}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${minuteAngle}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${secondAngle}deg)`,
  };

  return (
    <div className="analog-clock">
      <div className="dial">
        <div className="hand hour" style={hourStyle}></div>
        <div className="hand minute" style={minuteStyle}></div>
        <div className="hand second" style={secondStyle}></div>
      </div>
    </div>
  );
}

export default AnalogClock;
