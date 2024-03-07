import { useEffect, useState } from "react";

export function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  function initCurrentTime() {
    setCurrentTime(new Date());
  }

  function initTimer() {
    const timer = setInterval(initCurrentTime, 1000);
    return () => clearInterval(timer);
  }

  useEffect(initTimer, []);

  return <h1>{currentTime.toLocaleTimeString()}</h1>;
}
