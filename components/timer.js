import React, { useRef, useEffect, useState } from "react";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const launchDate = new Date("February 28, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const difference = launchDate - currentDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <section className="">
      <section className="flex flex-col items-center justify-center min-h-full min-w-full">
        <div className="">
          <div className="text-yellow p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400">
            <i className="fas fa-clock text-white text-5xl"></i>
          </div>
        </div>
        <div className="mt-4  p-15 grid grid-cols-7 grid-flow-row-dense in-line rounded border-2 border-teal-600 text-white text-3xl">
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>|</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hrs</small>
            </p>
          </section>
          <span>|</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Mins</small>
            </p>
          </section>
          <span>|</span>
          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>Secs</small>
            </p>
          </section>
          <span>|</span>
        </div>
      </section>
    </section>
  );
};

export default Timer;
