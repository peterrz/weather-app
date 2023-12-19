import React, { useState, useEffect } from 'react';

interface Props {
  timezone: string;
}

export const Clock: React.FC<Props> = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div>
      <h4>{formattedTime}</h4>
    </div>
  );
};
