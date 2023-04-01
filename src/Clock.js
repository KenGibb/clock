import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}</h2>
    </div>
  );
}

export default Clock;
