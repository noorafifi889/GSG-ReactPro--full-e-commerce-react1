import React from 'react'
import "../../assets/Timer.css";

 import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes = minutes - 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours = hours - 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays = days - 1;
        }

        if (newDays < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="timer-section">
      {/* Timer Labels */}
      <span className="timer-labels">
        <span className="timer-label">Days</span>
        <span className="timer-label">Hours</span>
        <span className="timer-label">Minutes</span>
        <span className="timer-label">Seconds</span>
      </span>

      {/* Timer Values */}
      <span className="timer-values">
        <div className="time-unit">
          <span className="time-number">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-unit">
          <span className="time-number">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-unit">
          <span className="time-number">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-unit">
          <span className="time-number">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </span>
    </span>
  );
};

export default Timer;