import { useRef, useState } from "react";

export default function useTimer(maxTime: number) {
  const [time, setTime] = useState(maxTime);
  let interval = useRef<NodeJS.Timeout>();

  function startTimer() {
    setTime(maxTime);
    interval.current = setInterval(() => {
      setTime((t) => Math.max(0, t - 1)); // Ensure it doesn't go below 0
    }, 1000);
    console.log("Start: ", interval.current);
  }

  function resetTimer() {
    clearInterval(interval.current);
    console.log("Stop: ", interval.current);
  }

  return {
    time,
    startTimer,
    resetTimer,
  };
}
