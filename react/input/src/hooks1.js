import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h2>Current Time</h2>
      <div>{formattedTime}</div>
    </div>
  );
};

export default DigitalClock;
